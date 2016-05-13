"use strict";

var app = require("../app.js");

app.registerService("app.services.base",["$q", "$http", function($q, $http){
    return {
        httpRequest: function(config){
            var deffer = $q.defer();
            $http(config).then(function(data, status){
                if (data.data && data.data.errors && data.data.errors.length > 0){
                    var reason = {"msg": data.data.errors, "status":200};
                    deffer.reject(reason);
                }else {
                    deffer.resolve(data.data.results);
                }
            }, function(msg, status){
                var reason = {"msg":msg.detail, "status":status}
                deffer.reject(reason);
            })
            return deffer.promise;
        }
    }
}])
