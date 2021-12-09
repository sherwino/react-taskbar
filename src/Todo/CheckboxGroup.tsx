import * as React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { TodoCheckInput, TodoLabel, TodoContainer } from "./Todo.styles";

type CheckboxProps = {
  todoItems: TodoItem[];
  checkedItems: TodoItem["value"][];
  removeItem: (value: string) => void;
  updateChecked: (value: string, checked: boolean) => void;
  onChange?: any; // should probably be handled here
  setTodoItems?: any; // because we have to update the todoItems
};

//  A bunch of todo items with checkbox ---> editable area ---> delete button
export const CheckboxGroup = (props: CheckboxProps): any => {
  const todoItems = props.todoItems || [];
  const removeItem = props.removeItem;
  const updateChecked = props.updateChecked;
  const [hoveredItem, setHoveredItem] = React.useState<null | number>(null);
  const onMouseHover = (itemHovered: number | null) => (e: any) => {
    console.log("onMouseHover", {
      itemHovered,
      e,
      todoItem: itemHovered && todoItems[itemHovered],
      todoItems,
    });
    setHoveredItem(itemHovered);
  };

  const onDelete = (value: string) => (e: any) => {
    console.log("delete idx", e, value);
    removeItem(value);
  };

  const onCheck = (value: string, checked: boolean) => (e: any) => {
    console.log("on check", e, value, checked);
    updateChecked(value, checked);
  };

  return todoItems.map((item, idx) => (
    <TodoContainer
      isHoveredItem={hoveredItem === idx}
      onMouseEnter={onMouseHover(idx)}
      onMouseLeave={onMouseHover(null)}
    >
      <TodoCheckInput
        type="checkbox"
        id={item?.value + idx}
        name={item?.value}
        checked={item?.checked}
        onClick={onCheck(item?.value, !item?.checked)}
      />
      <TodoLabel htmlFor={item?.value}>{item?.label}</TodoLabel>
      <DeleteOutlined
        style={{
          transition: "all 0.2s ease-in",
          opacity: hoveredItem === idx ? 1 : 0,
          float: "right",
          padding: "1px",
          margin: "0 1rem",
        }}
        onClick={onDelete(item.value)}
      />
    </TodoContainer>
  ));
};
