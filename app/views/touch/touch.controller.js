(function() {
	"use strict";
	angular.module("angularMobileApp").controller("touchController", ["$scope", touchController]);

	function touchController($scope) {
		console.log("this is  my  touch ctrl")
		$scope.direction = "up";
		$scope.left = function() {
			console.log("touch left");
			$scope.direction = "left";
		}
		$scope.right = function() {
			console.log("touch right");
			$scope.direction = "right";
		}
	}
	app.directive("toucharea", ["$touch", function($touch) {
		console.log($touch);
		return {
			restrict: 'AE',
			link: function(scope, elem, attr, ctrl) {
				scope.touch = "??";
				$touch.bind(elem, {
					start: function(touch) {
						scope.touch = touch;
						scope.$apply();
						console.log("touch start")
					},
					cancel: function(touch) {
						scope.touch = touch;
						scope.$apply();
						console.log("touch cancel")
					},
					move: function(touch) {
						scope.touch = touch;
						scope.$apply();
						console.log("touch move")
					},
					end: function(touch) {
						scope.touch = touch;
						scope.$apply();
						console.log("touch end")
						console.log(touch);
					}
				})
			}
		}
	}]);

	app.directive("touchareaTest", [function() {
		return {
			restrict: 'AE',
			link: function(scope, elem, attr, ctrl) {
				var dirction = "";
				var x = 0;
				elem.bind("touchmove", function(e) {
					/*console.log(e.changedTouches[0]);
					scope.touchTo = e.clientX;
					scope.$apply();*/
				});
				elem.bind("touchstart", function(e) {
					console.log(e.changedTouches[0]);
					console.log("开始触摸");
					scope.touchTo = e.clientX;
					scope.$apply();

					var touch = e.changedTouches[0];
					x = touch.pageX;
				});;
				elem.bind("touchend", function(e) {
					console.log(e.changedTouches[0]);
					console.log('结束触摸');
					scope.touchTo = e.clientX;
					scope.$apply();

					var touch = e.changedTouches[0];
					if(touch.pageX - x > 100) {
						console.log("right")
					} else if(touch.pageX - x < -100) {
						console.log("left")
					} else {
						console.log(touch.pageX - x);
					}
					x = 0;
				});
			}
		}
	}]);

	app.directive("superMan", [superMan]);

	function superMan() {
		return {
			restrict: 'E',
			scope: {},
			controller: function($scope, $element, $attrs) {
				$scope.super = [];
				this.addStrength = function() {
					$scope.super.push("strenth");
				}
				this.addSpeed = function() {
					$scope.super.push("speed");
				}
				this.addLight = function() {
					$scope.super.push("light");
				}
			},
			link: function(scope, element, attr, ctrl) {
				element.bind("mouseenter", function() {
					console.log(scope.super)
				})
			}
		}
	}

	app.directive("strenth", [function() {
		return {
			restrict: 'A',
			require: '^?superMan',
			link: function(scope, elem, attr, superCtrl) {
				superCtrl.addStrength();
			}
		}
	}]);
	app.directive("speed", [function() {
		return {
			restrict: 'A',
			require: '^?superMan',
			link: function(scope, elem, attr, superCtrl) {
				superCtrl.addSpeed();
			}
		}
	}]);
	app.directive("light", [function() {
		return {
			restrict: 'A',
			require: '^?superMan',
			link: function(scope, elem, attr, superCtrl) {
				superCtrl.addLight();
			}
		}
	}]);

	app.directive("testTitle", [function() {
		return {
			restrict: 'AE',
			scope: {
				innerTitle: '@title'
			},
			template: '<div>{{innerTitle}} 我的天</div>'
		}
	}]);

})();