(function() {
    'use strict';

    angular
        .module('proverbial')
        .controller('ProverbListCtrl', Controller);

    Controller.$inject = ['ProverbFactory', '$stateParams'];

    function Controller(ProverbFactory, $stateParams) {
        var vm = this;

        vm.currentLang = $stateParams.currentLang;
        vm.alphabet = ProverbFactory.getAlphabet();

        console.log($stateParams);

        // JSON get
        ProverbFactory.getProverbs('en').success(function(result) {
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
            console.log('ProverbListCtrl controller activated.');
        }
    }
})();
