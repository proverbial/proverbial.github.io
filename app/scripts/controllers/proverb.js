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
    $scope.langID = $routeParams.langID;


    $http.get('/source/' + $routeParams.langID + '.json').
    success(function(result) {
      $scope.proverb = result[$routeParams.proverbID];
      $('.card').css("background-color", data.colorize($scope.proverb));
    });

  });
