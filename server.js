var http = require("http");
var bodyParser = require("body-parser");
var express = require("express");
var routing = require("./server/routers.js");

var port = 8080;

var app = express();
app.use(bodyParser());
app.use("/", express["static"](__dirname + "/dist/"));

app.get("/", function(req, res) {
    return res.redirect("/dist/");
  });

routing(app);


var server = http.createServer(app).listen(port);

console.log("Express server listen on 8080");
