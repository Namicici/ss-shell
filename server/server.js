(function() {
  var app, bodyParser, express, http, port, server, url;

  http = require("http");

  url = require("url");

  bodyParser = require("body-parser");

  express = require("express");

  port = 8080;

  app = express();

  app.use(bodyParser());

  app.use("/", express["static"](__dirname));

  app.get("/", function(req, res) {
    return res.redirect("/");
  });

  server = http.createServer(app).listen(port);

  console.log("Express server listen on 8080");

}).call(this);
