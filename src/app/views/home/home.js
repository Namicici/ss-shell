"use strict";

var app = require("../../app.js");
require("./home.scss");
require("../../../images/th-4.jpg");
require("../../services/home.js");

require.ensure([], function(require){

    app.registerController('app.views.home', ["$scope", "app.services.home", function($scope, homeService){
        init();
        function init(){
            var items = {
                id:1
            };
            homeService.getMenus(items)
            .then(function(data){
                console.log("getMenus:" + data);
                $scope.data = data;
            })
        }
    }]);
})
