const OPTIONS = {
  MONGO_URL : process.env.MONGO_URL || "mongodb://localhost:27017/testdb"
}



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

class SqlAdapter extends BaseInterface {
  constructor() {
    super()
    console.log("Sql Adapter created")
  }

  findByName(name) {
    return this.specificFindByNameForSql(name)
  }

  createUser(firsName, lastName) {
    return this.specificCreateUserForSql(firsName, lastName)
  }
}

const factory = (type) => {
  switch (type) {
    case "sql":
      return new SqlAdapter()
      break
    case "mongo":
      return new MongoAdapter()
      break
    default:
      return null
  }
}

function init_Adapter() {
  const f = factory("sql")
  f.connect(OPTIONS)
  f.findByName("name")
  f.createUser("name", "lastname")
}