const { BaseInterface } = require("./adapter-implementation/base-interface")
const mongoose = require("mongoose")
const graphql = require("graphql")
const {
  GraphQLString, GraphQLID,
  GraphQLObjectType, GraphQLNonNull, GraphQLList
} = graphql
const Users = require("../models/user")

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString }
  })
})

class MongoAdapter extends BaseInterface {
  constructor() {
    super()
    console.log("Mongo Adapter created")
  }

  findByName(firstName) {
    console.log("SpecificFindByNameForMongo", firstName)
    return {
      type: new GraphQLList(UserType),
      args: { firstName: { type: GraphQLString } },
      resolve(parent, { firstName }) {
        console.info("findByName:", firstName)
        return Users.find({ firstName: { $regex: firstName, $options: "i" } })
      }
    }
  }

  findAll() {
    return {
      type: new GraphQLList(UserType),
      resolve: () => {
        console.info("usersAll")
        return Users.find({})
      }
    }
  }

  createUser(firstName, lastName) {
    console.log("SpecificCreateUserForMongo", firstName, lastName)
    return {
      type: UserType,
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: GraphQLString }
      },
      resolve(parent, { lastName, firstName }) {
        console.info("createUser:", firstName, firstName)
        const user = new Users({
          firstName,
          lastName
        })
        return user.save()
      }
    }
  }
  connect(OPTIONS) {
    console.log("SpecificFindByNameForMongo", OPTIONS.MONGO_URL)
    mongoose.connect(OPTIONS.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    const dbConnection = mongoose.connection
    dbConnection.on("error", (err) => {
      console.log(`Connection error: ${err}`)
    })
    dbConnection.once("open", () => {
      console.log("Connected to DB")
    })
  }
}

const adapter = new MongoAdapter()

module.exports = {
  adapter
}
