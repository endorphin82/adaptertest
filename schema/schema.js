const graphql = require("graphql")
const { GraphQLSchema, GraphQLObjectType } = graphql
const { adapter } = require("../adapters")

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    findByName: adapter.findByName(),
    usersAll: adapter.findAll()
  }
})
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: adapter.createUser()
  }
})

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
})
