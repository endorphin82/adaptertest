const express = require("express")
const cors = require("cors")
const {logData} = require("./middleware")

const app = express()
const PORT = process.env.PORT || 3005
const HOST = process.env.HOST || "http://localhost"

app.use([cors(), logData])

app.listen(PORT, (err) => {
    err
        ? console.log(err)
        : console.log(
        `The server is running at ${HOST}:${PORT}/graphql`
        )
})