-- Run this file once in the Supabase SQL editor, before deploying the API routes.
-- Set the ticket price and schedule in the INSERT statement below before running it.

create extension if not exists pgcrypto;

create table if not exists public.workshops (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  ticket_price integer not null check (ticket_price >= 2000),
  capacity integer not null check (capacity > 0),
  starts_at timestamptz not null,
  created_at timestamptz not null default now()
);

do $$
begin
  create type public.registration_status as enum ('PENDING_PAYMENT', 'PAID', 'EXPIRED', 'CANCELLED');
exception
  when duplicate_object then null;
end $$;

create table if not exists public.workshop_registrations (
  id uuid primary key default gen_random_uuid(),
  order_code bigint generated always as identity (start with 1000000) unique,
  workshop_id uuid not null references public.workshops(id),
  verified_email text not null,
  full_name text not null,
  phone text not null,
  activity text not null,
  note text,
  amount integer not null check (amount >= 2000),
  status public.registration_status not null default 'PENDING_PAYMENT',
  payment_link_id text unique,
  checkout_url text,
  payment_expires_at timestamptz,
  paid_at timestamptz,
  payos_reference text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint one_ticket_per_verified_email unique (workshop_id, verified_email)
);

create table if not exists public.email_otps (
  email text primary key,
  otp_hash text not null,
  expires_at timestamptz not null,
  attempts integer not null default 0 check (attempts >= 0),
  last_sent_at timestamptz not null default now(),
  window_started_at timestamptz not null default now(),
  window_send_count integer not null default 1 check (window_send_count > 0),
  ip_hash text not null
);

alter table public.workshops enable row level security;
alter table public.workshop_registrations enable row level security;
alter table public.email_otps enable row level security;

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists workshop_registration_updated_at on public.workshop_registrations;
create trigger workshop_registration_updated_at
before update on public.workshop_registrations
for each row execute function public.set_updated_at();

-- Stores only a server-created OTP hash. Rate limit: once/minute, at most 5 sends/hour/email.
create or replace function public.issue_email_otp(
  p_email text,
  p_otp_hash text,
  p_expires_at timestamptz,
  p_ip_hash text
) returns boolean language plpgsql security definer set search_path = public as $$
declare
  current_otp public.email_otps;
begin
  select * into current_otp from public.email_otps where email = lower(p_email) for update;
  if found then
    if current_otp.last_sent_at > now() - interval '1 minute' then
      return false;
    end if;
    if current_otp.window_started_at > now() - interval '1 hour' and current_otp.window_send_count >= 5 then
      return false;
    end if;
    update public.email_otps
    set otp_hash = p_otp_hash,
        expires_at = p_expires_at,
        attempts = 0,
        last_sent_at = now(),
        ip_hash = p_ip_hash,
        window_started_at = case when current_otp.window_started_at <= now() - interval '1 hour' then now() else current_otp.window_started_at end,
        window_send_count = case when current_otp.window_started_at <= now() - interval '1 hour' then 1 else current_otp.window_send_count + 1 end
    where email = lower(p_email);
  else
    insert into public.email_otps (email, otp_hash, expires_at, ip_hash)
    values (lower(p_email), p_otp_hash, p_expires_at, p_ip_hash);
  end if;
  return true;
end;
$$;

create or replace function public.verify_email_otp(p_email text, p_otp_hash text)
returns boolean language plpgsql security definer set search_path = public as $$
declare
  current_otp public.email_otps;
begin
  select * into current_otp from public.email_otps where email = lower(p_email) for update;
  if not found or current_otp.expires_at <= now() or current_otp.attempts >= 5 then
    return false;
  end if;
  if current_otp.otp_hash <> p_otp_hash then
    update public.email_otps set attempts = attempts + 1 where email = lower(p_email);
    return false;
  end if;
  delete from public.email_otps where email = lower(p_email);
  return true;
end;
$$;

-- Atomically frees old holds, prevents duplicate email registrations, and holds exactly one seat.
create or replace function public.reserve_workshop_seat(
  p_slug text,
  p_email text,
  p_full_name text,
  p_phone text,
  p_activity text,
  p_note text,
  p_expires_at timestamptz
) returns public.workshop_registrations language plpgsql security definer set search_path = public as $$
declare
  selected_workshop public.workshops;
  existing_registration public.workshop_registrations;
  held_seats integer;
  result public.workshop_registrations;
begin
  select * into selected_workshop from public.workshops where slug = p_slug for update;
  if not found then raise exception 'WORKSHOP_NOT_FOUND'; end if;

  update public.workshop_registrations
  set status = 'EXPIRED'
  where workshop_id = selected_workshop.id
    and status = 'PENDING_PAYMENT'
    and payment_expires_at <= now();

  select * into existing_registration
  from public.workshop_registrations
  where workshop_id = selected_workshop.id and verified_email = lower(p_email)
  for update;

  if found and existing_registration.status = 'PAID' then raise exception 'ALREADY_REGISTERED'; end if;
  if found and existing_registration.status = 'PENDING_PAYMENT' and existing_registration.payment_expires_at > now() then
    return existing_registration;
  end if;

  select count(*) into held_seats from public.workshop_registrations
  where workshop_id = selected_workshop.id
    and (status = 'PAID' or (status = 'PENDING_PAYMENT' and payment_expires_at > now()));
  if held_seats >= selected_workshop.capacity then raise exception 'SOLD_OUT'; end if;

  if found then
    update public.workshop_registrations
    set full_name = p_full_name, phone = p_phone, activity = p_activity, note = nullif(p_note, ''),
        amount = selected_workshop.ticket_price, status = 'PENDING_PAYMENT', payment_link_id = null,
        checkout_url = null, payment_expires_at = p_expires_at, paid_at = null, payos_reference = null
    where id = existing_registration.id returning * into result;
  else
    insert into public.workshop_registrations
      (workshop_id, verified_email, full_name, phone, activity, note, amount, payment_expires_at)
    values
      (selected_workshop.id, lower(p_email), p_full_name, p_phone, p_activity, nullif(p_note, ''), selected_workshop.ticket_price, p_expires_at)
    returning * into result;
  end if;
  return result;
end;
$$;

create or replace function public.save_payment_link(
  p_order_code bigint,
  p_payment_link_id text,
  p_checkout_url text
) returns void language plpgsql security definer set search_path = public as $$
begin
  update public.workshop_registrations
  set payment_link_id = p_payment_link_id, checkout_url = p_checkout_url
  where order_code = p_order_code and status = 'PENDING_PAYMENT';
end;
$$;

create or replace function public.expire_registration_if_needed(
  p_order_code bigint,
  p_email text
) returns void language plpgsql security definer set search_path = public as $$
begin
  update public.workshop_registrations
  set status = 'EXPIRED'
  where order_code = p_order_code
    and verified_email = lower(p_email)
    and status = 'PENDING_PAYMENT'
    and payment_expires_at <= now();
end;
$$;

create or replace function public.mark_registration_paid(
  p_order_code bigint,
  p_payment_link_id text,
  p_amount integer,
  p_reference text
) returns boolean language plpgsql security definer set search_path = public as $$
declare
  registration public.workshop_registrations;
begin
  select * into registration from public.workshop_registrations where order_code = p_order_code for update;
  if not found then raise exception 'ORDER_NOT_FOUND'; end if;
  if registration.status = 'PAID' then return true; end if;
  if registration.status <> 'PENDING_PAYMENT'
    or registration.payment_link_id <> p_payment_link_id
    or registration.amount <> p_amount then
    raise exception 'PAYMENT_MISMATCH';
  end if;
  update public.workshop_registrations
  set status = 'PAID', paid_at = now(), payos_reference = p_reference
  where id = registration.id;
  return true;
end;
$$;

-- Fill these event details in before running. The price below is an example only.
insert into public.workshops (slug, title, ticket_price, capacity, starts_at)
values ('moc-xinh-fall-2026', 'Workshop Mộc Xinh — Fall 2026', 150000, 10, '2026-10-07T18:15:00+07:00')
on conflict (slug) do nothing;
