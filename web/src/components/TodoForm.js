import React, { Component } from "react";

import Input from "./styles/Input";
import Button from "./styles/Button";
import { addTodo } from "../queries";

class TodoForm extends Component {
  state = {
    text: "",
    completed: false
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.text.length <= 0) {
      console.log("Nothing new");
    } else {
      addTodo(this.state);
      this.props.updateTodos();
    }

    this.clearForm();
  };

  clearForm = () => {
    this.setState({ text: "" });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "15 0",
          paddingBottom: "20px"
        }}
      >
        <Input
          type="text"
          placeholder="Add New"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <Button type="submit"> + </Button>
      </form>
    );
  }
}

export default TodoForm;
