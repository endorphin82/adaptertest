const logData = (req, res, next) => {
    const originalSend = res.send
    res.send = function (data) {
        console.info(data)
        originalSend.call(res, data)
    }
    next()
}
module.exports = {logData}