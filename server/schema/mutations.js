const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLNonNull
} = graphql;

const Todo = require("../models/todo");
const TodoType = require("./types/TodoType");
const TodoInputType = require("./types/TodoInputType");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    addTodo: {
      type: TodoType,
      args: {
        todo: { type: TodoInputType }
      },
      resolve(parentValue, { todo }) {
        return new Todo(todo).save();
      }
    },
    editTodo: {
      type: TodoType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        data: { type: TodoInputType }
      },
      resolve(parentValue, { id, data }) {
        return Todo.findByIdAndUpdate(id, { $set: data }).then(res => {
          return res;
        });
      }
    },
    deleteTodo: {
      type: TodoType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parentValue, { id }) {
        return Todo.findByIdAndRemove(id);
      }
    }
  })
});

module.exports = mutation;
