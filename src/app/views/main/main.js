"use strict";

var app = require("../../app.js");
require("../../directives/sidebar/sidebar.js");

require.ensure([], function(require){

    app.registerController('app.views.main', ["$scope", function($scope){
        $scope.data = "main page";
    }]);
})
