"use strict";

var app = require("./app.js");

app.factory("authInterceptor", [function(){
    var authInterceptor = {};
    return authInterceptor;
}]);

app.config(["$routeProvider","$httpProvider", function($routeProvider, $httpProvider){
        $httpProvider.interceptors.push("authInterceptor");

        function controllerLoader($q, dependencies){
            var deffer = $q.defer();
            var controllers = [];
            require.ensure([], function(require){
                for (var i = 0; i < dependencies.length; i ++){
                    var dep = dependencies[i];
                    controllers.push(require(dep));
                }
                deffer.resolve(controllers);
            })
            return deffer.promise;
        }

        $routeProvider
        .when("/",{
            name: "home",
            template: require("./views/home/home.html"),
            controller:"app.views.home",
            resolve:{
                loadController: function($q){
                    return controllerLoader($q, ["./views/home/home.js"]);
                }
            }
        })
        .when("/main",{
            name:"main",
            template: require("./views/main/main.html"),
            controller:"app.views.main",
            resolve:{
                loadController: function($q){
                    return controllerLoader($q, ["./views/main/main.js"]);
                }
            }
        })

    }])
