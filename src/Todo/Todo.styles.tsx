import styled from "styled-components";
import { CheckboxGroup } from "./CheckboxGroup";

export const CheckBoxGroup = styled(CheckboxGroup)`
  /* width: 100%; */
  /* height: 100%; */
  /* display: flex; */
  /* flex-direction: column; */
  overflow-y: scroll;
`;

export const TodoInput = styled.input`
  width: 100%;
  padding: 8;
  color: black;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  line-height: 2.2rem;
  flex-direction: row;
  background: "yellow";
`;


export const TodoContainer = styled.div<TodoContainerProps>`
  display: "flex";
  flex-direction: "row";
  transition: all 0.2s ease-out;
  background: ${props => (props.isHoveredItem ? "#aaa" : "#fff")};
`;


export const TodoCheckInput = styled.input`
  width: 2rem;
  padding: 8;
  color: black;
  line-height: 2rem;
`;

export const TodoLabel = styled.label`
  background: "green";
  height: 1.5rem;
  width: 100%;
`;

export const DeleteBtn = styled.div`
  background: "red";
  width: 20%;
  height: 40px;

`;
