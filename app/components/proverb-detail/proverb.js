'use strict';

/**
 * @ngdoc function
 * @name proverbial.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the proverbial
 */
angular.module('proverbial')
  .controller('ProverbCtrl', function ($http, data, $scope, $routeParams) {
    var langID = $routeParams.langID;
    var provID = $routeParams.proverbID;

    data.getProverbs(langID).success(function(result) {
      $scope.proverb = result[provID];
      $('.card').css("background-color", data.colorize($scope.proverb));
      console.log(btoa($scope.proverb) + " " + atob(btoa($scope.proverb)));
    });

  });
