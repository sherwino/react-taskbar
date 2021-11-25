import { Checkbox, Input } from "antd";
import "antd/dist/antd.css";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import React from "react";
import { storage } from "../utils";
import { APPS } from "../utils/const";
import { Window } from "../Window/Window";


const STORAGE_KEYS = {
  checkedItems: "checkedItems",
  todoItems: "todoItems",
};

let getState: GetState;
let setState: SetState;

function handleCheckBoxChange(checkedValues: CheckboxValueType[]) {
  // updateStorage
  storage.set(STORAGE_KEYS.checkedItems, checkedValues);
}

function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
  const inputValue = e.target.value;

  setState({ inputValue });
}

function handleKeyboardInput(e: React.KeyboardEvent<HTMLInputElement>) {
  const { todoItems, inputValue } = getState();

  if (todoItems && inputValue) {
    const newTodoList = [...todoItems, inputValue];
    storage.set(STORAGE_KEYS.todoItems, newTodoList);
    setState({ inputValue: "", todoItems: newTodoList });
  }
}

function handleInputFocus(e: React.FormEvent<HTMLInputElement>) {
  setState({ focusedInput: true });
}

function handleInputBlur(e: React.FormEvent<HTMLInputElement>) {
  setState({ focusedInput: false });
}

function handleOnClick(e: React.MouseEvent<HTMLInputElement>) {
  e.stopPropagation();
  e.preventDefault();
}

function renderInput(
  inputRef: React.RefObject<Input> | React.LegacyRef<Input>,
  state: TodoState
) {
  const { inputValue } = state;
  return (
    <Input
      key="todo-input-field"
      style={{ width: "100%", padding: 8 }}
      placeholder={"Enter To Do List Items Here"}
      value={inputValue}
      ref={inputRef}
      onClick={handleOnClick}
      onChange={handleInputChange}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      onPressEnter={handleKeyboardInput}
    />
  );
}

/**
 *
 * @param {String[]} checkedItems - array of checked todo item values
 * @param {Object} todoItems - array of todo item objects
 * @returns {*} - Checkbox Component
 */
function renderCheckBoxes(state: TodoState) {
  const { checkedItems, todoItems } = state;
  // Populate defauled checked with storage, also save / update storage when things change.
  return (
    checkedItems && (
      <Checkbox.Group
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(255,255,255, 0.6)",
          overflowY: "scroll",
        }}
        options={todoItems} // List of items
        defaultValue={checkedItems} // List of previously checked items
        onChange={handleCheckBoxChange}
      />
    )
  );
}

class Todo extends React.Component<TodoProps, TodoState> {
  inputRef: React.RefObject<Input> | React.LegacyRef<Input>;
  constructor(props: TodoProps) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      closed: false,
      width: 650,
      height: 450,
      x: 100,
      y: 40,
      checkedItems: [],
      todoItems: [],
      inputValue: "",
      focusedInput: false,
    };
  }

  componentDidMount() {
    this.setState({
      checkedItems: storage.get(STORAGE_KEYS.checkedItems) || [],
      todoItems: storage.get(STORAGE_KEYS.todoItems) || [],
    });

    // Insert weird hacks below:
    getState = this.get;
    setState = this.set;
  }

  get = () => {
    return this.state;
  };

  set = (object: {}) => {
    return this.setState((prevState) => Object.assign(prevState, object));
  };

  render() {
    const { focusedInput, closed, width, height, x, y } = this.state;
    // const CheckBoxes = React.useCallback(() => renderCheckBoxes(this.state), [this.state.checkedItems, this.state.todoItems]);
    const position = { x, y };
// todo add disable movement on focusedInput
    return (
        <Window name={APPS.task}>
          {renderInput(this.inputRef, this.state)}
          {renderCheckBoxes(this.state)}
          {/* <CheckBoxes/> */}
        </Window>
    );
  }
}

export default Todo;
