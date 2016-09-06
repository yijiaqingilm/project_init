(function() {
	app.controller("flexCtrl", ["$scope", "$timeout", flexCtrl]);

	function flexCtrl($scope, $timeout) {
		console.log("this is flexCtrl");
		console.log($scope);
		$scope.msg = "hello word";
		$scope.testClick = function() {
				$scope.msg = "hello word yijiaqing";
				console.log("xx");
			}
			/*$timeout(function() {
				$scope.msg = "hello word yijiaqing";
				console.log("xx");
			}, 5000);*/
		setTimeout(function() {
			$scope.$apply(function() {
				$scope.msg = "hello word yijiaqing";
				console.log("xx");
			});
		}, 5000);
	}
})()