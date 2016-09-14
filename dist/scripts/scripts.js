function timestamp(e) {
	var t = Date.parse(e);
	return t / 1e3
}

function dateFormatTime(e, t) {
	date = new Date(1e3 * parseInt(e));
	var o = {
		M: date.getMonth() + 1,
		d: date.getDate(),
		h: date.getHours(),
		m: date.getMinutes(),
		s: date.getSeconds(),
		q: Math.floor((date.getMonth() + 3) / 3),
		S: date.getMilliseconds()
	};
	return t = t.replace(/([yMdhmsqS])+/g, function(e, t) {
		var n = o[t];
		return void 0 !== n ? (e.length > 1 && (n = "0" + n, n = n.substr(n.length - 2)), n) : "y" === t ? (date.getFullYear() + "").substr(4 - e.length) : e
	})
}

function checkMobile(e) {
	var t = /^(1(([34578][0-9])|(47)))\d{8}$/;
	return !!t.test(e)
}

function isWeiXin() {
	var e = window.navigator.userAgent.toLowerCase();
	return "micromessenger" == e.match(/MicroMessenger/i)
}

function checkCode(e) {
	var t = /^\d{6}$/;
	return !!t.test(e)
}

function getLocalTime(e, t) {
	return void 0 == t && (t = "yyyy-MM-dd hh:mm:ss"), new Date(parseInt(e)).Format(t).toLocaleString().replace(/:\d{1,2}$/, " ")
}

function myMsg(e, t) {
	void 0 == t && (t = 1e3);
	var o = "";
	o += '<div class="my-dimmer_msg" ></div> \t\t\t<div class="my-modal_msg"> \t\t\t\t<div class="my-modal-dialog am-radius-10"> \t\t\t\t\t<div class="my-modal_msg-hd">' + e + "</div> \t\t\t\t</div> \t\t\t</div>", $("body").append(o), $(".my-modal").css("marginTop", -$(".my-modal").height() / 2), $(".my-modal_msg").fadeOut(t), $(".my-dimmer_msg").fadeOut(t)
}

function myAlert(e, t, o) {
	var n = "";
	n += '<div class="my-dimmer" ></div> \t\t\t<div class="my-modal"> \t\t\t\t<div class="my-modal-dialog am-radius-10"> \t\t\t\t\t<div class="my-modal-hd">' + e + '</div> \t\t\t\t\t<div class="my-modal-bd">' + t + ' </div> \t\t\t\t\t<div class="my-modal-footer"> \t\t\t\t\t\t<span class="my-modal-btn">确定</span> \t\t\t\t\t</div> \t\t\t\t</div> \t\t\t</div>', $("body").append(n), $(".my-modal").css("marginTop", -$(".my-modal").height() / 2), $(".my-modal-btn").one("click", function() {
		void 0 != o && o(), closeAlert()
	}), $("input[type=text],textarea,[type=search]").bind("input", filterIcon)
}

function closeAlert() {
	$(".my-modal").remove(), $(".my-dimmer").remove()
}

function cutOut(e) {
	return e.length > 6 && (e = e.substr(0, 3) + "***" + e.substr(e.length - 3)), e
}

function myConfirm(e, t, o, n, i, l, r) {
	void 0 == i && (i = "确定"), void 0 == l && (l = "取消");
	var s = "";
	s += '<div class="my-dimmer" ></div><div class="my-modal">\t<div class="my-modal-dialog am-radius-10">\t\t<div class="my-modal-hd">' + e + '</div>\t\t<div class="my-modal-bd">' + t + ' </div>\t\t<div class="my-modal-footer">\t\t\t<span class="my-modal-btn border-right-default close">' + l + '</span>\t\t\t<span class="my-modal-btn ok">' + i + "</span>\t\t</div>\t</div></div>", $("body").append(s), $(".my-modal").css("marginTop", -$(".my-modal").height() / 2), $(".ok").bind("click", function() {
		(void 0 == r || (console.log(), r())) && (void 0 != o && o(), closeAlert())
	}), $(".close").one("click", function() {
		void 0 != n && n(), closeAlert()
	}), $("input[type=text],textarea,[type=search]").bind("input", filterIcon)
}

function checkPassword(e) {
	var t = /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,12}$/;
	return !!t.test(e)
}

function checkIdcard(e) {
	var t = new Array("7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"),
		o = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2");
	e += "";
	for(var n = e.substr(0, 17), i = e.substr(17), l = 0, r = 0; r < 17; r++) {
		if(n.charAt(r) < "0" || n.charAt(r) > "9") return !1;
		l += parseInt(n.charAt(r)) * parseInt(t[r])
	}
	var s = parseInt(l) % 11;
	return o[s] == i
}

function checkName(e) {
	var t = /^\s*[\u4e00-\u9fa5]{1,}[\u4e00-\u9fa5.·]{0,15}[\u4e00-\u9fa5]{1,}\s*$/;
	return !!t.test(e)
}

function stringToDate(e) {
	var t = Date.parse(e),
		o = new Date(t);
	if(isNaN(o)) {
		var n = e.split("-");
		o = new Date(n[0], (--n[1]), n[2])
	}
	return o
}

function addDate(e, t) {
	var o = new Date(e.replace(/-/g, "/"));
	o.setDate(o.getDate() + t);
	var n = o.getMonth() + 1;
	n < 10 && (n = "0" + n);
	var i = o.getDate();
	return i < 10 && (i = "0" + i), o.getFullYear() + "-" + n + "-" + i
}

function find(e, t, o) {
	var n;
	void 0 === o && (o = "");
	for(var i in e) {
		var l = e[i];
		if(l.value == t) {
			n = o + l.text;
			break
		}
		if(l.hasOwnProperty("children") && (n = find(l.children, t, o + l.text + "-"))) break
	}
	return n
}

function find2(e, t, o) {
	var n;
	void 0 === o && (o = "");
	for(var i in e) {
		var l = e[i];
		if(l.value == t) {
			n = o + l.text;
			break
		}
		if(l.hasOwnProperty("children") && (n = find(l.children, t, o))) break
	}
	return n
}

function filterUrl(e) {
	var t = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i;
	return !!e.match(t)
}! function(e, t) {
	function o() {
		var t = l.getBoundingClientRect().width;
		t / a > 540 && (t = 540 * a);
		var o = t / 10;
		l.style.fontSize = o + "px", d.rem = e.rem = o
	}
	var n, i = e.document,
		l = i.documentElement,
		r = i.querySelector('meta[name="viewport"]'),
		s = i.querySelector('meta[name="flexible"]'),
		a = 0,
		c = 0,
		d = t.flexible || (t.flexible = {});
	if(r) {
		console.warn("将根据已有的meta标签来设置缩放比例");
		var u = r.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
		u && (c = parseFloat(u[1]), a = parseInt(1 / c))
	} else if(s) {
		var m = s.getAttribute("content");
		if(m) {
			var g = m.match(/initial\-dpr=([\d\.]+)/),
				p = m.match(/maximum\-dpr=([\d\.]+)/);
			g && (a = parseFloat(g[1]), c = parseFloat((1 / a).toFixed(2))), p && (a = parseFloat(p[1]), c = parseFloat((1 / a).toFixed(2)))
		}
	}
	if(!a && !c) {
		var f = e.navigator.userAgent,
			v = (!!f.match(/android/gi), !!f.match(/iphone/gi)),
			h = v && !!f.match(/OS 9_3/),
			y = e.devicePixelRatio;
		a = v && !h ? y >= 3 && (!a || a >= 3) ? 3 : y >= 2 && (!a || a >= 2) ? 2 : 1 : 1, c = 1 / a
	}
	if(l.setAttribute("data-dpr", a), !r)
		if(r = i.createElement("meta"), r.setAttribute("name", "viewport"), r.setAttribute("content", "initial-scale=" + c + ", maximum-scale=" + c + ", minimum-scale=" + c + ", user-scalable=no"), l.firstElementChild) l.firstElementChild.appendChild(r);
		else {
			var b = i.createElement("div");
			b.appendChild(r), i.write(b.innerHTML)
		}
	e.addEventListener("resize", function() {
		clearTimeout(n), n = setTimeout(o, 300)
	}, !1), e.addEventListener("pageshow", function(e) {
		e.persisted && (clearTimeout(n), n = setTimeout(o, 300))
	}, !1), "complete" === i.readyState ? i.body.style.fontSize = 12 * a + "px" : i.addEventListener("DOMContentLoaded", function() {
		i.body.style.fontSize = 12 * a + "px"
	}, !1), o(), d.dpr = e.dpr = a, d.refreshRem = o, d.rem2px = function(e) {
		var t = parseFloat(e) * this.rem;
		return "string" == typeof e && e.match(/rem$/) && (t += "px"), t
	}, d.px2rem = function(e) {
		var t = parseFloat(e) / this.rem;
		return "string" == typeof e && e.match(/px$/) && (t += "rem"), t
	}
}(window, window.lib || (window.lib = {})), Date.prototype.Format = function(e) {
	var t = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		S: this.getMilliseconds()
	};
	/(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
	for(var o in t) new RegExp("(" + o + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[o] : ("00" + t[o]).substr(("" + t[o]).length)));
	return e
}, ! function(e) {
	"use strict";
	var t = document,
		o = "querySelectorAll",
		n = "getElementsByClassName",
		i = function(e) {
			return t[o](e)
		},
		l = {
			type: 0,
			shade: !0,
			shadeClose: !0,
			fixed: !0,
			anim: "scale"
		},
		r = {
			extend: function(e) {
				var t = JSON.parse(JSON.stringify(l));
				for(var o in e) t[o] = e[o];
				return t
			},
			timer: {},
			end: {}
		};
	r.touch = function(e, t) {
		e.addEventListener("click", function(e) {
			t.call(this, e)
		}, !1)
	};
	var s = 0,
		a = ["layui-m-layer"],
		c = function(e) {
			var t = this;
			t.config = r.extend(e), t.view()
		};
	c.prototype.view = function() {
		var e = this,
			o = e.config,
			l = t.createElement("div");
		e.id = l.id = a[0] + s, l.setAttribute("class", a[0] + " " + a[0] + (o.type || 0)), l.setAttribute("index", s);
		var r = function() {
				var e = "object" == typeof o.title;
				return o.title ? '<h3 style="' + (e ? o.title[1] : "") + '">' + (e ? o.title[0] : o.title) + "</h3>" : ""
			}(),
			c = function() {
				"string" == typeof o.btn && (o.btn = [o.btn]);
				var e, t = (o.btn || []).length;
				return 0 !== t && o.btn ? (e = '<span yes type="1">' + o.btn[0] + "</span>", 2 === t && (e = '<span no type="0">' + o.btn[1] + "</span>" + e), '<div class="layui-m-layerbtn">' + e + "</div>") : ""
			}();
		if(o.fixed || (o.top = o.hasOwnProperty("top") ? o.top : 100, o.style = o.style || "", o.style += " top:" + (t.body.scrollTop + o.top) + "px"), 2 === o.type && (o.content = '<i></i><i class="layui-m-layerload"></i><i></i><p>' + (o.content || "") + "</p>"), o.skin && (o.anim = "up"), "msg" === o.skin && (o.shade = !1), l.innerHTML = (o.shade ? "<div " + ("string" == typeof o.shade ? 'style="' + o.shade + '"' : "") + ' class="layui-m-layershade"></div>' : "") + '<div class="layui-m-layermain" ' + (o.fixed ? "" : 'style="position:static;"') + '><div class="layui-m-layersection"><div class="layui-m-layerchild ' + (o.skin ? "layui-m-layer-" + o.skin + " " : "") + (o.className ? o.className : "") + " " + (o.anim ? "layui-m-anim-" + o.anim : "") + '" ' + (o.style ? 'style="' + o.style + '"' : "") + ">" + r + '<div class="layui-m-layercont">' + o.content + "</div>" + c + "</div></div></div>", !o.type || 2 === o.type) {
			var d = t[n](a[0] + o.type),
				u = d.length;
			u >= 1 && layer.close(d[0].getAttribute("index"))
		}
		document.body.appendChild(l);
		var m = e.elem = i("#" + e.id)[0];
		o.success && o.success(m), e.index = s++, e.action(o, m)
	}, c.prototype.action = function(e, t) {
		var o = this;
		e.time && (r.timer[o.index] = setTimeout(function() {
			layer.close(o.index)
		}, 1e3 * e.time));
		var i = function() {
			var t = this.getAttribute("type");
			0 == t ? (e.no && e.no(), layer.close(o.index)) : e.yes ? e.yes(o.index) : layer.close(o.index)
		};
		if(e.btn)
			for(var l = t[n]("layui-m-layerbtn")[0].children, s = l.length, a = 0; s > a; a++) r.touch(l[a], i);
		if(e.shade && e.shadeClose) {
			var c = t[n]("layui-m-layershade")[0];
			r.touch(c, function() {
				layer.close(o.index, e.end)
			})
		}
		e.end && (r.end[o.index] = e.end)
	}, e.layer = {
		v: "2.0",
		index: s,
		open: function(e) {
			var t = new c(e || {});
			return t.index
		},
		close: function(e) {
			var o = i("#" + a[0] + e)[0];
			o && (o.innerHTML = "", t.body.removeChild(o), clearTimeout(r.timer[e]), delete r.timer[e], "function" == typeof r.end[e] && r.end[e](), delete r.end[e])
		},
		closeAll: function() {
			for(var e = t[n](a[0]), o = 0, i = e.length; i > o; o++) layer.close(0 | e[0].getAttribute("index"))
		}
	}, "function" == typeof define ? define(function() {
		return layer
	}) : function() {
		var e = document.scripts,
			o = e[e.length - 1],
			n = o.src,
			i = n.substring(0, n.lastIndexOf("/") + 1);
		o.getAttribute("merge") || document.head.appendChild(function() {
			var e = t.createElement("link");
			return e.href = i + "need/layer.css?2.0", e.type = "text/css", e.rel = "styleSheet", e.id = "layermcss", e
		}())
	}()
}(window);
var commonModule = angular.module("commonModule", []);
commonModule.config(["$provide", "$httpProvider", function(e, t) {
	function o(e) {
		return {
			get: function(t, o) {
				e({
					url: t,
					method: "get",
					data: o
				}).then(function(e) {
					console.log(e)
				}).then(function(e) {
					console.log(e)
				})
			}
		}
	}

	function n(e) {
		return {
			request: function(e) {
				return console.log(e), console.log("this is  httpInterceptor"), e
			},
			requestError: function(t) {
				return console.log(t), console.log("this is httpInterceptor httpinterceptor rejection"), e.reject(t)
			},
			response: function(e) {
				return console.log("this is httpInterceptor response response"), e
			},
			responseError: function(t) {
				switch(console.log("this is httpInterceptor responseError responseError"), console.log(t), t.status) {
					case 404:
						console.log("this is  404")
				}
				return e.reject(t)
			}
		}
	}
	n.$inject = ["$q"], console.log("this is commonConfig"), e.factory("testService", ["$http", function(e) {
		console.log("this is test server");
		var t = {
			name: "yijiaqing",
			age: "22",
			sex: "1"
		};
		return t
	}]), e.service("getJsonService", ["$http", "$q", function(e, t) {
		return {
			query: function() {
				var o = t.defer();
				return e({
					method: "GET",
					url: "json/test1.json"
				}).success(function(e, t, n, i) {
					console.log("success"), console.log(e), o.resolve(e)
				}).error(function() {
					console.log("error")
				}), o.promise
			},
			asyncGreet: function(e) {
				return t(function(t, o) {
					setTimeout(function() {
						t("Hello, " + e + "!")
					}, 1e3)
				})
			}
		}
	}]), e.service("myAjax", ["$http", o]), e.service("httpInterceptor" [n]), t.interceptors.push(n)
}]);
var app = angular.module("angularMobileApp", ["ngRoute", "ui.router", "mobile-angular-ui", "mobile-angular-ui.gestures", "ngAnimate", "ngTouch", "ui.bootstrap", "commonModule"]);
app.config(["$routeProvider", function(e) {}]).run(["$rootScope", "$state", "$urlRouter", "$stateParams", "$templateCache", function(e, t, o, n, i) {
		console.log("run ..."), i.put("hello.html", "<div>this is hello .html</div>");
		var l = {};
		l.server = location.protocol + "//" + location.host, e.config = l
	}]).config(["$stateProvider", "$urlRouterProvider", function(e, t) {
		t.otherwise("/404"), e.state("home", {
			url: "/home",
			templateUrl: "views/main.html"
		}).state("tabs", {
			url: "/tabs",
			templateUrl: "views/tab.html"
		}).state("index", {
			url: "/index",
			views: {
				"": {
					templateUrl: "views/main.html"
				}
			}
		}).state("iscoll", {
			url: "/iscoll",
			templateUrl: "views/iscoll.html",
			controller: "mainCtrl"
		}).state("toggle", {
			url: "/toggle",
			templateUrl: "views/toggle.html"
		}).state("overlay", {
			url: "/overlay",
			templateUrl: "views/overlay.html",
			controller: "overlayCtrl"
		}).state("forms", {
			url: "/forms",
			templateUrl: "views/forms.html",
			controller: "flexCtrl"
		}).state("flex", {
			url: "/flex",
			templateUrl: "views/flex.html",
			controller: "flexCtrl"
		}).state("404", {
			url: "/404",
			templateUrl: "404.html"
		}).state("carousel", {
			url: "/carousel",
			templateUrl: "views/carousel_tep.html",
			controller: "carouselCtrl"
		}).state("modal", {
			url: "/modal",
			templateUrl: "views/modal.html"
		}).state("profile", {
			url: "/profile",
			templateUrl: "views/profile/profile.html",
			controller: "profileController"
		})
	}]),
	function() {
		app.controller("mainCtrl", ["$scope", "$timeout", "testService", "getJsonService", "SharedState", function(e, t, o, n, i) {
			console.log("this is main ctrl"), console.log(o.name), e.demo = function() {
				this.items = []
			}, e.list = [];
			for(var l = 0; l < 100; l++) e.list.push("item" + l);
			e.demo.items = e.list, e.loadMove = function() {
				t(function() {
					for(var t = 101; t < 130; t++) e.demo.items.push("item" + t)
				}, 2e3)
			};
			var r = n.query();
			r.then(function(t) {
				console.log(t), e.data = t.body, console.log("lai  kankan")
			}, function(e) {
				console.log("kan  mao xian ")
			});
			var s = n.asyncGreet("ronbin hello");
			s.then(function(e) {
				console.log("sucess" + e)
			}, function(e) {
				console.log("eorr" + e)
			}), console.log("test  我不是 最后打印的"), console.log(i), i.initialize(e, "myId", {
				defaultValue: "wodetian "
			}), i.initialize(e, "myId2", {
				defaultValue: "myid2"
			});
			var a = i.get("myId");
			console.log(a), i.setOne("myId", "xiug"), console.log(i.get("myId")), i.setMany({
				myId: "wocao",
				myId2: "wocao2"
			}), console.log(i.get("myId")), i.set({
				myId: "1"
			}), console.log(i.get("myId")), i.turnOn("myId"), console.log(i.get("myId")), i.turnOff("myId"), console.log(i.get("myId")), console.log(i.active("myId")), console.log(i.isUndefined("myId3")), console.log(i.has("myId3")), console.log(i.referenceCount("myId2") + "count"), i.setOne("myId", "test"), console.log(i.eq("myId", "test")), console.log(i.values()), i.set("myId", !1), e.$on("mobile-angular-ui.state.changed.myId", function(e, t, o) {
				console.log(e), t === !0 ? console.log("sidebar opened") : console.log("sidebar closed")
			}), console.log("=================="), i.initialize(e, "myId3"), i.setOne("myId3", "asdf"), console.log(i.get("myId3")), e.outerClick = function() {
				console.log("this is outer click ???")
			}
		}])
	}(),
	function() {
		console.log("xxx"), app.controller("overlayCtrl", ["$scope", "$urlRouter", "$stateParams", "SharedState", function(e, t, o, n) {
			console.log("this is overlayCtrtl 123 123"), console.log(t), console.log("========="), console.log(e.$stateParams), console.log(n), e.what = " this is  overlay", e.myalert = function() {
				console.log("xxx"), n.turnOn("modal1")
			}
		}])
	}(),
	function() {
		function e(e) {
			return {
				restrict: "AEM",
				template: e.get("hello.html") + "<div ng-transclude ></div>",
				transclude: !0
			}
		}

		function t(e) {
			return {
				restrict: "AC",
				link: function(t, o, n) {
					console.log(o), console.log(n), o.bind("click", function() {
						console.log("我自己的link 函数");
						var o = e(n.getjson);
						o(t)
					})
				}
			}
		}

		function o(e) {
			return {
				restrict: "AE",
				scope: {},
				template: "<div><input type='text' ng-model='userName'  />{{userName}}</div>",
				link: function(e, t, o) {
					console.log("testScope link")
				}
			}
		}

		function n() {
			return {
				restrict: "AE",
				scope: {
					flavor: "=",
					greeting: "&"
				},
				template: '<div><input ng-model="flavor"/>{{flavor}}换行<input ng-model="myName"/><input ng-model="age"/><input type="button" ng-click="greeting({name:myName,age:age})"/></div>',
				link: function(e, t, o, n) {
					console.log("drink link"), console.log(o.greeting)
				}
			}
		}
		app.controller("flexCtrl", ["$scope", "$timeout", function(e, t) {
			console.log("this is flexCtrl"), console.log(e);
			var o = this;
			o.items = ["itme1", "item2"], console.log(o), e.msg = "hello word", e.testClick = function() {
				e.msg = "hello word yijiaqing", console.log("xx")
			}, setTimeout(function() {
				e.$apply(function() {
					e.msg = "hello word yijiaqing", console.log("xx")
				})
			}, 5e3), e.deleteNotice = function(e) {
				console.log("this is del node"), console.log(e)
			}, e.list = ["index 1", "index 2", "index 3", "index 4", "index 5"], e.getJson1 = function() {
				console.log("getJson1")
			}, e.getJson2 = function() {
				console.log("getJson 2")
			}, e.getName = function() {
				console.log(e.userName)
			}, e.ctrlFlavor = "百事", e.sayHello = function(e, t) {
				console.log("hello : " + e, t)
			}
		}]), app.directive("dragToDismiss", ["$drag", "$timeout", "$parse", function(e, t, o) {
			return {
				restrict: "A",
				link: function(e, t, n, i) {
					t.bind("click", function() {
						console.log("我自己的link 函数"), console.log(e), console.log(t), console.log(n), console.log(i);
						var l = o(n.dragToDismiss);
						l(e)
					})
				}
			}
		}]), app.directive("hello", ["$templateCache", e]), app.directive("loader", ["$parse", t]), app.directive("testScope", ["$parse", o]), app.directive("drink", n)
	}(), app.directive("myDirective", function() {
		return {
			link: function(e, t) {}
		}
	}),
	function() {
		app.controller("carouselCtrl", ["$scope", "myAjax", function(e, t) {
			function o(e) {
				for(var t = 0, o = l.length; t < o; t++) l[t].id = e.pop()
			}

			function n() {
				for(var e = [], t = 0; t < r; ++t) e[t] = t;
				return i(e)
			}

			function i(e) {
				var t, o, n = e.length;
				if(n)
					for(; --n;) o = Math.floor(Math.random() * (n + 1)), t = e[o], e[o] = e[n], e[n] = t;
				return e
			}
			console.log("this is carouselCtrl"), e.myInterval = 5e3, e.noWrapSlides = !1, e.active = 0;
			var l = e.slides = [],
				r = 0;
			e.addSlide = function() {
				var e = 600 + l.length + 1;
				l.push({
					image: "//unsplash.it/" + e + "/300",
					text: ["Nice image", "Awesome photograph", "That is so cool", "I love that"][l.length % 4],
					id: r++
				})
			}, e.randomize = function() {
				var e = n();
				o(e)
			};
			for(var s = 0; s < 4; s++) e.addSlide();
			console.log(e.config), e.config.squartList = e.config.server + "/user/square/getTop5", t.get(e.config.squartList), console.log("xxxxx")
		}])
	}(),
	function() {
		app.controller("ModalCtrl", ["$scope", "$uibModal", "$log", function(e, t, o) {
			console.log("model ctrl");
			var n = this;
			console.log(n), console.log(event), n.items = ["item1", "item2", "item3"], n.animationsEnabled = !0, n.open = function(e) {
				var i = t.open({
					animation: n.animationsEnabled,
					ariaLabelledBy: "modal-title",
					ariaDescribedBy: "modal-body",
					templateUrl: "myModalContent.html",
					controller: "ModalInstanceCtrl",
					controllerAs: "$ctrl",
					size: e,
					resolve: {
						items: function() {
							return n.items
						}
					}
				});
				i.result.then(function(e) {
					n.selected = e
				}, function() {
					o.info("Modal dismissed at: " + new Date)
				})
			}, n.openComponentModal = function() {
				var e = t.open({
					animation: n.animationsEnabled,
					component: "modalComponent",
					resolve: {
						items: function() {
							return n.items
						}
					}
				});
				e.result.then(function(e) {
					n.selected = e
				}, function() {
					o.info("modal-component dismissed at: " + new Date)
				})
			}, n.toggleAnimation = function() {
				n.animationsEnabled = !n.animationsEnabled
			}
		}]), app.controller("ModalInstanceCtrl", ["$uibModalInstance", "items", function(e, t) {
			var o = this;
			console.log(o), console.log("zheshi sha "), o.items = t, o.selected = {
				item: o.items[0]
			}, o.ok = function() {
				e.close(o.selected.item)
			}, o.cancel = function() {
				e.dismiss("cancel")
			}
		}])
	}(),
	function() {
		app.controller("profileController", ["$scope", function(e) {
			console.log("this is my profile controller")
		}])
	}();