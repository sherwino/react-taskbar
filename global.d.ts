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

declare type TodoState = {
  closed?: boolean;
  width: number;
  height: number;
  x: number;
  y: number;
  checkedItems: string[];
  todoItems: any[];
  inputValue?: string;
  focusedInput?: boolean;
}

declare type TodoProps = {}


declare type SetTodoState = {
  closed?: boolean;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  checkedItems?: string[];
  todoItems?: any[];
  inputValue?: string;
  focusedInput?: boolean;
}

declare type GetState = () => TodoState
declare type SetState = (obj: SetTodoState) => void;

declare type StorageUtil = {
  // Todo: we should use a namespace
  get: (key: string) => any;
  set: (key: string, value: any) => boolean;
  remove: (key: string) => void;
}