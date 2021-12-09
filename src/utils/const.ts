export const ICONS: Record<string, string> = {
  chrome: "chrome",
  explorer: "explorer",
  firefox: "firefox",
  outlook: "outlook",
  start: "start",
  task: "task",
  vscode: "vscode",
};
// For some reason cant use "as const" which lets this work like an enum

export const APPS = ICONS;

export const CONFIGS: Record<string, keyof App>  = {
    default: "defaultCfg",
    lastKnown: "lastKnownCfg",
    current: "currentCfg"
}

export const DEFAULT_APP_CONFIG: Record<string, boolean>  = {
  code: false,
  todo: true,
  windowsExplorer: false,
};

export const WINDOW_DEFAULTS = {
  width: 720,
  height: 480,
  x: 100,
  y: 100,
  open: false,
  minimized: false,
};

export const STORAGE_KEYS = {
  checkedItems: "checkedItems",
  todoItems: "todoItems",
  appConfigs: "appConfigs"
};
