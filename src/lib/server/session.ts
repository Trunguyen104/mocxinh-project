import crypto from "node:crypto";
import { cookies } from "next/headers";
import { env } from "@/lib/server/env";
import { hmacSha256, safeEqual } from "@/lib/server/crypto";

const COOKIE_NAME = "moc_xinh_verified_email";
const MAX_AGE_SECONDS = 30 * 60;

type SessionPayload = { email: string; exp: number };

const encode = (value: string) => Buffer.from(value).toString("base64url");
const decode = (value: string) => Buffer.from(value, "base64url").toString("utf8");

export async function setVerifiedEmailSession(email: string) {
  const payload: SessionPayload = { email, exp: Math.floor(Date.now() / 1000) + MAX_AGE_SECONDS };
  const encodedPayload = encode(JSON.stringify(payload));
  const token = `${encodedPayload}.${hmacSha256(encodedPayload, env.sessionSecret())}`;
  const store = await cookies();
  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: MAX_AGE_SECONDS,
    path: "/",
  });
}

export async function getVerifiedEmailSession(): Promise<string | null> {
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  if (!token) return null;
  const [encodedPayload, signature] = token.split(".");
  if (
    !encodedPayload ||
    !signature ||
    !safeEqual(signature, hmacSha256(encodedPayload, env.sessionSecret()))
  ) {
    return null;
  }
  try {
    const payload = JSON.parse(decode(encodedPayload)) as SessionPayload;
    return payload.exp > Math.floor(Date.now() / 1000) &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)
      ? payload.email
      : null;
  } catch {
    return null;
  }
}

export const requestFingerprint = (request: Request) => {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  return crypto.createHash("sha256").update(forwardedFor).digest("hex");
};
