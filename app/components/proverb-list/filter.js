'use strict';

/**
 * @ngdoc function
 * @name proverbial.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the proverbial
 */

 (function() {
     'use strict';

     angular
         .module('proverbial')
         .filter('firstLetter', filter);

     function filter() {
         return firstLetterFilter

         function firstLetterFilter(params) {
            return function(input, letter, enabled) {
                if (enabled) {
                    return (input || []).filter(function(item) {
                    return item.charAt(0).toUpperCase() == letter;
                });
                } else {
                    return input || [];
                }
            };
         }
     }
 })();
