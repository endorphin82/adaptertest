const ADAPTER = process.env.ADAPTER

module.exports = (ADAPTER) => require(`./${ADAPTER}`)