"use strict";

require("angular");

var app = angular.module("app", ["ngRoute"]);

app.config(configure);

configure.$inject = ['$routeProvider', '$locationProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide'];

function configure($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
    app.registerController = $controllerProvider.register;
    app.registerDirective = $compileProvider.directive;
    app.registerFilter = $filterProvider.register;
    app.registerFactory = $provide.factory;
    app.registerService = $provide.service;
}
module.exports = app;
