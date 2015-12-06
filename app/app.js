'use strict';

/**
 * @ngdoc overview
 * @name proverbial
 * @description
 * # proverbial
 *
 * Main module of the application.
 */
angular
  .module('proverbial', [
    'ngRoute',
    'ngTouch',
    'ngResource'
  ])
  // .filter('firstLetter', function () {
  //     return function (input) {
  //         var input = input || [];
  //         var letter = "A";
  //         var out = [];
  //         angular.forEach(input, function (item) {
  //             console.log("current item is", item, item.charAt(0));
  //             if (item.charAt(0).toUpperCase() == letter) {
  //                 out.push(item);
  //             }
  //         });
  //         return out;
  //     };
  // })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/:langID/:proverbID', {
        templateUrl: 'components/proverb-detail/proverb.html',
        controller: 'ProverbCtrl'
      })
      .when('/:langID', {
        templateUrl: 'components/proverb-list/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/en'
      });
  });
