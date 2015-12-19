(function() {
    'use strict';

    angular
        .module('proverbial', [
            'ui.router'
        ])
        .constant('LANG', {
            'DEFAULT': 'EN',
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
        .config(function($stateProvider, $urlRouterProvider, LANG) {

            $urlRouterProvider
                .otherwise('/en');

            $stateProvider
                .state('proverb-list', {
                    url: '/:lang',
                    templateUrl: 'components/proverb-list/proverb-list.html',
                    controller: 'ProverbListCtrl as vm'
                })
                .state('proverb-single', {
                    url: '/:lang/:proverbId',
                    templateUrl: 'components/proverb-single/proverb-single.html',
                    controller: 'ProverbCtrl as vm'
                });
        });
})();
