import { MongoBase } from "./mongodb"

class SqlAdapter extends MongoBase {
  constructor() {
    super()
    console.log("Sql Adapter created")
  }
  _findByName(name){

  }
  _createUser(firsName, lastName){

  }
  findByName(name) {
    return this._findByName(name)
  }

  createUser(firsName, lastName) {
    return this._createUser(firsName, lastName)
  }
}
const adapter = exports.adapter = new SqlAdapter()
