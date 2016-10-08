app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
	console.log("this is angular test ng ")
	$stateProvider.state("angular_ng", {
		url: '/angular_ng',
		templateUrl: "views/angular_ng/angular_ng.html",
		controller: "angular_ng_controller",
		resolve: {
			loadMyRes: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([
						{type:'js',path:"views/angular_ng/angular_ng.controller.js"}
					]);
			}]
		}
	});
}]);