'use strict';

/**
 * @ngdoc function
 * @name raidersApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the raidersApp
 */
angular.module('raidersApp')
  .controller('HeaderCtrl', function (data, $http, $scope, $routeParams) {

    $scope.alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('');
    $scope.languages = data.getLanguages();
    
    $scope.getLongName = function() {
      for (var i = 0, j = $scope.languages.length; i < j ; i++) {
        if ($scope.languages[i].short === data.getLang()) {
          return $scope.languages[i].long;
        }
      }
    }

    $scope.langID = function () {
      return data.getLang();
    }

    $scope.langLong = function() {
      return data.getLangLong(data.getLangIndex);
    }

    $scope.langShort = function () {
      return data.getLangShort(data.getLangIndex);
    }

    $scope.languagezsd = function () {
      return data.getLang();
    }



  });
