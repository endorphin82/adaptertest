const graphql = require("graphql")
const { GraphQLString, GraphQLID, GraphQLSchema, GraphQLObjectType, GraphQLNonNull, GraphQLList } = graphql
const Users = require("../models/user")
const { adapter } = require("../adapters")

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString }
  })
})

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    // У тебя уже работающий код на GraphQL. Так что просто измени код на сервере.
    // В самом GraphQL обработчике вызывай методы, привязанные именно к БД, которую ты выбрал изначально. И всё.
    // тогда это так или одной строкой из адаптера
    adapter.findByName(name) // Так универсальнее + мидлвары тоже описывать в адаптере?
    // Насчёт этого не подскажу. пробовал уже, работает. Тогда сделай так. Если будешь добавлять новую БД и столкнёшься с 
    // трудностями - ты уже будешь знать второй вариант. Спасибо Коль. вроде в голове прояснилось. Ок.
    // Тогда на связи.
    
    // findByName: {
    //   type: new GraphQLList(UserType),
    //   args: { firstName: { type: GraphQLString } },
    //   resolve(parent, { firstName }) {
    //     console.info("findByName:", name)
    //     return Users.find({ firstName: { $regex: firstName, $options: "i" } })
    //   }
    // }
  }
})
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString }
      },
      resolve(parent, { firstName, lastName }) {
        console.info("createUser:", firstName, firstName)
        const user = new Users({
          firstName,
          lastName
        })
        return user.save()
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
})
