app.controller('WeatherCtrl', [
        '$q', 'darkSky', '$scope', 
        function($q, darkSky, $scope) {
            activate();
            // log current weather data
            $scope.currentweather = [
                {
                    currentlocation: null,
                    holland: null,
                    denver: null,
                    chicago: null,
                }
            ];
            function activate() {
                getNavigatorCoords()
                    .then(function(position) {
                        darkSky.getCurrent(position.coords.latitude, position.coords.longitude)
                            .then(function(dataObj){$scope.currentweather.currentlocation=dataObj;}
                            )
                            .catch(console.warn);
                    })
                    .catch(console.warn);
                // Holland
                darkSky.getCurrent(42.8254,-86.0872)
                    .then(function(dataObj){$scope.currentweather.holland=dataObj;}
                            )
                    .catch(console.warn);
                // Denver
                darkSky.getCurrent(39.7640022,-105.1352767)
                    .then(function(dataObj){$scope.currentweather.denver=dataObj;}
                            )
                    .catch(console.warn);
                // Chicago
                darkSky.getCurrent(41.9351809,-87.6649336)
                    .then(function(dataObj){$scope.currentweather.chicago=dataObj;}
                            )
                    .catch(console.warn);
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
    
}]);