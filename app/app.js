(function() {
    'use strict';

    angular
        .module('proverbial', [
            'ui.router'
        ])
        .constant("LANG", {
            "DEFAULT": "en",
            "EN": "en",
            "PT": "pt",
            "SE": "se"
        })
        .config(function($stateProvider, $urlRouterProvider, LANG) {

            $urlRouterProvider
                .otherwise('/list');

            $stateProvider
                .state('proverbial-list', {
                    url: "/:lang",
                    controller: 'ProverbialListCtrl',
                    templateUrl: "components/proverbial-list/proverbial-list.html"
                })
                .state('proverbial-detail', {
                    url: "/:lang/:proverbId",
                    templateUrl: "components/proverbial-detail/proverbial-detail.html",
                    controller: 'ProverbCtrl as vm'
                });
        });
})();
