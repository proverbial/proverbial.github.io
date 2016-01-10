(function() {
    'use strict';

    angular
        .module('proverbial')
        .controller('HomeCtrl', Controller);

    Controller.$inject = ['DEFAULT', '$stateParams', 'ProverbFactory'];

    /* @ngInject */
    function Controller(DEFAULT, $stateParams, ProverbFactory) {
        var vm = this;

        // variables
        vm.currentLang = $stateParams.lang;
        vm.alphabet = ProverbFactory.getAlphabet();

        // functions
        vm.disableFilter = disableFilter;
        vm.isActive = isActive;
        vm.setActiveLetter = setActiveLetter;
        vm.displayMessage = displayMessage;


        activate();

        function activate() {
            console.log('HomeCtrl controller activated.');
            getProverbs();
        }

        function getProverbs() {
            // JSON get
            ProverbFactory.getProverbs($stateParams.lang).success(function(result) {
                vm.proverbs = result;
            });
        }

        function disableFilter() {
            vm.filterEnabled = false;
        }

        function isActive(letter) {
            return vm.activeLetter === letter;
        }

        function setActiveLetter(letter) {
            if(!vm.filterEnabled) {
                vm.filterEnabled = true;
            }
            vm.activeLetter = letter;
        };

        function displayMessage() {
            var message = ProverbFactory.convertToLongName(ProverbFactory.getLang()) + " proverbs";
            if(vm.filterEnabled) {
                message += " starting with " + vm.activeLetter;
            }
            if(vm.query !== "") {
                message += " that contain \"" + vm.query + "\"";
            }
            return message;
        }
    }
})();
