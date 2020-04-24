const ADAPTER = process.env.ADAPTER || "mongodb"

const { adapter } = require(`./${ADAPTER}`)

module.exports = { adapter }