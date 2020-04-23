class Target {
  constructor(type) {
    let result
    switch (type) {
      case "sql":
        result = new SqlAdapter()
        break
      case "mongo":
        result = new MongoAdapter()
        break
      default:
        result = null
    }
    return result
  }
  Request() {
  }
}

class AdapteeSql {
  constructor() {
    console.log("Adaptee created")
  }

  SpecificRequestForSql() {
    console.log("Adaptee request")
    // sql request ...
  }
}
class AdapteeMongo {
  constructor() {
    console.log("Adaptee created")
  }

  SpecificRequestForMongo() {
    console.log("Adaptee request")
    // mongo request ...
  }
}

class SqlAdapter extends AdapteeSql {
  constructor() {
    super()
    console.log("Sql Adapter created")
  }
  Request() {
    return this.SpecificRequestForSql()
  }
}

class MongoAdapter extends AdapteeMongo {
  constructor() {
    super()
    console.log("Mongo Adapter created")
  }
  Request() {
    return this.SpecificRequestForMongo()
  }
}

function init_Adapter() {
  var f = new Target("sql")
  f.Request()
}