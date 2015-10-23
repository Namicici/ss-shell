"use strict"

angular.module "farmss.views"

.controller "farmss.views.home", ["$scope", "$http", "$q", "$compile", ($scope, $http, $q, $compile)->
    getMenus = ()->
        console.log "home controller"
        httpConfig =
            url: "/servers"
        $http httpConfig
        .success (data)->
            $scope.data = data
            list = document.getElementById "ss-test-dom"
            list.innerHTML = $scope.data
        , (msg)->
            console.log msg

    getMenus()
]

