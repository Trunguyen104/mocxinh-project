export type StorySceneId =
  | "grass-field"
  | "grass-bundles"
  | "pulp-process"
  | "molding"
  | "finished-paper";

export interface StorySceneConfig {
  id: StorySceneId;
  index: number;
  start: number;
  end: number;
  title: string;
  subtitle: string;
}

export interface StoryScrollState {
  progress: number;
  activeScene: StorySceneConfig;
  sceneIndex: number;
}
