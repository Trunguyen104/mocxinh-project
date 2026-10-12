const required = (name: string) => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
};

export const env = {
  appUrl: () => required("APP_URL").replace(/\/$/, ""),
  supabaseUrl: () => required("SUPABASE_URL").replace(/\/$/, ""),
  supabaseServiceRoleKey: () => required("SUPABASE_SERVICE_ROLE_KEY"),
  payosClientId: () => required("PAYOS_CLIENT_ID"),
  payosApiKey: () => required("PAYOS_API_KEY"),
  payosChecksumKey: () => required("PAYOS_CHECKSUM_KEY"),
  resendApiKey: () => required("RESEND_API_KEY"),
  emailFrom: () => required("EMAIL_FROM"),
  otpHashSecret: () => required("OTP_HASH_SECRET"),
  sessionSecret: () => required("SESSION_SECRET"),
  workshopSlug: () => process.env.WORKSHOP_SLUG || "moc-xinh-fall-2026",
};
