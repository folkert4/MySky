app.directive("wview", function() {
    return {
      scope: {
        wlocation: '='
      },
      restrict: "E",
      templateUrl : "js/directives/WView.html"
    };
});