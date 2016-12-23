var app = angular.module('MySky', ['ngRoute', 'ngAnimate']);
    app.config(function($routeProvider, $locationProvider) {
            $routeProvider
            .when("/", {
                templateUrl : "js/views/home.html"
            })
            .when("/portfolio", {
                templateUrl : "js/views/portfolio.html"
            })
            .when("/contact", {
                templateUrl : "js/views/contact.html"
            })
            .otherwise({
                redirectTo: '/'
            });

    }
);