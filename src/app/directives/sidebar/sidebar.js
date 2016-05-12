"use strict";

//require.ensure([], function(require){
    var app = require("../../app.js");
    require("./sidebar.scss");

    app.registerDirective("sidebar", [function(){
        return {
            restrict:"EA",
            transclude:true,
            replace:true,
            template: require("./sidebar.html"),
            scope:{
                visible:"="
            },
            link: function($scope){
                $scope.data = "sidebar";
            }
        }
    }]);
//})
