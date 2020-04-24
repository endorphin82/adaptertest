const { BaseInterface } = require("./adapter-implementation/base-interface")
const mongoose = require("mongoose")
// const graphqlHTTP = require("express-graphql")
// const schema = require("../schema/schema")
const graphql = require("graphql")
const {
  GraphQLString,
  GraphQLID,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
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
const OPTIONS = {
  MONGO_URL: process.env.MONGO_URL || "mongodb://localhost:27017/testdb",
}

console.log("module mongodb")

class MongoAdapter extends BaseInterface {
  constructor() {
    super()
    console.log("Mongo Adapter created")
  }

  specificFindByNameForMongo(firsName) {
    console.log("SpecificFindByNameForMongo", firsName)
    // return {
    //   findByName: {
    //     type: new GraphQLList(UserType),
    //     args: { firstName: { type: GraphQLString } },
    //     resolve(parent, { firstName }) {
    //       console.info("findByName:", name)
    //       return Users.find({ firstName: { $regex: firstName, $options: "i" } })
    //     },
    //   },
    // }
  }

  specificConnectForMongo(OPTIONS) {
    console.log("SpecificFindByNameForMongo", OPTIONS.MONGO_URL)
    mongoose.connect(OPTIONS.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,

    })
    const dbConnection = mongoose.connection
    dbConnection.on("error", (err) => {
      console.log(`Connection error: ${err}`)
    })

    dbConnection.once("open", () => {
      console.log("Connected to DB")
    })

  }
  specificMiddlewareForMongo() {}
  specificCreateUserForMongo(firsName, lastName) {
    console.log("SpecificCreateUserForMongo", firsName, lastName)
  }

  findByName(name) {
    return this.specificFindByNameForMongo(name)
  }

  createUser(firsName, lastName) {
    return this.specificCreateUserForMongo(firsName, lastName)
  }
  connect(OPTIONS) {
    return this.specificConnectForMongo(OPTIONS)
  }
  // middleware(){
  //   return this.specificMiddlewareForMongo()
  // }
}

const adapter = new MongoAdapter()

module.exports = {
  adapter,
}
