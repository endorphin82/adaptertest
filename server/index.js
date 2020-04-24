const graphqlHTTP = require("express-graphql")
const schema = require("../schema/schema")
const mongoose = require("mongoose")

// const { adapter } = require("../adapters")

const express = require("express")
const cors = require("cors")
const { logData } = require("./middleware")

const app = express()
const PORT = process.env.PORT || 3005
const HOST = process.env.HOST || "http://localhost"

const OPTIONS = {
  MONGO_URL: process.env.MONGO_URL
}

app.use([cors(), logData])
// adapter.connect(OPTIONS)
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