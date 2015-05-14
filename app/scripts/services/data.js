'use strict';

/**
 * @ngdoc function
 * @name raidersApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the raidersApp
 */
angular.module('raidersApp')
  .factory('data', function ($http) {
    // The first selected language by default
    var alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('');
    
    var langID = "pt";

    // List of available languages
    var languages = [
      'en',
      'pt',
      'se'
    ];

    // Functionality
    return {
      alphabetize: function(arr) {
        var derpabet;

        for (var i, k = 0; j = arr.length; i < j, i++) {
          if (arr[i].charAt(0) === arr[i+1].charAt(0)) {
            derpabet[k] += arr[i];
            k++;
          }
        }
        return derpabet;
      },
      getAlphabet: function() {
        return alphabet;
      },
      getLanguages: function() {
        console.log("Calling getLanguages");
        return languages;
      },
      getProverbs: function(lang) {
        console.log("Calling getProverbs");
        $http.get('/source/' + lang + '.json', {cache: 'true'}).
        success(function(data) {
          return data;
        });
      },
      getLang: function() {
        console.log("Calling getLang");
        return langID;
      },
      setLang: function(newlangID) {
        console.log("Calling setLang");
        langID = newlangID;
      }
    }
  });
