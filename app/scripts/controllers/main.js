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
    $scope.proverbs = [];
    var langID = $routeParams.langID || data.getLang();
    console.log(langID);
    var proverbs = data.getProverbs(langID);

    console.log(proverbs);
    console.log("MainCtrl loaded.");

    $scope.langID = $routeParams.langID;

    data.setLang($scope.langID);

    $scope.languages = data.getLanguages();

    $scope.query = "";

    $http.get('/source/' + $routeParams.langID + '.json').
    success(function(data) {
      console.log("Loading: " + $routeParams.langID + ".json");
      $scope.proverbs = data;
    });

  });
