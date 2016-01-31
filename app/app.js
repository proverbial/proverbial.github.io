(function() {
    'use strict';

    angular
        .module('proverbial', [
            'ui.router'
        ])
        .constant('DEFAULT', {
            'shortName': 'en',
            'longName': 'English'
        })
        .constant('LANG', {
            'EN': {
                'shortName': 'en',
                'longName': 'English'
            },
            'PT': {
                'shortName': 'pt',
                'longName': 'Portuguese'
            },
            'SE': {
                'shortName': 'se',
                'longName': 'Swedish'
            }
        })
        .config(function($stateProvider, $urlRouterProvider, DEFAULT) {

            $urlRouterProvider
                .otherwise('/' + DEFAULT.shortName);

            $stateProvider
                .state('home', {
                    url: '/:lang',
                    templateUrl: 'components/home/home.html',
                    controller: 'HomeCtrl as vm'
                })
                .state('home.single', {
                    url: '/:lang/:id',
                    templateUrl: 'components/home/proverb-single/proverb-single.html',
                    controller: 'ProverbSingleCtrl as vm'
                });
        })
        .run(function() {
            /* Keyboard controls
             *
             * left arrow	37
             * up arrow	    38
             * right arrow	39
             * down arrow	40
             *
             * */

            // Hash code converter for our string objects
            String.prototype.hashCode = function() {
                var hash = 0, i, chr, len;
                if (this.length == 0) return hash;
                for (i = 0, len = this.length; i < len; i++) {
                    chr   = this.charCodeAt(i);
                    hash  = ((hash << 5) - hash) + chr;
                    hash |= 0; // Convert to 32bit integer
                }
                return hash;
            };
        });
})();
