(function() {
    'use strict';

    angular
        .module('proverbial')
        .directive('proverbialNavbar', directive);

    function directive() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'components/navbar/navbar.html',
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

    Controller.$inject = ['ProverbialFactory'];

    function Controller(ProverbialFactory) {
        var vm = this;

        vm.getLongName = function() {
          return ProverbialFactory.convertToLongName(ProverbialFactory.getLang());
        }

        activate();

        function activate() {
            vm.alphabet = ProverbialFactory.getAlphabet();
        }
    }
})();
