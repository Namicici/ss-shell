http = require "http"
url = require "url"
bodyParser = require "body-parser"
express = require "express"
port = 8000

app = express()

app.use bodyParser()
app.all "/", (req, res)->
    res.send "Hello word"#req.body.title + req.body.text

app.listen port

console.log "express server start at localhost:8000"
