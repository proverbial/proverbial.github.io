(function() {
    'use strict';

    angular
        .module('proverbial')
        .directive('proverbialFooter', directive);

    function directive() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'components/shared/footer/footer.html',
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

    Controller.$inject = [];

    function Controller() {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
