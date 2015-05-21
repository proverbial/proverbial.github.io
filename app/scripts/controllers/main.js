'use strict';

/**
 * @ngdoc function
 * @name raidersApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the raidersApp
 */
angular.module('raidersApp')
  .controller('MainCtrl', function (data, $http, $scope, $routeParams) {

    // Variables
    $scope.alphabet = data.getAlphabet();
    $scope.query = "";
    $scope.langID = $routeParams.langID;
    $scope.languages = data.getLanguages();
    $scope.activeLetter = "A";
    $scope.filterEnabled = true;
    data.setLang($scope.langID);

    // JSON get
    data.getProverbs($scope.langID).success(function(data) {
      $scope.proverbs = data;
    });

    // Functionality
    $scope.getProverbID = function(prov) {
      return $scope.proverbs.indexOf(prov);
    };

    $scope.toggleFilter = function() {
      $scope.filterEnabled = !$scope.filterEnabled;
    }

    $scope.isActive = function(letter) {
      return $scope.activeLetter === letter;
    }

    $scope.setActiveLetter = function(letter) {
      if(!$scope.filterEnabled) {
        $scope.filterEnabled = true;
      }
      $scope.activeLetter = letter;
    };

    $scope.displayMessage = function() {
      if(!$scope.filterEnabled) {
        return " proverbs.";
      } else {
        return "Proverbs starting with " + $scope.activeLetter + "."
      }
    }
  });
