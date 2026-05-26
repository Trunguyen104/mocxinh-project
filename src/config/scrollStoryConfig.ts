import type { StorySceneConfig, StorySceneId } from "@/types/story";

/** Tổng chiều cao vùng scroll (vh) — điều chỉnh để thay đổi tốc độ kể chuyện */
export const STORY_SCROLL_HEIGHT_VH = 500;

export const STORY_SCENES: StorySceneConfig[] = [
  {
    id: "grass-field",
    index: 0,
    start: 0,
    end: 0.2,
    title: "Đồng cỏ dại",
    subtitle:
      "Cỏ dại len lỏi giữa các hàng cây ăn trái — vấn đề quen thuộc của nông dân ĐBSCL.",
  },
  {
    id: "grass-bundles",
    index: 1,
    start: 0.2,
    end: 0.4,
    title: "Thu hoạch",
    subtitle: "Cỏ được gom, buộc bó — bước đầu biến phế phẩm thành nguyên liệu.",
  },
  {
    id: "pulp-process",
    index: 2,
    start: 0.4,
    end: 0.6,
    title: "Nấu & xay",
    subtitle: "Nước và sợi thực vật hòa quyện, tạo bột giấy organic.",
  },
  {
    id: "molding",
    index: 3,
    start: 0.6,
    end: 0.8,
    title: "Đổ khuôn thủ công",
    subtitle: "Sợi cỏ li ti lan tỏa trên khung — khoảnh khắc giấy còn sống.",
  },
  {
    id: "finished-paper",
    index: 4,
    start: 0.8,
    end: 1,
    title: "Tờ giấy Mộc Xinh",
    subtitle:
      "Bề mặt nhám chân thực — xoay nhẹ chuột để cảm nhận texture thủ công.",
  },
];

export function getActiveScene(progress: number): StorySceneConfig {
  const clamped = Math.min(1, Math.max(0, progress));
  return (
    STORY_SCENES.find((s) => clamped >= s.start && clamped < s.end) ??
    STORY_SCENES[STORY_SCENES.length - 1]
  );
}

/** Độ hiển thị 0–1 của từng cảnh 3D (crossfade mềm giữa các phase) */
export function getSceneWeight(
  progress: number,
  sceneId: StorySceneId,
): number {
  const scene = STORY_SCENES.find((s) => s.id === sceneId);
  if (!scene) return 0;

  const span = scene.end - scene.start;
  const fade = span * 0.15;
  const local = (progress - scene.start) / span;

  if (progress < scene.start - fade || progress > scene.end + fade) return 0;
  if (progress < scene.start) {
    return (progress - (scene.start - fade)) / fade;
  }
  if (progress > scene.end) {
    return 1 - (progress - scene.end) / fade;
  }
  if (local < fade / span) return local / (fade / span);
  if (local > 1 - fade / span) return (1 - local) / (fade / span);
  return 1;
}
