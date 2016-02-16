angular.module('chartsApp.constant', [])
.constant('MAIN_LABEL', {
	"VALUES": ["main-1", "main-2", "main-3", "main-4", "main-5"],
	"DATA": [10, 20, 15, 25, 40]
})
.constant('SUB_CHARTS', {
	"VALUES": {
		"main-1": {
			"VALUES": ["main-1-1", "main-1-2", "main-1-3"],
			"DATA": [10, 15, 30]
		},
		"main-2": {
			"VALUES": ["main-2-1", "main-2-2"],
			"DATA": [40, 60]
		},
		"main-3": {
			"VALUES": ["main-3-1", "main-3-2", "main-3-3", "main-3-4"],
			"DATA": [5, 30, 70, 10]
		},
		"main-4": {
			"VALUES": ["main-4-1", "main-4-2", "main-4-3"],
			"DATA": [14, 16, 25]
		},
		"main-5": {
			"VALUES": ["main-5-1", "main-5-2", "main-5-3", "main-5-4"],
			"DATA": [10, 15, 25, 35]
		}
	}
})
.constant('DETAILS', {
	"VALUES": {
		"main-1": [],
		"main-2": {

		},
		"main-3": {

		},
		"main-4": {

		},
		"main-5": {

		}
	}
});
