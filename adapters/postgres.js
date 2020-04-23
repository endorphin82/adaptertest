import { BaseInterface } from "../adapter-implementation/base-interface"

class SqlAdapter extends BaseInterface {
  constructor() {
    super()
    console.log("Sql Adapter created")
  }
  specificFindByNameForSql(name){

  }
  specificCreateUserForSql(firsName, lastName){

  }
  findByName(name) {
    return this.specificFindByNameForSql(name)
  }

  createUser(firsName, lastName) {
    return this.specificCreateUserForSql(firsName, lastName)
  }
}
const adapter = exports.adapter = new SqlAdapter()
