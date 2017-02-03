var app = angular.module('MySky', ['ngRoute', 'ngAnimate', 'dark-sky'])
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "js/views/home.html"
        })
        .when("/holland", {
            templateUrl: "js/views/holland.html"
        })
        .when("/denver", {
            templateUrl: "js/views/denver.html"
        })
        .when("/chicago", {
            templateUrl: "js/views/chicago.html"
        })
        .otherwise({
            redirectTo: '/'
        })
});
app.directive("wView", function() {
    return {
        scope: {
            wlocation: '@'
        },
        restrict: 'E',
        templateUrl: 'js/views/WView.html',
        controller: function($q, darkSky, $scope) {
            this.scope = $scope;
            sLocation = this.scope.wlocation;
            $scope.titleLocation = sLocation;
            activate();
            // log current weather data
            $scope.currentweather = null;
            $scope.dailyweather = null;
            $scope.weatheralerts = null;
            $scope.dataflag = true;
            $scope.windText = "";
            $scope.currentTime = new Date();

            function activate() {
                if (sLocation == 'Your Current Location') {
                    getNavigatorCoords()
                        .then(function(position) {
                            getWeatherInfo(position.coords.latitude, position.coords.longitude)
                        })
                        .catch(console.warn);
                } else if (sLocation == 'Holland') {
                    // Holland
                    getWeatherInfo(42.8254, -86.0872);
                } else if (sLocation == 'Denver') {
                    // Denver
                    getWeatherInfo(39.7640022, -105.1352767);
                } else if (sLocation == 'Chicago') {
                    // Chicago
                    getWeatherInfo(41.9351809, -87.6649336);
                } else {
                    console.log("id on view does not match!")
                }
            }

            // Get current location coordinates if supported by browser
            function getNavigatorCoords() {
                var deferred = $q.defer();
                // check for browser support
                if ("geolocation" in navigator) {
                    // get position / prompt for access
                    navigator.geolocation.getCurrentPosition(function(position) {
                        deferred.resolve(position);
                    });
                } else {
                    deferred.reject('geolocation not supported');
                }
                return deferred.promise;
            }

            function getWeatherInfo(x, y) {
                darkSky.getCurrent(x, y)
                    .then(function(dataObj) {
                        $scope.dataflag = true;
                        $scope.currentweather = dataObj;
                        $scope.currentTime = ($scope.currentweather.minutely.data[0].time * 1000);
                        $scope.windText = convertWindBearing($scope.currentweather.currently.windBearing, $scope.currentweather.currently.windSpeed);
                        console.log($scope.currentweather);
                    })
                    .catch(function() {
                        $scope.currentweather = null;
                        $scope.windText = "a milli kph from everywhere";
                        $scope.dataflag = false;
                        console.warn('data not found');
                    });
                darkSky.getDailyForecast(x, y)
                    .then(function(dataObj) {
                        $scope.dailyweather = dataObj;
                        console.log($scope.dailyweather);
                    })
                    .catch(function() {
                        $scope.dailyweather = null;
                        $scope.windText = "a milli kph from everywhere";
                        $scope.dataflag = false;
                        console.warn('data not found');
                    });
            }

            function convertWindBearing(bearing, windspeed) {
                var txt = "";
                if (0 <= bearing && bearing < 22.5) {
                    txt = windspeed + " Kph from the North";
                } else if (22.5 <= bearing && bearing < 67.5) {
                    txt = windspeed + " Kph out of the Northeast";
                } else if (67.5 <= bearing && bearing < 112.5) {
                    txt = windspeed + " Kph from the East";
                } else if (112.5 <= bearing && bearing < 157.5) {
                    txt = windspeed + " Kph out of the Southeast";
                } else if (157.5 <= bearing && bearing < 202.5) {
                    txt = windspeed + " Kph from the South";
                } else if (202.5 <= bearing && bearing < 247.5) {
                    txt = windspeed + " Kph out of the Southwest";
                } else if (247.5 <= bearing && bearing < 292.5) {
                    txt = windspeed + " Kph from the West";
                } else if (292.5 <= bearing && bearing < 337.5) {
                    txt = windspeed + " Kph out of the Northwest";
                } else if (337.5 <= bearing && bearing < 360) {
                    txt = windspeed + " Kph from the North";
                }
                return txt;
            }
        }
    }
});
app.filter('round', function() {
    return function(x) {
        return Math.round(x);
    }
});
app.config(['darkSkyProvider', function(darkSkyProvider) {
    darkSkyProvider.setApiKey('c637c89a2b7017848865d64e36a18f18');
    darkSkyProvider.setUnits('uk2');
}]);