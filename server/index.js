const graphqlHTTP = require("express-graphql")
const schema = require("../schema/schema")

const { adapter } = require("../adapters")

const express = require("express")
const cors = require("cors")
const { logData } = require("./middleware")

const app = express()
const PORT = process.env.PORT || 3005
const HOST = process.env.HOST || "http://localhost"
// const MONGO_URL =  process.env.MONGO_URL || "mongodb://localhost:27017/restockchicago"

const OPTIONS = {
  MONGO_URL: process.env.MONGO_URL
}

app.use([cors(), logData])
adapter.connect(OPTIONS)
app.use("/graphql", graphqlHTTP({
  schema,
  graphiql: true,
}))

console.log("env:", process.env.ADAPTER)
app.get("/", () => {
  console.log("GET /")
})

app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(
    `The server is running at ${HOST}:${PORT}/graphql`
    )
})