'use strict';

/**
 * @ngdoc function
 * @name raidersApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the raidersApp
 */
angular.module('raidersApp')
  .filter('firstLetter', function () {
      return function (input, letter) {
          input = input || [];
          var out = [];
          input.forEach(function (item) {
              //console.log("current item is", item, item.charAt(0));
              if (item.charAt(0).toLowerCase() == letter) {
                  out.push(item);
              }
          });
          return out;
      }
  });
