"use strict";

var app = require("./app.js");
//var routers = require("./routers.js").routers;
//var loader = require("./routers.js").loader;

app.factory("authInterceptor", [function(){
    var authInterceptor = {};
    return authInterceptor;
}]);

app.config(["$routeProvider","$httpProvider", function($routeProvider, $httpProvider){
        $httpProvider.interceptors.push("authInterceptor");
/*
        angular.forEach(routers, function(router, path){
            $routeProvider.when(path, {
                name:router.name,
                template: require(router.templateUrl),
                controller:router.controller,
                resolve: //loader(router.dependencies)
                {
                    loadController: function($q){
                        var deffer = $q.defer();
                        require.ensure([], function(require){
                            for (var i = 0; i < router.dependencies.length; i++){
                                require(router.dependencies);
                            }
                            deffer.resolve();
                        })
                        return deffer.promise;
                    }
                }
            })
        })
        */
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

                }
            }
        })

    }])
