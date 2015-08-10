http = require "http"
url = require "url"
port = 8000

route = (handle, pathname, response)->
    if typeof handle[pathname] == 'function'
        handle[pathname] response
    else
        console.log "No request handler fount for " + pathname

start = (route，, handle)->
    onRequest = (request, response)->
        pathname = url.parse(request.url).pathname
        route handle, pathname, response
    server = http.createServer onRequest
    server.listin port
    console.log "Server has started at " + port

start()