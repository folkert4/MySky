var app = angular.module('MySky', ['ngRoute', 'ngAnimate']);
    app.config(function($routeProvider, $locationProvider) {
            $routeProvider
            .when("/", {
                templateUrl : "js/views/home.html"
            })
            .when("/holland", {
                templateUrl : "js/views/holland.html"
            })
            .when("/denver", {
                templateUrl : "js/views/denver.html"
            })
            .when("/chicago", {
                templateUrl : "js/views/chicago.html"
            })
            .otherwise({
                redirectTo: '/'
            });

    }
);