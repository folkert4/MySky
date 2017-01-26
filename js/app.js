var app = angular.module('MySky', ['ngRoute', 'ngAnimate', 'dark-sky']);
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

});
app.config(['darkSkyProvider', function(darkSkyProvider) {
        darkSkyProvider.setApiKey('c637c89a2b7017848865d64e36a18f18');
        darkSkyProvider.setUnits('uk2');
}]);