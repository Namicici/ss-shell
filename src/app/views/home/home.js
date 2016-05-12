"use strict";

var app = require("../../app.js");
require("./home.scss");
require("../../../images/th-4.jpg");

require.ensure([], function(require){

    app.registerController('app.views.home', ["$scope", function($scope){
        $scope.data = "home page";
    }]);
})
