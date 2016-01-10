(function() {
    'use strict';

    angular
        .module('proverbial')
        .controller('HomeCtrl', Controller);

    Controller.$inject = ['DEFAULT', '$stateParams', 'ProverbFactory'];

    /* @ngInject */
    function Controller(DEFAULT, $stateParams, ProverbFactory) {
        var vm = this;

        vm.currentLang = $stateParams.lang;
        vm.alphabet = ProverbFactory.getAlphabet();

        // JSON get
        ProverbFactory.getProverbs($stateParams.lang).success(function(result) {
            vm.proverbs = result;
        });

        vm.toggleFilter = function() {
            vm.filterEnabled = !vm.filterEnabled;
        }

        vm.isActive = function(letter) {
            return vm.activeLetter === letter;
        }

        vm.setActiveLetter = function(letter) {
            if(!vm.filterEnabled) {
                vm.filterEnabled = true;
            }
            vm.activeLetter = letter;
        };

        vm.displayMessage = function() {
            var message = ProverbFactory.convertToLongName(ProverbFactory.getLang()) + " proverbs";
            if(vm.filterEnabled) {
                message += " starting with " + vm.activeLetter;
            }
            if(vm.query !== "") {
                message += " that contain \"" + vm.query + "\"";
            }
            return message;
        }

        activate();

        function activate() {
            console.log('HomeCtrl controller activated.');
        }
    }
})();
