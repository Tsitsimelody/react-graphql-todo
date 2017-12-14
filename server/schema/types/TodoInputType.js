const graphql = require("graphql");
const { GraphQLInputObjectType, GraphQLString, GraphQLBoolean } = graphql;

const TodoInputType = new GraphQLInputObjectType({
  name: "TodoInputType",
  fields: () => ({
    text: { type: GraphQLString },
    completed: { type: GraphQLBoolean }
  })
});

module.exports = TodoInputType;
