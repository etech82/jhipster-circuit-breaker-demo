(function() {
    'use strict';

    angular
        .module('gatApp')
        .controller('BarController', BarController);

    BarController.$inject = ['$scope', '$state', 'Bar'];

    function BarController ($scope, $state, Bar) {
        var vm = this;
        vm.bars = [];
        vm.loadAll = function() {
            Bar.query(function(result) {
                vm.bars = result;
            });
        };

        vm.loadAll();
        
    }
})();
