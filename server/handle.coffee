requestHandlers = require "./requestHandlers"

handle = {}
handle["/"] = requestHandlers.start

exports.handle = handle
