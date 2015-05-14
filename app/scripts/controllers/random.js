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

    $scope.langID = function () {
      return data.getLang();
    }

    $scope.languages = data.getLanguages();

  });
