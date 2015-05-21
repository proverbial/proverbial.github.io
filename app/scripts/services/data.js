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
    getProverbs: function(lang) {
      return $http.get('/source/' + lang + '.json', {cache: 'true'})
    },
    getLang: function() {
      return langID;
    },
    setLang: function(newlangID) {
      langID = newlangID;
    }
  }
});
