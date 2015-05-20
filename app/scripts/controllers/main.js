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

    data.setLang($scope.langID);

    $scope.setActiveLetter = function(letter) {
      $scope.activeLetter = letter;
    }

    $scope.isActive = function(letter) {
      return $scope.activeLetter == letter;
    }

  });
