import "isomorphic-fetch";
import config from "./config";

export const fetchTodos = () => {
  const query = `
  {
    todos {
      id
      text
      completed
    }
  }
  `;

  return fetch(config.GRAPHQL_URL, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  });
};

export const addTodo = todo => {
  const query = `
  mutation addTodo($todo: TodoInputType){
    addTodo (todo: $todo){
      id
    }
  }
  `;

  return fetch(config.GRAPHQL_URL, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query, variables: { todo } })
  });
};

export const editTodo = data => {
  const { id, ...rest } = data;

  const query = `
    mutation editTodo($id: ID!, $data: TodoInputType){
      editTodo (id: $id, data: $data){
        id
      }
    }
    `;

  return fetch(config.GRAPHQL_URL, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query,
      variables: {
        id: id,
        data: rest
      }
    })
  });
};

export const deleteTodo = id => {
  const query = `
    mutation deleteTodo($id: ID!){
      deleteTodo (id: $id){
        id
      }
    }
    `;

  return fetch(config.GRAPHQL_URL, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query,
      variables: {
        id
      }
    })
  });
};
