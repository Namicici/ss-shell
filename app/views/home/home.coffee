"use strict"

angular.module "farmss.views"

.controller "farmss.views.home", ["$scope", "$http", "$q", ($scope, $http, $q)->
    getMenus = ()->
        console.log "home controller"
        httpConfig =
            url: "/menu"
        $http httpConfig
        .success (data)->
            $scope.data = data
        , (msg)->
            console.log msg

    getMenus()
]

