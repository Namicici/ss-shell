http = require "http"
url = require "url"

start = (route)->
    (request, response)->
        pathname = url.parse(request.url).pathname

server = http.createServer()
server.listin 8000