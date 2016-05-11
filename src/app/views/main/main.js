"use strict";

var app = require("../../app.js");

mainController.$inject = ["$scope"];

function mainController($scope){
    $scope.data = "main page";

}

require.ensure([], function(require){

    app.registerController('app.views.main', mainController);
})
