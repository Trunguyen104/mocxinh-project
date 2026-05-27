/** Số giả ngẫu nhiên ổn định theo index — dùng khi khởi tạo geometry 3D (tránh Math.random trong render). */
export function seededUnit(index: number, salt = 0): number {
  const x = Math.sin((index + 1) * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}
