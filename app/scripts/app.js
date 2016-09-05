'use strict';

/**
 * @ngdoc overview
 * @name angularMobileApp
 * @description
 * # angularMobileApp
 *
 * Main module of the application.
 */
var app = angular
	.module('angularMobileApp', [
		'ngRoute',
		'ui.router',
		'mobile-angular-ui',
		"commonModule"
	]);
app.config(function($routeProvider) {
		/*$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl',
				controllerAs: 'main'
			})
			.when('/test', {
				templateUrl: 'views/iscoll.html',
				controller: 'mainCtrl',
				controllerAs: 'mainCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});*/
	})
	.run(["$rootScope", "$state", "$urlRouter","$stateParams", function($rootScope, $state, $urlRouter,$stateParams) {
		console.log("run ...")
		console.log($rootScope);
		console.log($state)
		console.log($urlRouter);
		console.log($stateParams);
		$rootScope.$stateParams=$stateParams;

	}])
	.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/index");
		$stateProvider.state("home", {
			url: '/home',
			templateUrl: 'views/main.html'
		}).state("tabs", {
			url: "/tabs",
			templateUrl: 'views/tab.html'
		}).state("index", {
			url: '/index',
			views: {
				'': {
					templateUrl: 'views/main.html'
				}
			}
		}).state("iscoll", {
			url: '/iscoll',
			templateUrl: 'views/iscoll.html',
			controller: 'mainCtrl'
		}).state("toggle",{
			url:'/toggle',
			templateUrl:'views/toggle.html'
		}).state("overlay",{
			url:'/overlay/{id}/{name}',
			templateUrl:'views/overlay.html',
			controller:'overlayCtrl'
		});
	}]);