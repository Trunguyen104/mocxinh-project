# Mộc Xinh — Frontend

Boilerplate Next.js + React Three Fiber + GSAP ScrollTrigger cho trang landing thương hiệu giấy thủ công Mộc Xinh.

## Chạy dự án

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

Yêu cầu **Node.js 20+** (xem `.nvmrc`).

## Chất lượng code (ESLint, Prettier, Husky)

| Lệnh                   | Mô tả                           |
| ---------------------- | ------------------------------- |
| `npm run lint`         | Kiểm tra ESLint                 |
| `npm run lint:fix`     | ESLint tự sửa                   |
| `npm run format`       | Format toàn repo (Prettier)     |
| `npm run format:check` | Kiểm tra format (dùng trong CI) |
| `npm run typecheck`    | `tsc --noEmit`                  |

**Husky** chạy `lint-staged` trước mỗi commit (ESLint + Prettier trên file staged).

Sau `npm install`, hook được kích hoạt qua script `prepare`. Nếu cần cài lại hook:

```bash
npm run prepare
```

## CI (GitHub Actions)

Workflow [`.github/workflows/ci.yml`](.github/workflows/ci.yml) chạy khi push/PR lên `main`, `master`, `develop`:

1. `npm ci`
2. `npm run lint`
3. `npm run format:check`
4. `npm run typecheck`
5. `npm run build`

## Tech stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4** — palette kraft / olive / ivory / beige
- **React Three Fiber** + **Drei** — canvas 3D scroll-driven
- **GSAP ScrollTrigger** — pin section & scrub `progress` 0→1

## Cấu trúc thư mục

```
src/
├── app/                    # layout, page, globals
├── config/
│   └── scrollStoryConfig.ts   # 5 cảnh, ngưỡng progress, copy
├── hooks/
│   └── useScrollStoryProgress.ts
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Hero, Story, Products, Values
│   ├── three/
│   │   ├── StoryCanvas.tsx
│   │   ├── StoryExperience.tsx
│   │   ├── scenes/         # 5 scene placeholder (thay bằng GLB)
│   │   └── materials/
│   └── ui/
├── lib/constants.ts
└── types/story.ts
```

## Scroll 3D — cách hoạt động

1. `StorySection` tạo container cao `500vh` (`STORY_SCROLL_HEIGHT_VH`).
2. `useScrollStoryProgress` pin layer canvas và cập nhật `progress` (0–1).
3. `StoryExperience` dùng `getSceneWeight()` để crossfade 5 cảnh procedural.
4. Cảnh cuối (`progress > 0.82`): tờ giấy xoay nhẹ theo con trỏ.

## Brand colors (Tailwind)

| Token        | Màu     |
| ------------ | ------- |
| `ivory`      | #f5f0e6 |
| `beige`      | #e8dcc8 |
| `kraft`      | #8b6f47 |
| `kraft-dark` | #5c4a32 |
| `olive`      | #6b7c5c |
