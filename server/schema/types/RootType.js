const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const Todo = require("../../models/todo");
const TodoType = require("./TodoType");

const RootType = new GraphQLObjectType({
  name: "RootType",
  fields: () => ({
    todos: {
      type: new GraphQLList(TodoType),
      resolve() {
        return Todo.find({});
      }
    },
    todo: {
      type: TodoType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Todo.findById(id);
      }
    }
  })
});

module.exports = RootType;
