import crypto from "node:crypto";

export const hmacSha256 = (value: string, secret: string) =>
  crypto.createHmac("sha256", secret).update(value).digest("hex");

export const safeEqual = (left: string, right: string) => {
  const leftBuffer = Buffer.from(left, "utf8");
  const rightBuffer = Buffer.from(right, "utf8");
  return (
    leftBuffer.length === rightBuffer.length && crypto.timingSafeEqual(leftBuffer, rightBuffer)
  );
};

export const createOtp = () => crypto.randomInt(100_000, 1_000_000).toString();

export const canonicalize = (data: Record<string, unknown>) =>
  Object.keys(data)
    .sort()
    .map((key) => `${key}=${data[key] ?? ""}`)
    .join("&");
