(function() {
    'use strict';

    angular
        .module('proverbial')
        .controller('ProverbialListCtrl', Controller);

    Controller.$inject = ['ProverbialFactory', '$http', '$scope', '$stateParams'];

    function Controller(ProverbialFactory, $http, $scope, $stateParams) {
        var vm = this;

        // Variables
        $scope.alphabet = data.getAlphabet();
        $scope.query = "";
        $scope.langID = $routeParams.langID;
        $scope.languages = data.getLanguages();
        $scope.filterEnabled = false;

        ProverbialFactory.setLang($scope.langID);

        // JSON get
        ProverbialFactory.getProverbs($scope.langID).success(function(data) {
            $scope.proverbs = data;
        });

        // Functionality
        $scope.getProverbID = function(prov) {
            return $scope.proverbs.indexOf(prov);
        };

        $scope.toggleFilter = function() {
            $scope.filterEnabled = !$scope.filterEnabled;
        }

        $scope.isActive = function(letter) {
            return $scope.activeLetter === letter;
        }

        $scope.setActiveLetter = function(letter) {
            if(!$scope.filterEnabled) {
                $scope.filterEnabled = true;
            }
            $scope.activeLetter = letter;
        };

        $scope.displayMessage = function() {
            var message = ProverbialFactory.convertToLongName(ProverbialFactory.getLang()) + " proverbs";
            if($scope.filterEnabled) {
                message += " starting with " + $scope.activeLetter;
            }
            if($scope.query !== "") {
                message += " that contain \"" + $scope.query + "\"";
            }
            return message;
        }

        activate();

        function activate() {
            console.log('proverb-list controller activated');
        }
    }
})();
