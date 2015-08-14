http = require "http"
url = require "url"
bodyParser = require "body-parser"
express = require "express"
port = 8080

app = express()

app.use bodyParser()

# why config like this. what's usage of the 'use'
app.use "/app", express.static __dirname + "/app"
app.get "/", (req, res)->
    res.redirect "/app"
app.get "/menu", (req, res)->
    res.send "home page"

server = app.listen port, ()->
    console.log "Express server listen on %s:%s", server.address().address, server.address().port
