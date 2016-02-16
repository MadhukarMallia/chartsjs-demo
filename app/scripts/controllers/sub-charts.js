'use strict';

/**
 * @ngdoc function
 * @name chartsApp.controller:SubChartsCtrl
 * @description
 * # MainCtrl
 * Controller of the chartsApp
 */
angular.module('chartsApp')
  .controller('SubChartsCtrl', function ($state, $stateParams, SUB_CHARTS) {
    (function (vm) {

        vm.data = SUB_CHARTS.VALUES[$stateParams.category].DATA;
    	vm.labels = SUB_CHARTS.VALUES[$stateParams.category].VALUES;

    	vm.clickPie = function (pts, evnt) {
    		$state.go('details', {
                subCategory: pts[0].label,
                value: pts[0].value
    		});
    	};
    }(this));
  });
