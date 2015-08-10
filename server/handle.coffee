var requestHandlers = require "./requestHandlers"

var handle = {}
handle["/"] = requestHandlers.start

exports.handle = handle