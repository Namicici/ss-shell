"use strict";

var app = require("./app.js");

app.factory("authInterceptor", [function(){
    var authInterceptor = {};
    return authInterceptor;
}]);

app.config(["$routeProvider","$httpProvider", function($routeProvider, $httpProvider){
        $httpProvider.interceptors.push("authInterceptor");
        /*
        angular.forEach(routers, function(router){
            $routeProvider.when(router.url, {
                name:router.name,
                template: require(router.templateUrl),
                controller:router.controller,
                resolve: loader(router.dependencies)
            })
        })*/

        $routeProvider
        .when("/",{
            name: "home",
            template: require("./views/home/home.html"),
            controller:"app.views.home",
            resolve: //loader(["./views/home/home.js"])
            {
                loadController: function($q){

                    var deffer = $q.defer();
                    require.ensure([], function(require){
                        require("./views/home/home.js");
                        deffer.resolve();
                    })
                    return deffer.promise;

                    //var promise = controllerLoader($q, ["./views/home/home.js"]);
                    //return promise;
                }
            }
        })
        .when("/main",{
            name:"main",
            template: require("./views/main/main.html"),
            controller:"app.views.main",
            resolve://loader(["./views/main/main.js"])
            {
                loadController: function($q){

                    var deffer = $q.defer();
                    require.ensure([], function(require){
                        require("./views/main/main.js");
                        deffer.resolve();
                    })
                    return deffer.promise;

                    //var promise = controllerLoader($q, ["./views/main/main.js"]);
                    //return promise;
                }
            }
        })

    }])
