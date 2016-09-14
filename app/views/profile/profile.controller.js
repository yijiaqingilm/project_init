(function() {
	app.controller("profileController", ['$scope', function($scope) {
		console.log("this is my profile controller");
		var text='<c>asdfasdf</c><b>asdfasdf</b><b>asdfasdf</b>这是文字<b>asdfasdf</b>123';
		var str= removeHTMLTag(text);
		"这是文字123"
		console.log(str);
	}]);

	function removeHTMLTag(str) {
		var RegExp = /(<)([a-z])(>)([a-z])(<)(\/)([a-z])(>)([a-z])(<)([a-z])(>)([a-z])(<)(\/)([a-z])(>)([a-z])/g
		str = str.replace(RegExp, '');
		str = str.replace(/&[^;]+;/g, '');
		
		var f="<c>asdfasdf</c>123";
		if(RegExp.test(f)){
			console.log("xxx我的天");
		}
		
		
		return str;
	}
})();
//var RegExp = / <  [^>]+ >   /g;