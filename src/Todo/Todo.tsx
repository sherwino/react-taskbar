import "antd/dist/antd.css";
import React from "react";
import { WindowContext } from "../Contexts/WindowContext";
import { storage } from "../utils";
import { APPS, STORAGE_KEYS } from "../utils/const";
import { Window } from "../Window/Window";
import { CheckboxGroup } from "./CheckboxGroup";
import { CheckboxContainer, TodoInput } from "./Todo.styles";

let getState: GetState;
let setState: SetState;

function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
  const inputValue = e.target.value;

  setState({ inputValue });
}

function createTodoItemFromInput(inputValue: string): TodoItem {
  return {
    label: inputValue,
    value: inputValue.replace(/^[a-z0-9]gi/, ""),
    checked: false,
  };
}

function handleKeyboardInput(e: React.KeyboardEvent<HTMLInputElement>) {
  const { todoItems, inputValue } = getState();
  const enter = e.code === "13" || e.key.toLowerCase() === "enter";

  if (todoItems && inputValue && enter) {
    const newTodoItem = createTodoItemFromInput(inputValue);
    const newTodoList = [...todoItems, newTodoItem];
    storage.set(STORAGE_KEYS.todoItems, newTodoList);
    setState({ inputValue: "", todoItems: newTodoList });
  }
}

const handleInputFocus =
  (value: any) => (e: React.FormEvent<HTMLInputElement>) => {
    // value is the context, need to clean up some of the garbage like this
    value.disable(APPS.task);
    setState({ focusedInput: true });
    e.currentTarget.focus();
    e.currentTarget.select();
  };

const handleInputBlur =
  (value: any) => (e: React.FormEvent<HTMLInputElement>) => {
    // value is the context
    value.disable("");

    setState({ focusedInput: false });
  };

const handleOnClick =
  (value: any) => (e: React.MouseEvent<HTMLInputElement>) => {
    value.disable(APPS.task);
    e.stopPropagation();
    e.preventDefault();
  };

function removeItem(value: string) {
  const { todoItems } = getState();

  const newTodoList = todoItems.filter(item => item.value !== value);
  storage.set(STORAGE_KEYS.todoItems, newTodoList);

  setState({ todoItems: newTodoList });
}

function updateChecked(value: string, checked: boolean) {
  const { todoItems } = getState();

  const newTodoList = todoItems.map(item => {
    if (item.value === value) {
      return { ...item, checked };
    }

    return item;
  });

  storage.set(STORAGE_KEYS.todoItems, newTodoList);

  setState({ todoItems: newTodoList });
}

function renderInput(inputRef: any, state: TodoState, value: any) {
  console.log("is this context???", value);
  const { inputValue } = state;
  return (
    <TodoInput
      key="todo-input-field"
      placeholder={"Enter To Do List Items Here"}
      value={inputValue}
      ref={inputRef}
      onClick={handleOnClick}
      onChange={handleInputChange}
      onFocus={handleInputFocus(value)}
      onBlur={handleInputBlur(value)}
      onKeyPress={handleKeyboardInput}
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
  // TODO: don't use ant design checkbox group because doesn't let you make fields editable or deletable
  return (
    checkedItems && (
      <CheckboxContainer>
        <CheckboxGroup
          todoItems={todoItems} // List of items
          checkedItems={checkedItems} // List of previously checked items
          removeItem={removeItem}
          updateChecked={updateChecked}
          // onChange={handleCheckBoxChange}
        />
      </CheckboxContainer>
    )
  );
}

class Todo extends React.Component<TodoProps, TodoState> {
  inputRef: any;
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
    return this.setState(prevState => Object.assign(prevState, object));
  };

  render() {
    // When we turn into a functional component
    // const CheckBoxes = React.useCallback(() => renderCheckBoxes(this.state), [this.state.checkedItems, this.state.todoItems]);
    return (
      <WindowContext.Consumer>
        {context => (
          <Window name={APPS.task}>
            {renderInput(this.inputRef, this.state, context)}
            {renderCheckBoxes(this.state)}
          </Window>
        )}
      </WindowContext.Consumer>
    );
  }
}

export default Todo;
