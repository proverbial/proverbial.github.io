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
                lang: '@'
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

    Controller.$inject = ['LANG', 'DEFAULT', 'ProverbFactory'];

    function Controller(LANG, DEFAULT, ProverbFactory) {
        var vm = this;

        vm.languages = LANG;
        vm.currentLang = LANG[vm.lang.toUpperCase()];

        activate();

        function activate() {
            console.log(vm.currentLang);
            vm.alphabet = ProverbFactory.getAlphabet();
        }
    }
})();
