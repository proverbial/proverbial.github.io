(function() {
    'use strict';

    angular
        .module('proverbial')
        .directive('proverbialNavbar', directive);

    function directive() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'components/navbar/header.html',
            scope: {
            },
            link: linkFunc,
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }

    Controller.$inject = ['data'];

    function Controller(data) {
        var vm = this;

        vm.alphabet = data.getAlphabet();
        vm.languages = data.getLanguages();

        vm.getLongName = function() {
          return data.convertToLongName(data.getLang());
        }

        vm.langID = function () {
          return data.getLang();
        }

        vm.langLong = function() {
          return data.getLangLong(data.getLangIndex);
        }

        vm.langShort = function () {
          return data.getLangShort(data.getLangIndex);
        }

        vm.languagezsd = function () {
          return data.getLang();
        }

        activate();

        function activate() {

        }
    }
})();
