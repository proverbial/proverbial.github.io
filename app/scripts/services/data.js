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
  var languages = [
    {
      long: "English",
      short: "en"
    },
    {
      long: "Portuguese",
      short: "pt"
    },
    {
      long: "Swedish",
      short: "se"
    }
  ]

  // Functionality
  return {
    getAlphabet: function() {
      return alphabet;
    },
    getLanguages: function() {
      return languages;
    },
    getProverbs: function(path) {
      return $http.get('/source/' + path + '.json', {cache: 'true'})
    },
    convertToLongName: function (shortName) {
      for (var i = 0, j = languages.length; i < j ; i++) {
        if (languages[i].short === shortName) {
          return languages[i].long;
        }
      }
    },
    getLang: function() {
      return langID;
    },
    setLang: function(newlangID) {
      langID = newlangID;
    },
    colorize: function(str) {
      var hash = str.hashCode();

      // Hash to RGB (we simply take the low three bytes)
      var r = (hash & 0xFF0000) >> 16;
      var g = (hash & 0x00FF00) >> 8;
      var b = hash & 0x0000FF;

      // Pastel
      r = parseInt((r + 255)/4);
      g = parseInt((g + 255)/4);
      b = parseInt((b + 255)/4);

      return "rgb(" + r + "," + g + "," + b + ")";
    }
  }
});
