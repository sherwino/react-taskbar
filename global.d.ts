/// <reference types="react-scripts" />

declare type ExplorerState = {
  closed: boolean;
  width: number;
  height: number;
  x: number;
  y: number;
};

declare type ExplorerProps = {};

declare interface MyWindow extends Window {
  Smallchat: any;
}

declare type TodoItem = {
  label: string;
  value: string;
  checked: boolean;
  description?: string;
  deleted?: number; // If we want to do soft deletes
};

declare type TodoState = {
  closed?: boolean;
  width: number;
  height: number;
  x: number;
  y: number;
  checkedItems: string[];
  todoItems: TodoItem[];
  inputValue?: string;
  focusedInput?: boolean;
};

declare type TodoProps = {};

declare type SetTodoState = {
  closed?: boolean;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  checkedItems?: string[];
  todoItems?: TodoItem[];
  inputValue?: string;
  focusedInput?: boolean;
};

declare type GetState = () => TodoState;
declare type SetState = (obj: SetTodoState) => void;

declare type StorageUtil = {
  // Todo: we should use a namespace
  get: (key: string) => any;
  set: (key: string, value: any) => boolean;
  remove: (key: string) => void;
};

declare type IconContainerProps = {
  spin?: boolean;
};

declare type TodoContainerProps = {
  isHoveredItem: boolean;
}

declare type WindowProps = {
  children: React.ReactNode;
  name: AppType;
};

type Values<T> = T[keyof T];

declare type IconsType = Values<typeof import("./src/utils/const").ICONS>;
declare type AppType = Values<typeof import("./src/utils/const").APPS>;
declare type ConfigType = Values<typeof import("./src/utils/const").CONFIGS>;

declare type IconWrapper = {
  name: IconsType;
  spin?: boolean;
};

declare type WindowConfig = {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  open?: boolean;
  minimized?: boolean;
};

declare type MergeUtil = (
  defaultCfg?: WindowConfig,
  lastKnownCfg?: WindowConfig,
  currentCfg?: WindowConfig
) => WindowConfig;

// apps: [] list of apps and their configs
// openApp: (appName) => void;
// minimizeApp: (appName) => void;
// closeApp: (appName) => void;
// setDefaultCfg: (appName, config) => void;

declare type WindowCtx = {
  apps: App[];
  addApp: SetApps;
  openApp: SetAction;
  minimizeApp: SetAction;
  closeApp: SetAction;
  setLastKnown: SetConfigType;
  setCurrent: SetConfigType;
  setDefault: SetConfigType;
  disable: SetAction;
  disabledWindow: string;
};

declare type App = {
  name: IconsType;
  defaultCfg: WindowConfig;
  lastKnownCfg?: WindowConfig;
  currentCfg?: WindowConfig;
  config?: WindowConfig;
};

declare type SetApps = (appName: AppType, config?: WindowConfig) => void;
declare type SetAction = (appName: AppType) => void;
declare type SetConfig = (
  appName: AppType,
  config: WindowConfig,
  type: ConfigType
) => void;

declare type SetConfigType = (appName: AppType, config: WindowConfig) => void;
