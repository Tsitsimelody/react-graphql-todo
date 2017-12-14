import React, { Component } from "react";
import styled from "styled-components";

import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

class TodoListCard extends Component {
  render() {
    const { todos, updateTodos } = this.props;
    return (
      <Card>
        <TodoForm updateTodos={updateTodos} />
        {todos.map((todo, i) => (
          <TodoItem key={i} todo={todo} updateTodos={updateTodos} />
        ))}
      </Card>
    );
  }
}

const Card = styled.div`
  background-color: white;
  width: 300px;
  padding: 20px;
  border-radius: 5px;
  margin: 0 auto;
  line-height: 40px;
  text-align: left;
`;

export default TodoListCard;
