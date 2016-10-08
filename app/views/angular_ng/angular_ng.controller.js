"use strict";
(function() {
	var app = angular.module("angularMobileApp");
	var module2=angular.module("module2",[]);
	var ctr2=module2.controller("controller2",function($scope){
		$scope.name="yijiaiqng";
	})
	var angular_ng_controller=app.controller("angular_ng_controller",["$scope",function($scope){
		console.log("this si angular ng controller");
		$scope.arr=[];
		$scope.a=function(i,j){
			console.log("xxxyyy");
			console.log(i+j);
		}
		$scope.b=function(){
			
		}
		angular.bind("xxx",$scope.a,4,4)();
		
		$scope.user_1={
			name:'yijiaqing',
			age:'18',
			my_date:new Date('2008','08',"08"),
			user3:{
				name:'lanlan',
				age:'12',
				wode:'wode'
			}
		}
		$scope.user_2={
			name:'yijiaqing',
			age:'19',
			user3:{
				name:'lanlan',
				age:'18',
				xx:'yy'
			}
		}
		
		var obj=angular.extend({},$scope.user_1,$scope.user_2);
		console.log(angular.equals($scope.user_1,$scope.user_2));
		console.log($scope.user_1==$scope.user_2);
		console.log(obj);
		
		var obj_2=angular.merge({},$scope.user_1,$scope.user_2);
		console.log(obj_2)
		console.log($scope.user_1)
		
		console.log("==========================")
		
		angular.forEach(obj,function(key,value){
			console.log("key:"+key);
			console.log("value:"+value);
		})
		
		var json='{"body":[{"itemId":"37356","title":"磨光技工15年经验","content":"你好！我是恒冠金属制品厂魏文彬。有15年工作经验很高兴认识你","advertiser":"魏文彬","totalMoney":"1.00","income":"0.80","exchangeRate":"10","addtime":"1474973451"},{"itemId":"36974","title":"耐二次阳极氧化、耐喷砂油墨","content":"万佳原耐二次阳极氧化、耐喷砂油墨是国内最早、最成熟的功能油墨，在苹果5，小米4手机中框、乐视手机中框、魅族手机、OPPO手机等已大量应用。有需求联系杨先生 15986615006","advertiser":"杨威  ","totalMoney":"1.00","income":"0.80","exchangeRate":"0","addtime":"1475059914"}],"code":0,"message":"操作成功"}';
		console.log(json);
		json=JSON.parse(json);
		console.log(json)
		var json_to=angular.fromJson(obj);
		console.log(json_to);
		
		console.log(angular.toJson(json_to));
		
		var y=undefined;
		var x=  (y||angular.identity)(obj);
		console.log(x);
		
		console.log(angular.isObject($scope.user_1));
		console.log(angular.isArray($scope.arr));
		
		var myDate=new Date();
		console.log(angular.isDate(myDate))
		
		console.log(angular.isFunction($scope.b))
		var my_null;
		console.log(my_null);
		console.log(angular.isDefined(my_null));
		
	}]);
	angular.bootstrap(document.getElementById("div2"),["module2"]);
})();