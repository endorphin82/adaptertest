const { BaseInterface } = require( "./adapter-implementation/base-interface")
const mongoose = require("mongoose")
// const graphqlHTTP = require("express-graphql")
// const schema = require("../schema/schema")

const OPTIONS = {
  MONGO_URL : process.env.MONGO_URL || "mongodb://localhost:27017/testdb"
}

console.log("module mongodb")

class MongoAdapter extends BaseInterface {
  constructor() {
    super()
    console.log("Mongo Adapter created")
  }

  specificFindByNameForMongo(name) {
    console.log("SpecificFindByNameForMongo", name)
  }

  specificConnectForMongo(OPTIONS) {
    console.log("SpecificFindByNameForMongo", OPTIONS.MONGO_URL)
    mongoose.connect(OPTIONS.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
  }
  specificMiddlewareForMongo(){
 return graphqlHTTP({
      schema,
      graphiql: true,
    })

  }
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
  adapter
}