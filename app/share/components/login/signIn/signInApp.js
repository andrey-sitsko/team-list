require('./signInService.js');
require('./assets/stylesheets/signInStyle.css');
require('./assets/stylesheets/fonts.css');

var app = angular.module('loginApp');

app.directive('signInForm', function() {
  return {
    restrict: 'E',
    templateUrl: 'signInView.html',
    controller: ['$scope','$window', 'signInService', function($scope, $window, signInService) {
      $scope.signInPassword = '';
      $scope.signInEmail = '';
      $scope.submitSignIn = function() {
        signInService.signIn({email: $scope.signInEmail, password: $scope.signInPassword});
      };
      $scope.facebookSignIn = function() {
        signInService.facebookSignIn();
      };
      $scope.googleSignIn = function() {
        signInService.googleSignIn();
      };
    }]
  };
});
