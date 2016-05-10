"use strict";

var app = require("./app.js");

app.factory("authInterceptor", [function(){
    var authInterceptor = {};
    return authInterceptor;
}]);

app.config(["$routeProvider","$httpProvider", function($routeProvider, $httpProvider){
        $httpProvider.interceptors.push("authInterceptor");

        $routeProvider
        .when("/",{
            name: "home",
            template: require("./views/home/home.html"),
            controller:"app.views.home",
            resolve:{
                loadController: function($q){
                    var deffer = $q.defer();
                    require.ensure([], function(require){
                        var controller = require("./views/home/home.js");
                        deffer.resolve(controller);
                    })
                    return deffer.promise;
                }
            }
        })
        .when("/main",{
            name:"main",
            template: require("./views/main/main.html"),
            controller:"app.views.main",
            resolve:{
                loadController: function($q){
                    var deffer = $q.defer();
                    require.ensure([], function(require){
                        var controller = require("./views/main/main.js");
                        deffer.resolve(controller);
                    })
                    return deffer.promise;
                }
            }
        })

    }])
