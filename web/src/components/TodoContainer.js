import React, { Component } from "react";

import { fetchTodos } from "../queries";
import TodoListCard from "./TodoListCard";
import Title from "./styles/Title";

class TodoContainer extends Component {
  state = {
    todos: []
  };

  componentWillMount = () => {
    this.getTodos();
  };

  getTodos = () => {
    fetchTodos()
      .then(res => res.json())
      .then(res => this.setState({ todos: res.data.todos }));
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Title> Todo List </Title>
        <TodoListCard todos={todos} updateTodos={this.getTodos} />
      </div>
    );
  }
}

export default TodoContainer;
