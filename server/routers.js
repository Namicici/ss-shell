"use strict";

var home = require("./home.js");

function routing(app){
    app.get("/api/menus", home.menus);
}

module.exports = routing;
