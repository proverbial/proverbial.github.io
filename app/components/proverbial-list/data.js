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
        .factory('ProverbialFactory', factory);

    factory.$inject = ['$http'];

    function factory($http) {

        var alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('');

        var service = {
            getAlphabet: getAlphabet,
            getProverbs: getProverbs,
            convertToLongName: convertToLongName
        };

        return service;

        function getAlphabet() {
            return alphabet;
        }

        function getProverbs(path) {
            return $http.get('/assets/src/' + path + '.json', {cache: 'true'})
        }

        function convertToLongName(shortName) {
            for (var i = 0, j = languages.length; i < j ; i++) {
                if (languages[i].short === shortName) {
                    return languages[i].long;
                }
            }
        }
    }
})();
