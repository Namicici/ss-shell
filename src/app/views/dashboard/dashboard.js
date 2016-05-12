"use strict";


require.ensure([], function(require){
    var app = require("../../app.js");

    app.registerController('app.views.dashboard', ["$scope", function($scope){
        $scope.data = "dashboard page";
    }]);
})
