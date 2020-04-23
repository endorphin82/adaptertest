import { BaseInterface } from "../adapter-implementation/base-interface"

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

  specificCreateUserForMongo(firsName, lastName) {
    console.log("SpecificCreateUserForMongo", firsName, lastName)
  }

  findByName(name) {
    return this.specificFindByNameForMongo(name)
  }

  createUser(firsName, lastName) {
    return this.specificCreateUserForMongo(firsName, lastName)
  }
  connect(firsName, lastName) {
    return this.specificConnectForMongo(firsName, lastName)
  }
}

const adapter = exports.adapter = new MongoAdapter()
