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
    $scope.filterEnabled = false;
    data.setLang($scope.langID);

    // JSON get
    data.getProverbs($scope.langID).success(function(data) {
      $scope.proverbs = data;
    });

    // Functionality
    $scope.getProverbID = function(prov) {
      return $scope.proverbs.indexOf(prov);
    };

    $scope.getBackgroundColor = function(str) {
      return data.colorize(str);
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
      var message = data.convertToLongName(data.getLang()) + " proverbs";
      if($scope.filterEnabled) {
        message += " starting with " + $scope.activeLetter;
      }
      if($scope.query !== "") {
        message += " that contain \"" + $scope.query + "\"";
      }
      return message;
    }
  });
