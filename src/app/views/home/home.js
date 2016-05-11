"use strict";

var app = require("../../app.js");
require("../../../sass/home.scss");
require("../../../images/th-4.jpg");

homeController.$inject = ["$scope"];

function homeController($scope){
    $scope.data = "home page";
}

require.ensure([], function(require){
    app.registerController('app.views.home', homeController);
})
