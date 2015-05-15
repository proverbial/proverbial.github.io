'use strict';

/**
 * @ngdoc overview
 * @name raidersApp
 * @description
 * # raidersApp
 *
 * Main module of the application.
 */
angular
  .module('raidersApp', [
    'ngRoute',
    'ngTouch',
    'ngResource'
  ])
  .filter('firstLetter', function () {
    return function (input) {
      console.log(input);
      input = input || [];
      var out = [];
      input.forEach(function (item) {
        console.log("current item is", item, item.charAt(0));
        if (item.charAt(0).toUpperCase() == letter) {
            out.push(item);
        }
      });
      return out;
    };
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('random', {
        templateUrl: 'views/proverb.html',
        controller: 'RandomCtrl'
      })
      .when('/:langID/:proverbID', {
        templateUrl: 'views/proverb.html',
        controller: 'ProverbCtrl'
      })
      .when('/:langID', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/en'
      });
  });
