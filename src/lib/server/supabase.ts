import { env } from "@/lib/server/env";

type SupabaseError = { message?: string; details?: string; hint?: string; code?: string };

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const response = await fetch(`${env.supabaseUrl()}${path}`, {
    ...init,
    headers: {
      apikey: env.supabaseServiceRoleKey(),
      Authorization: `Bearer ${env.supabaseServiceRoleKey()}`,
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
    cache: "no-store",
  });
  if (!response.ok) {
    const error = (await response.json().catch(() => ({}))) as SupabaseError;
    throw new Error(
      error.message || error.details || `Supabase request failed (${response.status})`,
    );
  }
  const body = await response.text();
  return body ? (JSON.parse(body) as T) : (undefined as T);
}

export const supabaseRpc = <T>(name: string, body: Record<string, unknown>) =>
  request<T>(`/rest/v1/rpc/${name}`, { method: "POST", body: JSON.stringify(body) });

export const supabaseSelect = <T>(table: string, query: string) =>
  request<T>(`/rest/v1/${table}?${query}`);
