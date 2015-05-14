'use strict';

/**
 * @ngdoc function
 * @name raidersApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the raidersApp
 */
angular.module('raidersApp')
  .controller('ProverbCtrl', function ($http, data, $scope, $routeParams) {
    $scope.alphabet = data.getAlphabet();
    $scope.langID = $routeParams.langID;
    $scope.languages = [
      'en',
      'pt',
      'se'
    ]

    $http.get('/source/' + $routeParams.langID + '.json').
    success(function(data) {
      $scope.proverb = data[$routeParams.proverbID];
      console.log($scope.proverb);
    });

  });
