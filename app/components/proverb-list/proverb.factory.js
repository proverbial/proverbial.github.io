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
        .factory('ProverbFactory', factory);

    factory.$inject = ['$http'];

    /* @ngInject */
    function factory($http) {
        var alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('');

        var service = {
            getAlphabet: getAlphabet,
            getProverbs: getProverbs
        };

        return service;

        function getAlphabet() {
            return alphabet;
        }

        function getProverbs(language) {
            return $http.get('/assets/src/' + language + '.json', {cache: 'true'})
        }
    }
})();
