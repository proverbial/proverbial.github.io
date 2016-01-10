(function() {
    'use strict';

    angular
    .module('proverbial')
    .filter('firstLetter', filter);

    function filter() {
        return firstLetterFilter

        function firstLetterFilter(input, letter, enabled) {
            if (enabled) {
                input = input || [];
                var out = [];
                input.forEach(function (item) {
                    if (item.charAt(0).toUpperCase() === letter) {
                        out.push(item);
                    }
                });
                return out || [];
            } else {
                return input || [];
            }
        }
    }
})();
