import styled from "styled-components";
import { Checkbox, Input } from "antd";

export const CheckBoxGroup = styled(Checkbox.Group)`
  width: 100%;
  height: 100%;
  /* The group has inline-block prop and it fought me in this setting */
  display: flex !important;
  flex-direction: column;
  background-color: #fff;
  overflow-y: scroll;
`;

export const TodoInput = styled(Input)`
  width: 100%;
  padding: 8;
`;

export const DeleteBtn = styled.div`
    background: "red";
    width: 20%;
    height: 40px;
`
