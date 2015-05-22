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
  var langIndex = 0;

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
    getProverbs: function(path) {
      return $http.get('/source/' + path + '.json', {cache: 'true'})
    },
    getLang: function() {
      return langID;
    },
    setLang: function(newlangID) {
      langID = newlangID;
    },
    setLangIndex: function(newLangIndex) {
      langIndex = newLangIndex;
    },
    getLangIndex: function() {
      return langIndex;
    }
  }
});
