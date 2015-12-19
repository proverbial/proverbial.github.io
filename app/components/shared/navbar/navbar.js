(function() {
    'use strict';

    angular
        .module('proverbial')
        .directive('proverbialNavbar', directive);

    function directive() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'components/shared/navbar/navbar.html',
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

    Controller.$inject = ['ProverbFactory'];

    function Controller(ProverbFactory) {
        var vm = this;

        // vm.getLongName = function() {
        //     return ProverbFactory.convertToLongName(ProverbFactory.getLang());
        // }

        activate();

        function activate() {
            vm.alphabet = ProverbFactory.getAlphabet();
        }
    }
})();
