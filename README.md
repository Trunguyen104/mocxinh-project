# Mộc Xinh — Frontend

Boilerplate Next.js + React Three Fiber + GSAP ScrollTrigger cho trang landing thương hiệu giấy thủ công Mộc Xinh.

## Chạy dự án

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

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
public/models/              # Đặt file .glb/.gltf tại đây
```

## Scroll 3D — cách hoạt động

1. `StorySection` tạo container cao `500vh` (`STORY_SCROLL_HEIGHT_VH`).
2. `useScrollStoryProgress` pin layer canvas và cập nhật `progress` (0–1).
3. `StoryExperience` dùng `getSceneWeight()` để crossfade 5 cảnh procedural.
4. Cảnh cuối (`progress > 0.82`): tờ giấy xoay nhẹ theo con trỏ.

## Thay model placeholder bằng GLB

```tsx
import { useGLTF } from "@react-three/drei";

useGLTF.preload("/models/grass-field.glb");

function GrassFieldScene({ weight }: { weight: number }) {
  const { scene } = useGLTF("/models/grass-field.glb");
  // morph / visibility theo weight
}
```

Điều chỉnh timeline trong `src/config/scrollStoryConfig.ts`.

## Brand colors (Tailwind)

| Token        | Màu     |
|-------------|---------|
| `ivory`     | #f5f0e6 |
| `beige`     | #e8dcc8 |
| `kraft`     | #8b6f47 |
| `kraft-dark`| #5c4a32 |
| `olive`     | #6b7c5c |
