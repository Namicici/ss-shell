"use strict";

var app = require("./app.js");

app.factory("authInterceptor", [function(){
    var authInterceptor = {};
    return authInterceptor;
}]);

app.config(["$routeProvider","$httpProvider", function($routeProvider, $httpProvider){
        $httpProvider.interceptors.push("authInterceptor");

        function loader(dependencies){
            var load = {
                loader: function($q){
                    var deffer = $q.defer();
                    dependencies(deffer);
                    return deffer.promise;
                }
            };
            return load;
        }

        $routeProvider
        .when("/",{
            name: "home",
            template: require("./views/home/home.html"),
            controller:"app.views.home",
            resolve: loader(function(deffer){
                require.ensure([], function(require){
                    require("./views/home/home.js");
                    deffer.resolve();
                })
            })
        })
        .when("/main",{
            name:"main",
            template: require("./views/main/main.html"),
            controller:"app.views.main",
            resolve:loader(function(deffer){
                require.ensure([], function(require){
                    require("./views/main/main.js");
                    deffer.resolve();
                })
            })
        })

    }])
