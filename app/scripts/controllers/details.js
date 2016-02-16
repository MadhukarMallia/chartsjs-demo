'use strict';

/**
 * @ngdoc function
 * @name chartsApp.controller:DetailsCtrl
 * @description
 * # MainCtrl
 * Controller of the chartsApp
 */
angular.module('chartsApp')
  .controller('DetailsCtrl', function ($state, $stateParams, DETAILS) {
    (function (vm) {
    	vm.data = [[10, 30, 40, 20]];
    	vm.series = [$stateParams.subCategory];
        vm.labels = ['17th feb', '18th feb', '19th feb', '20th feb'];

    	vm.clickBar = function (pts, evnt) {
    		$state.go('home');
    	};
    }(this));
  });
