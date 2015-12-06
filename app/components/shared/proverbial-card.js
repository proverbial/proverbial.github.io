(function() {
    'use strict';

    angular
        .module('proverbial')
        .directive('proverbialCard', directive);

    function directive() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'components/shared/proverbial-card.html',
            scope: {
                proverb: '@'
            },
            link: linkFunc,
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {
            var str = attr.proverb;
            var hash = str.hashCode();

            // Hash to RGB (we simply take the low three bytes)
            var r = (hash & 0xFF0000) >> 16;
            var g = (hash & 0x00FF00) >> 8;
            var b = hash & 0x0000FF;

            // Pastel
            r = parseInt((r + 255)/4);
            g = parseInt((g + 255)/4);
            b = parseInt((b + 255)/4);

            el.css('background-color', 'rgb(' + r + ',' + g + ',' + b + ')')

            console.log('rgb(' + r + ',' + g + ',' + b + ')');
        }

        Controller.$inject = ['$stateParams'];

        function Controller($stateParams) {
            var vm = this;

            console.log($stateParams);

            vm.langId = $stateParams;

            activate();

            function activate() {

            }
        }
    }
})();
