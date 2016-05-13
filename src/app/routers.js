"use strict";

var app = require("./app.js");

var routers = {
    "/":{
        name:"home",
        controller:"app.views.home",
        templateUrl:"./views/home/home.html",
        dependencies:["./views/home/home.js"]
    },
    "/main": {
        name:"main",
        controller:"app.views.main",
        templateUrl:"./views/main/main.html",
        dependencies:["./views/main/main.js"]
    }
};

function loader(dependencies){
    var load = {
        loader: function($q){
            var deffer = $q.defer();
            require.ensure([], function(require){
                for (var i = 0; i < dependencies.length; i++){
                    require(dependencies[i]);
                }
                deffer.resolve();
            })
            return deffer.promise;
        }
    };
    return load;
}

module.exports.routers = routers;
module.exports.loader = loader;
