http = require "http"
url = require "url"
bodyParser = require "body-parser"
express = require "express"
port = 8080

app = express()

app.use bodyParser()
app.get "/", (req, res)->
    res.send "hello word"
    console.log "request:" + req + " response:" + res

server = app.listen port, ()->
    console.log "Express server listen on %s:%s", server.address().address, server.address().port
