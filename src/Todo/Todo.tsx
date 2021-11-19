import React from "react";
import { Rnd } from "react-rnd";
import storage from "../utils";
import { Checkbox, Input } from "antd";
import "antd/dist/antd.css";

const styles = {
  topBar: {
    background: "url(https://i.gyazo.com/9c73502f78d3e1f810d79cab6ec2464a.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    margin: 0,
    borderLeft: "2px",
    borderRight: "2px",
    borderColor: "#ddd",
    borderStyle: "solid",
    width: "100%",
    color: "#fff",
    height: 25,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  closeBtn: {
    height: 25,
    width: 30,
    cursor: "default",
  },
};

// TODO: Make this functional
// TODO: Convert to TS
// TODO: Find out why you have to click twice to keep focused
// TODO: If storage not available useRef
// TODO: Delete item action
// TODO: Make it pretty

const STORAGE_KEYS = {
  checkedItems: "checkedItems",
  todoItems: "todoItems",
};

const TYPE = {
  enter: "enter",
  change: "change",
};

let getState;
let setState;

function handleCheckBoxChange(checkedValues) {
  // updateStorage
  console.log("checkedValues from event", checkedValues);
  storage.set(STORAGE_KEYS.checkedItems, checkedValues);
}

function handleInputChange(event, type = null, enterValue) {
  // updateStorage
  console.log("handle Input change", { event, type });
  const inputValue = event.target.value;
  const todoItems = getState().todoItems;

  setState({ inputValue });

  if (todoItems && type === TYPE.enter) {
    const newTodoList = [...todoItems, enterValue];
    storage.set(STORAGE_KEYS.todoItems, newTodoList);
    setState({ inputValue: "", todoItems: newTodoList });
    console.log("set", inputValue, "in storage", { todoItems, newTodoList });
  }
}

function handleInputFocus(e) {
  console.log("onFocus of inpput", e);
  setState({ focusedInput: true });
}

function handleInputBlur(e) {
  console.log("onBlur of inpput", e);
  setState({ focusedInput: false });
}

function handleOnClick(event) {
  event.stopPropagation();
}

function renderInput(inputRef, state) {
  const { inputValue } = state;
  console.log("render input", { inputValue, inputRef });
  return (
    <Input
      key="todo-input-field"
      style={{ width: "100%", margin: 20 }}
      placeholder={"Enter To Do List Items Here"}
      value={inputValue}
      ref={inputRef}
      onClick={handleOnClick}
      onChange={(e) => handleInputChange(e, TYPE.change)}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      onPressEnter={(e) => handleInputChange(e, TYPE.enter, inputValue)}
    />
  );
}

/**
 *
 * @param {String[]} checkedItems - array of checked todo item values
 * @param {Object} todoItems - array of todo item objects
 * @returns {*} - Checkbox Component
 */
function renderCheckBoxes(state) {
  const { checkedItems, todoItems } = state;
  // Populate defauled checked with storage, also save / update storage when things change.
  console.log("things from...storage", { checkedItems, todoItems });
  return (
    checkedItems && (
      <Checkbox.Group
        style={{
          width: "100%",
          height: 800,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(255,255,255, 0.6)",
        }}
        options={todoItems} // List of items
        defaultValue={checkedItems} // List of previously checked items
        onChange={handleCheckBoxChange}
      />
    )
  );
}

class Todo extends React.Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.state = {
      closed: null,
      width: "830",
      height: "690",
      x: "100",
      y: "40",
      checkedItems: [],
      todoItems: [],
      inputValue: null,
      focusedInput: null,
    };
  }

  componentWillMount() {
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

  set = (object) => {
    return this.setState((prevState) => Object.assign(prevState, object));
  };

  render() {
    const { focusedInput, closed, width, height, x, y } = this.state;
    const position = { x, y };

    return (
      !closed && (
        <Rnd
          id="window"
          bounds="window"
          size={{ width, height }}
          position={position}
          disableDragging={focusedInput}
          onDragStop={(e, d) => {
            this.setState({ x: d.x, y: d.y });
          }}
          onResize={(e, direction, ref, delta, position) => {
            this.setState({
              width: ref.style.width,
              height: ref.style.height,
              ...position,
            });
          }}
        >
          <div style={styles.topBar} onClick={(e) => e.preventDefault()}>
            <div
              className="invisible-close-btn"
              style={styles.closeBtn}
              onClick={() => this.setState({ closed: true })}
            />
          </div>
          {renderInput(this.inputRef, this.state)}
          {renderCheckBoxes(this.state)}
        </Rnd>
      )
    );
  }
}

export default Todo;
