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
    'ngTouch'
  ])
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
