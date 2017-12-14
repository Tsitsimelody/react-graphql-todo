import React from "react";
import styled from "styled-components";

import { editTodo, deleteTodo } from "../queries";
import Icon from "./styles/Icon";
import { ICONS } from "./styles/constants";

const TodoItem = ({ todo, updateTodos }) => {
  const completeTodo = () => {
    todo.completed = true;
    editTodo(todo);
    updateTodos();
  };

  const removeTodo = () => {
    deleteTodo(todo.id);
    updateTodos();
  };

  return (
    <ItemSection completed={todo.completed}>
      {todo.text}
      <div style={{ float: "right" }}>
        {!todo.completed && (
          <IconSection onClick={completeTodo}>
            <Icon icon={ICONS.TICK} />
          </IconSection>
        )}
        <IconSection onClick={removeTodo}>
          <Icon icon={ICONS.BIN2} />
        </IconSection>
      </div>
    </ItemSection>
  );
};

const ItemSection = styled.div`
  color: ${props => (props.completed ? "#bdbdbd" : "inherit")};
  text-decoration: ${props => (props.completed ? "line-through" : "none")};
`;

const IconSection = styled.span`
  padding: 7px;
  border-radius: 5px;
  margin-right: 6px;
  cursor: pointer;
  &:hover {
    background: #ececec;
  }
`;

export default TodoItem;
