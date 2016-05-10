"use strict";

var app = require("../../app.js");

homeController.$inject = ["$scope"];

function homeController($scope){
    $scope.data = "home page";

}

require.ensure([], function(require){

    app.registerController('app.views.home', homeController);
    //module.exports = app.controller("app.views.home", homeController);
})
