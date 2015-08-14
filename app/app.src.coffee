"use strict"

angular.module "farmss", [
    "ngRoute",
    "farmss.views"
]
.config ["$routeProvider", ($routeProvider)->
    $routeProvider
    .when "/",
        name: "home"
        templateUrl:"./views/home/home.html"
        controller:"farmss.views.home"
]
