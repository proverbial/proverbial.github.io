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
    console.log("Filter called.");
    return function(input, letter, enabled) {
      if (enabled) {
        return (input || []).filter(function(item) {
          return item.charAt(0).toUpperCase() == letter;
        });
      } else {
        return input || [];
      }
    };
  });

/* Filter that did not work:

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

*/
