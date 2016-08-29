var commonModule = angular.module("commonModule", []);
commonModule.config(["$provide", function($provide) {
	console.log("this is commonConfig")
	$provide.factory("testService", ["$http", function($http) {
		console.log("this is test server");
		var userINfo = {
			"name": "yijiaqing",
			"age": '22',
			"sex": '1'
		}
		return userINfo;
	}]);

	$provide.service("getJsonService", ["$http", "$q", function($http, $q) {
		return {
			query: function() {
				var deferred = $q.defer();
				$http({
					method: 'GET',
					url: 'json/test1.json',

				}).success(function(data, status, headers, config) {
					console.log("success");
					console.log(data);
					deferred.resolve(data)
				}).error(function() {
					console.log("error")
				});
				return deferred.promise;
			},
			asyncGreet:function(name) {
				// perform some asynchronous operation, resolve or reject the promise when appropriate.
				return $q(function(resolve, reject) {
					setTimeout(function() {
						if(true) {
							resolve('Hello, ' + name + '!');
						} else {
							reject('Greeting ' + name + ' is not allowed.');
						}
					}, 1000);
				});
			}
		}
	}]);

}]);