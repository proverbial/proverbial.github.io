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

    $scope.alphabet = data.getAlphabet();
    $scope.languages = data.getLanguages();

    $scope.getLongName = function() {
      return data.convertToLongName(data.getLang());
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
