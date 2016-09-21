app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
	$stateProvider.state("profile", {
		url: '/profile',
		templateUrl: 'views/profile/profile.html',
		controller: 'profileController',
		resolve:{
			loadMyCtrl:['$ocLazyLoad',function($ocLazyLoad){
				return $ocLazyLoad.load('views/profile/profile.controller.js');
			}]
		}
	});
}]);