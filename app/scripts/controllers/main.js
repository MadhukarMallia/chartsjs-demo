'use strict';

/**
 * @ngdoc function
 * @name chartsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chartsApp
 */
angular.module('chartsApp')
  .controller('MainCtrl', function ($state, MAIN_LABEL) {
    (function (vm) {
    	vm.data = MAIN_LABEL.DATA;
    	vm.labels = MAIN_LABEL.VALUES;

    	vm.clickPie = function (pts, evnt) {
    		$state.go('sub-chart', {
                category: pts[0].label,
    			value: pts[0].value
    		});
    	};
    }(this));
  });
