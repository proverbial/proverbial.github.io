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
    // Defining variables
    $scope.alphabet = data.getAlphabet();
    $scope.query = "";
    $scope.langID = $routeParams.langID;
    $scope.languages = data.getLanguages();
    $scope.activeLetter = "A";

    data.getProverbs($scope.langID).success(function(data) {
      $scope.proverbs = data;
    });


    $scope.filterEnabled = true;

    $scope.toggleFilter = function() {
      $scope.filterEnabled = !$scope.filterEnabled;
    }

    $scope.getProverbID = function(prov) {
      return $scope.proverbs.indexOf(prov);
    };

    data.setLang($scope.langID);

    $scope.setActiveLetter = function(letter) {
      if(!$scope.filterEnabled) {
        $scope.filterEnabled = true;
      }
      $scope.activeLetter = letter;
    };

    $scope.displayMessage = function() {
      if(!$scope.filterEnabled) {
        return "Showing all proverbs.";
      } else {
        return "Proverbs starting with " + $scope.activeLetter + "."
      }
    }

    $scope.isActive = function(letter) {
      return $scope.activeLetter == letter;
    }

  });
