class BaseInterface {
  findByName(firsName) {
    // валидация
    return new Error("Please implement findByName method!")
  }
  findAll() {
    // валидация
    return new Error("Please implement findAll method!")
  }
  createUser(firsName, lastName) {
    // валидация
    return new Error("Please implement createUser method!")
  }
  connect(OPTIONS) {
    return new Error("Please implement connect method!")
  }
}

module.exports = {
  BaseInterface,
}
