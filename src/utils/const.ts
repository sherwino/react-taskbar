export enum ICONS {
  chrome = "chrome",
  explorer = "explorer",
  firefox = "firefox",
  outlook = "outlook",
  start = "start",
  task = "task",
  vscode = "vscode",
};
// For some reason cant use "as const" which lets this work like an enum

export const APPS = ICONS;

export enum CONFIGS {
    default = "default",
    lastKnown = "lastKnown",
    current = "current"
}

export const DEFAULT_APP_CONFIG = {
  code: false,
  todo: true,
  windowsExplorer: false,
};

export const WINDOW_DEFAULTS = {
  width: 800,
  height: 600,
  x: 100,
  y: 100,
  open: true,
  minimized: false,
};
