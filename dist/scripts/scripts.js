function timestamp(e){var t=Date.parse(e);return t/1e3}function dateFormatTime(e,t){date=new Date(1e3*parseInt(e));var o={M:date.getMonth()+1,d:date.getDate(),h:date.getHours(),m:date.getMinutes(),s:date.getSeconds(),q:Math.floor((date.getMonth()+3)/3),S:date.getMilliseconds()};return t=t.replace(/([yMdhmsqS])+/g,function(e,t){var n=o[t];return void 0!==n?(e.length>1&&(n="0"+n,n=n.substr(n.length-2)),n):"y"===t?(date.getFullYear()+"").substr(4-e.length):e})}function checkMobile(e){var t=/^(1(([34578][0-9])|(47)))\d{8}$/;return!!t.test(e)}function isWeiXin(){var e=window.navigator.userAgent.toLowerCase();return"micromessenger"==e.match(/MicroMessenger/i)}function checkCode(e){var t=/^\d{6}$/;return!!t.test(e)}function getLocalTime(e,t){return void 0==t&&(t="yyyy-MM-dd hh:mm:ss"),new Date(parseInt(e)).Format(t).toLocaleString().replace(/:\d{1,2}$/," ")}function myMsg(e,t){void 0==t&&(t=1e3);var o="";o+='<div class="my-dimmer_msg" ></div> \t\t\t<div class="my-modal_msg"> \t\t\t\t<div class="my-modal-dialog am-radius-10"> \t\t\t\t\t<div class="my-modal_msg-hd">'+e+"</div> \t\t\t\t</div> \t\t\t</div>",$("body").append(o),$(".my-modal").css("marginTop",-$(".my-modal").height()/2),$(".my-modal_msg").fadeOut(t),$(".my-dimmer_msg").fadeOut(t)}function myAlert(e,t,o){var n="";n+='<div class="my-dimmer" ></div> \t\t\t<div class="my-modal"> \t\t\t\t<div class="my-modal-dialog am-radius-10"> \t\t\t\t\t<div class="my-modal-hd">'+e+'</div> \t\t\t\t\t<div class="my-modal-bd">'+t+' </div> \t\t\t\t\t<div class="my-modal-footer"> \t\t\t\t\t\t<span class="my-modal-btn">确定</span> \t\t\t\t\t</div> \t\t\t\t</div> \t\t\t</div>',$("body").append(n),$(".my-modal").css("marginTop",-$(".my-modal").height()/2),$(".my-modal-btn").one("click",function(){void 0!=o&&o(),closeAlert()}),$("input[type=text],textarea,[type=search]").bind("input",filterIcon)}function closeAlert(){$(".my-modal").remove(),$(".my-dimmer").remove()}function cutOut(e){return e.length>6&&(e=e.substr(0,3)+"***"+e.substr(e.length-3)),e}function myConfirm(e,t,o,n,l,r,i){void 0==l&&(l="确定"),void 0==r&&(r="取消");var a="";a+='<div class="my-dimmer" ></div><div class="my-modal">\t<div class="my-modal-dialog am-radius-10">\t\t<div class="my-modal-hd">'+e+'</div>\t\t<div class="my-modal-bd">'+t+' </div>\t\t<div class="my-modal-footer">\t\t\t<span class="my-modal-btn border-right-default close">'+r+'</span>\t\t\t<span class="my-modal-btn ok">'+l+"</span>\t\t</div>\t</div></div>",$("body").append(a),$(".my-modal").css("marginTop",-$(".my-modal").height()/2),$(".ok").bind("click",function(){(void 0==i||(console.log(),i()))&&(void 0!=o&&o(),closeAlert())}),$(".close").one("click",function(){void 0!=n&&n(),closeAlert()}),$("input[type=text],textarea,[type=search]").bind("input",filterIcon)}function checkPassword(e){var t=/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,12}$/;return!!t.test(e)}function checkIdcard(e){var t=new Array("7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"),o=new Array("1","0","X","9","8","7","6","5","4","3","2");e+="";for(var n=e.substr(0,17),l=e.substr(17),r=0,i=0;i<17;i++){if(n.charAt(i)<"0"||n.charAt(i)>"9")return!1;r+=parseInt(n.charAt(i))*parseInt(t[i])}var a=parseInt(r)%11;return o[a]==l}function checkName(e){var t=/^\s*[\u4e00-\u9fa5]{1,}[\u4e00-\u9fa5.·]{0,15}[\u4e00-\u9fa5]{1,}\s*$/;return!!t.test(e)}function stringToDate(e){var t=Date.parse(e),o=new Date(t);if(isNaN(o)){var n=e.split("-");o=new Date(n[0],(--n[1]),n[2])}return o}function addDate(e,t){var o=new Date(e.replace(/-/g,"/"));o.setDate(o.getDate()+t);var n=o.getMonth()+1;n<10&&(n="0"+n);var l=o.getDate();return l<10&&(l="0"+l),o.getFullYear()+"-"+n+"-"+l}function find(e,t,o){var n;void 0===o&&(o="");for(var l in e){var r=e[l];if(r.value==t){n=o+r.text;break}if(r.hasOwnProperty("children")&&(n=find(r.children,t,o+r.text+"-")))break}return n}function find2(e,t,o){var n;void 0===o&&(o="");for(var l in e){var r=e[l];if(r.value==t){n=o+r.text;break}if(r.hasOwnProperty("children")&&(n=find(r.children,t,o)))break}return n}function filterUrl(e){var t=/^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i;return!!e.match(t)}!function(e,t){function o(){var t=r.getBoundingClientRect().width;t/s>540&&(t=540*s);var o=t/10;r.style.fontSize=o+"px",u.rem=e.rem=o}var n,l=e.document,r=l.documentElement,i=l.querySelector('meta[name="viewport"]'),a=l.querySelector('meta[name="flexible"]'),s=0,c=0,u=t.flexible||(t.flexible={});if(i){console.warn("将根据已有的meta标签来设置缩放比例");var d=i.getAttribute("content").match(/initial\-scale=([\d\.]+)/);d&&(c=parseFloat(d[1]),s=parseInt(1/c))}else if(a){var m=a.getAttribute("content");if(m){var p=m.match(/initial\-dpr=([\d\.]+)/),f=m.match(/maximum\-dpr=([\d\.]+)/);p&&(s=parseFloat(p[1]),c=parseFloat((1/s).toFixed(2))),f&&(s=parseFloat(f[1]),c=parseFloat((1/s).toFixed(2)))}}if(!s&&!c){var g=e.navigator.userAgent,v=(!!g.match(/android/gi),!!g.match(/iphone/gi)),h=v&&!!g.match(/OS 9_3/),y=e.devicePixelRatio;s=v&&!h?y>=3&&(!s||s>=3)?3:y>=2&&(!s||s>=2)?2:1:1,c=1/s}if(r.setAttribute("data-dpr",s),!i)if(i=l.createElement("meta"),i.setAttribute("name","viewport"),i.setAttribute("content","initial-scale="+c+", maximum-scale="+c+", minimum-scale="+c+", user-scalable=no"),r.firstElementChild)r.firstElementChild.appendChild(i);else{var b=l.createElement("div");b.appendChild(i),l.write(b.innerHTML)}e.addEventListener("resize",function(){clearTimeout(n),n=setTimeout(o,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(n),n=setTimeout(o,300))},!1),"complete"===l.readyState?l.body.style.fontSize=12*s+"px":l.addEventListener("DOMContentLoaded",function(){l.body.style.fontSize=12*s+"px"},!1),o(),u.dpr=e.dpr=s,u.refreshRem=o,u.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},u.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}));var TouchSlide=function(e){e=e||{};var t={slideCell:e.slideCell||"#touchSlide",titCell:e.titCell||".hd li",mainCell:e.mainCell||".bd",effect:e.effect||"left",autoPlay:e.autoPlay||!1,delayTime:e.delayTime||200,interTime:e.interTime||2500,defaultIndex:e.defaultIndex||0,titOnClassName:e.titOnClassName||"on",autoPage:e.autoPage||!1,prevCell:e.prevCell||".prev",nextCell:e.nextCell||".next",pageStateCell:e.pageStateCell||".pageState",pnLoop:"undefined "==e.pnLoop||e.pnLoop,startFun:e.startFun||null,endFun:e.endFun||null,switchLoad:e.switchLoad||null},o=document.getElementById(t.slideCell.replace("#",""));if(!o)return!1;var n=function(e,t){e=e.split(" ");var o=[];t=t||document;var n=[t];for(var l in e)0!=e[l].length&&o.push(e[l]);for(var l in o){if(0==n.length)return!1;var r=[];for(var i in n)if("#"==o[l][0])r.push(document.getElementById(o[l].replace("#","")));else if("."==o[l][0])for(var a=n[i].getElementsByTagName("*"),s=0;s<a.length;s++){var c=a[s].className;c&&c.search(new RegExp("\\b"+o[l].replace(".","")+"\\b"))!=-1&&r.push(a[s])}else for(var a=n[i].getElementsByTagName(o[l]),s=0;s<a.length;s++)r.push(a[s]);n=r}return 0!=n.length&&n[0]!=t&&n},l=function(e,t){var o=document.createElement("div");o.innerHTML=t,o=o.children[0];var n=e.cloneNode(!0);return o.appendChild(n),e.parentNode.replaceChild(o,e),d=n,o},r=function(e,t){!e||!t||e.className&&e.className.search(new RegExp("\\b"+t+"\\b"))!=-1||(e.className+=(e.className?" ":"")+t)},i=function(e,t){!e||!t||e.className&&e.className.search(new RegExp("\\b"+t+"\\b"))==-1||(e.className=e.className.replace(new RegExp("\\s*\\b"+t+"\\b","g"),""))},a=t.effect,s=n(t.prevCell,o)[0],c=n(t.nextCell,o)[0],u=n(t.pageStateCell)[0],d=n(t.mainCell,o)[0];if(!d)return!1;var m,p,f=d.children.length,g=n(t.titCell,o),v=g?g.length:f,h=t.switchLoad,y=parseInt(t.defaultIndex),b=parseInt(t.delayTime),w=parseInt(t.interTime),x="false"!=t.autoPlay&&0!=t.autoPlay,$="false"!=t.autoPage&&0!=t.autoPage,C="false"!=t.pnLoop&&0!=t.pnLoop,M=y,I=null,T=null,L=null,k=0,E=0,A=0,S=0,P=/hp-tablet/gi.test(navigator.appVersion),N="ontouchstart"in window&&!P,D=N?"touchstart":"mousedown",F=N?"touchmove":"",R=N?"touchend":"mouseup",z=d.parentNode.clientWidth,j=f;if(0==v&&(v=f),$){v=f,g=g[0],g.innerHTML="";var O="";if(1==t.autoPage||"true"==t.autoPage)for(var U=0;U<v;U++)O+="<li>"+(U+1)+"</li>";else for(var U=0;U<v;U++)O+=t.autoPage.replace("$",U+1);g.innerHTML=O,g=g.children}"leftLoop"==a&&(j+=2,d.appendChild(d.children[0].cloneNode(!0)),d.insertBefore(d.children[f-1].cloneNode(!0),d.children[0])),m=l(d,'<div class="tempWrap" style="overflow:hidden; position:relative;"></div>'),d.style.cssText="width:"+j*z+"px;position:relative;overflow:hidden;padding:0;margin:0;";for(var U=0;U<j;U++)d.children[U].style.cssText="display:table-cell;vertical-align:top;width:"+z+"px";var q=function(){"function"==typeof t.startFun&&t.startFun(y,v)},_=function(){"function"==typeof t.endFun&&t.endFun(y,v)},B=function(e){var t=("leftLoop"==a?y+1:y)+e,o=function(e){for(var t=d.children[e].getElementsByTagName("img"),o=0;o<t.length;o++)t[o].getAttribute(h)&&(t[o].setAttribute("src",t[o].getAttribute(h)),t[o].removeAttribute(h))};if(o(t),"leftLoop"==a)switch(t){case 0:o(f);break;case 1:o(f+1);break;case f:o(0);break;case f+1:o(1)}},H=function(){z=m.clientWidth,d.style.width=j*z+"px";for(var e=0;e<j;e++)d.children[e].style.width=z+"px";var t="leftLoop"==a?y+1:y;J(-t*z,0)};window.addEventListener("resize",H,!1);var J=function(e,t,o){o=o?o.style:d.style,o.webkitTransitionDuration=o.MozTransitionDuration=o.msTransitionDuration=o.OTransitionDuration=o.transitionDuration=t+"ms",o.webkitTransform="translate("+e+"px,0)translateZ(0)",o.msTransform=o.MozTransform=o.OTransform="translateX("+e+"px)"},W=function(e){switch(a){case"left":y>=v?y=e?y-1:0:y<0&&(y=e?0:v-1),null!=h&&B(0),J(-y*z,b),M=y;break;case"leftLoop":null!=h&&B(0),J(-(y+1)*z,b),y==-1?(T=setTimeout(function(){J(-v*z,0)},b),y=v-1):y==v&&(T=setTimeout(function(){J(-z,0)},b),y=0),M=y}q(),L=setTimeout(function(){_()},b);for(var o=0;o<v;o++)i(g[o],t.titOnClassName),o==y&&r(g[o],t.titOnClassName);0==C&&(i(c,"nextStop"),i(s,"prevStop"),0==y?r(s,"prevStop"):y==v-1&&r(c,"nextStop")),u&&(u.innerHTML="<span>"+(y+1)+"</span>/"+v)};if(W(),x&&(I=setInterval(function(){y++,W()},w)),g)for(var U=0;U<v;U++)!function(){var e=U;g[e].addEventListener("click",function(t){clearTimeout(T),clearTimeout(L),y=e,W()})}();c&&c.addEventListener("click",function(e){1!=C&&y==v-1||(clearTimeout(T),clearTimeout(L),y++,W())}),s&&s.addEventListener("click",function(e){1!=C&&0==y||(clearTimeout(T),clearTimeout(L),y--,W())});var X=function(e){clearTimeout(T),clearTimeout(L),p=void 0,A=0;var t=N?e.touches[0]:e;k=t.pageX,E=t.pageY,d.addEventListener(F,Y,!1),d.addEventListener(R,Z,!1)},Y=function(e){if(!N||!(e.touches.length>1||e.scale&&1!==e.scale)){var t=N?e.touches[0]:e;if(A=t.pageX-k,S=t.pageY-E,"undefined"==typeof p&&(p=!!(p||Math.abs(A)<Math.abs(S))),!p){switch(e.preventDefault(),x&&clearInterval(I),a){case"left":(0==y&&A>0||y>=v-1&&A<0)&&(A=.4*A),J(-y*z+A,0);break;case"leftLoop":J(-(y+1)*z+A,0)}null!=h&&Math.abs(A)>z/3&&B(A>-0?-1:1)}}},Z=function(e){0!=A&&(e.preventDefault(),p||(Math.abs(A)>z/10&&(A>0?y--:y++),W(!0),x&&(I=setInterval(function(){y++,W()},w))),d.removeEventListener(F,Y,!1),d.removeEventListener(R,Z,!1))};d.addEventListener(D,X,!1)};Date.prototype.Format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var o in t)new RegExp("("+o+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[o]:("00"+t[o]).substr((""+t[o]).length)));return e};var commonModule=angular.module("commonModule",[]);commonModule.config(["$provide","$httpProvider",function(e,t){function o(e){return{get:function(t,o){e({url:t,method:"get",data:o}).then(function(e){console.log(e)}).then(function(e){console.log(e)})}}}function n(e){return{request:function(e){return console.log(e),console.log("this is  httpInterceptor"),e},requestError:function(t){return console.log(t),console.log("this is httpInterceptor httpinterceptor rejection"),e.reject(t)},response:function(e){return console.log("this is httpInterceptor response response"),e},responseError:function(t){switch(console.log("this is httpInterceptor responseError responseError"),console.log(t),t.status){case 404:console.log("this is  404")}return e.reject(t)}}}n.$inject=["$q"],console.log("this is commonConfig"),e.factory("testService",["$http",function(e){console.log("this is test server");var t={name:"yijiaqing",age:"22",sex:"1"};return t}]),e.service("getJsonService",["$http","$q",function(e,t){return{query:function(){var o=t.defer();return e({method:"GET",url:"json/test1.json"}).success(function(e,t,n,l){console.log("success"),console.log(e),o.resolve(e)}).error(function(){console.log("error")}),o.promise},asyncGreet:function(e){return t(function(t,o){setTimeout(function(){t("Hello, "+e+"!")},1e3)})}}}]),e.service("myAjax",["$http",o]),e.service("httpInterceptor"[n]),t.interceptors.push(n)}]),window.app=angular.module("angularMobileApp",["ngRoute","ui.router","mobile-angular-ui","mobile-angular-ui.gestures","ngAnimate","ui.bootstrap","commonModule","oc.lazyLoad"]),app.config(["$routeProvider",function(e){}]).run(["$rootScope","$state","$urlRouter","$stateParams","$templateCache",function(e,t,o,n,l){console.log("run ..."),l.put("hello.html","<div>this is hello .html</div>");var r={};r.server=location.protocol+"//"+location.host,e.config=r}]).config(["$stateProvider","$urlRouterProvider",function(e,t){t.otherwise("/404"),e.state("home",{url:"/home",templateUrl:"views/main.html"}).state("tabs",{url:"/tabs",templateUrl:"views/tab.html"}).state("index",{url:"/index",views:{"":{templateUrl:"views/main.html"}}}).state("iscoll",{url:"/iscoll",templateUrl:"views/iscoll.html",controller:"mainCtrl"}).state("toggle",{url:"/toggle",templateUrl:"views/toggle.html"}).state("overlay",{url:"/overlay",templateUrl:"views/overlay.html",controller:"overlayCtrl"}).state("forms",{url:"/forms",templateUrl:"views/forms.html",controller:"flexCtrl"}).state("flex",{url:"/flex",templateUrl:"views/flex.html",controller:"flexCtrl"}).state("404",{url:"/404",templateUrl:"views/404.html"}).state("carousel",{url:"/carousel",templateUrl:"views/carousel_tep.html",controller:"carouselCtrl"}).state("modal",{url:"/modal",templateUrl:"views/modal.html"}).state("user",{url:"/user",templateUrl:"views/user.html"})}]),app.config(["$ocLazyLoadProvider",function(e){e.config({loadedModules:["angularMobileApp"]})}]),function(){app.controller("mainCtrl",["$scope","$timeout","testService","getJsonService","SharedState",function(e,t,o,n,l){console.log("this is main ctrl"),console.log(o.name),e.demo=function(){this.items=[]},e.list=[];for(var r=0;r<100;r++)e.list.push("item"+r);e.demo.items=e.list,e.loadMove=function(){t(function(){for(var t=101;t<130;t++)e.demo.items.push("item"+t)},2e3)};var i=n.query();i.then(function(t){console.log(t),e.data=t.body,console.log("lai  kankan")},function(e){console.log("kan  mao xian ")});var a=n.asyncGreet("ronbin hello");a.then(function(e){console.log("sucess"+e)},function(e){console.log("eorr"+e)}),console.log("test  我不是 最后打印的"),console.log(l),l.initialize(e,"myId",{defaultValue:"wodetian "}),l.initialize(e,"myId2",{defaultValue:"myid2"});var s=l.get("myId");console.log(s),l.setOne("myId","xiug"),console.log(l.get("myId")),l.setMany({myId:"wocao",myId2:"wocao2"}),console.log(l.get("myId")),l.set({myId:"1"}),console.log(l.get("myId")),l.turnOn("myId"),console.log(l.get("myId")),l.turnOff("myId"),console.log(l.get("myId")),console.log(l.active("myId")),console.log(l.isUndefined("myId3")),console.log(l.has("myId3")),console.log(l.referenceCount("myId2")+"count"),l.setOne("myId","test"),console.log(l.eq("myId","test")),console.log(l.values()),l.set("myId",!1),e.$on("mobile-angular-ui.state.changed.myId",function(e,t,o){console.log(e),t===!0?console.log("sidebar opened"):console.log("sidebar closed")}),console.log("=================="),l.initialize(e,"myId3"),l.setOne("myId3","asdf"),console.log(l.get("myId3")),e.outerClick=function(){console.log("this is outer click ???")}}])}(),function(){console.log("xxx"),app.controller("overlayCtrl",["$scope","$urlRouter","$stateParams","SharedState",function(e,t,o,n){console.log("this is overlayCtrtl 123 123"),console.log(t),console.log("========="),console.log(e.$stateParams),console.log(n),e.what=" this is  overlay",e.myalert=function(){console.log("xxx"),n.turnOn("modal1")}}])}(),function(){function e(e){return{restrict:"AEM",template:e.get("hello.html")+"<div ng-transclude ></div>",transclude:!0}}function t(e){return{restrict:"AC",link:function(t,o,n){console.log(o),console.log(n),o.bind("click",function(){console.log("我自己的link 函数");var o=e(n.getjson);o(t)})}}}function o(e){return{restrict:"AE",scope:{},template:"<div><input type='text' ng-model='userName'  />{{userName}}</div>",link:function(e,t,o){console.log("testScope link")}}}function n(){return{restrict:"AE",scope:{flavor:"=",greeting:"&"},template:'<div><input ng-model="flavor"/>{{flavor}}换行<input ng-model="myName"/><input ng-model="age"/><input type="button" ng-click="greeting({name:myName,age:age})"/></div>',link:function(e,t,o,n){console.log("drink link"),console.log(o.greeting)}}}app.controller("flexCtrl",["$scope","$timeout",function(e,t){console.log("this is flexCtrl"),console.log(e);var o=this;o.items=["itme1","item2"],console.log(o),e.msg="hello word",e.testClick=function(){e.msg="hello word yijiaqing",console.log("xx")},setTimeout(function(){e.$apply(function(){e.msg="hello word yijiaqing",console.log("xx")})},5e3),e.deleteNotice=function(e){console.log("this is del node"),console.log(e)},e.list=["index 1","index 2","index 3","index 4","index 5"],e.getJson1=function(){console.log("getJson1")},e.getJson2=function(){console.log("getJson 2")},e.getName=function(){console.log(e.userName)},e.ctrlFlavor="百事",e.sayHello=function(e,t){console.log("hello : "+e,t)}}]),app.directive("dragToDismiss",["$drag","$timeout","$parse",function(e,t,o){return{restrict:"A",link:function(e,t,n,l){t.bind("click",function(){console.log("我自己的link 函数"),console.log(e),console.log(t),console.log(n),console.log(l);var r=o(n.dragToDismiss);r(e)})}}}]),app.directive("hello",["$templateCache",e]),app.directive("loader",["$parse",t]),app.directive("testScope",["$parse",o]),app.directive("drink",n)}(),app.directive("myDirective",function(){return{link:function(e,t){}}}),app.directive("touchslide",function(){return{restrict:"AE",scope:{autoPlay:"@autoplay"},link:function(e,t,o){console.log(e),console.log("touch silide "),console.log(o),TouchSlide({slideCell:"#"+o.id,titCell:".hd ul",mainCell:".bd ul",effect:"leftLoop",autoPlay:e.autoPlay,autoPage:!0})}}}),function(){app.controller("carouselCtrl",["$scope","myAjax",function(e,t){function o(e){for(var t=0,o=r.length;t<o;t++)r[t].id=e.pop()}function n(){for(var e=[],t=0;t<i;++t)e[t]=t;return l(e)}function l(e){var t,o,n=e.length;if(n)for(;--n;)o=Math.floor(Math.random()*(n+1)),t=e[o],e[o]=e[n],e[n]=t;return e}console.log("this is carouselCtrl"),e.myInterval=5e3,e.noWrapSlides=!1,e.active=0;var r=e.slides=[],i=0;e.addSlide=function(){var e=600+r.length+1;r.push({image:"//unsplash.it/"+e+"/300",text:["Nice image","Awesome photograph","That is so cool","I love that"][r.length%4],id:i++})},e.randomize=function(){var e=n();o(e)};for(var a=0;a<4;a++)e.addSlide();console.log(e.config),e.config.squartList=e.config.server+"/user/square/getTop5",t.get(e.config.squartList),console.log("xxxxx")}])}(),function(){app.controller("ModalCtrl",["$scope","$uibModal","$log",function(e,t,o){console.log("model ctrl");var n=this;console.log(n),console.log(event),n.items=["item1","item2","item3"],n.animationsEnabled=!0,n.open=function(e){var l=t.open({animation:n.animationsEnabled,ariaLabelledBy:"modal-title",ariaDescribedBy:"modal-body",templateUrl:"myModalContent.html",controller:"ModalInstanceCtrl",controllerAs:"$ctrl",size:e,resolve:{items:function(){return n.items}}});l.result.then(function(e){n.selected=e},function(){o.info("Modal dismissed at: "+new Date)})},n.openComponentModal=function(){var e=t.open({animation:n.animationsEnabled,component:"modalComponent",resolve:{items:function(){return n.items}}});e.result.then(function(e){n.selected=e},function(){o.info("modal-component dismissed at: "+new Date)})},n.toggleAnimation=function(){n.animationsEnabled=!n.animationsEnabled}}]),app.controller("ModalInstanceCtrl",["$uibModalInstance","items",function(e,t){var o=this;console.log(o),console.log("zheshi sha "),o.items=t,o.selected={item:o.items[0]},o.ok=function(){e.close(o.selected.item)},o.cancel=function(){e.dismiss("cancel")}}])}(),app.config(["$stateProvider","$urlRouterProvider",function(e,t){e.state("profile",{url:"/profile",templateUrl:"views/profile/profile.html",controller:"profileController",resolve:{loadMyRes:["$ocLazyLoad",function(e){return e.load([{type:"js",path:"views/profile/profile.controller.js"},{type:"css",path:"views/profile/profile.css"}])}],test:function(){console.log("this  is   profile  test ")}}})}]),app.config(["$stateProvider","$urlRouterProvider",function(e,t){console.log("this is angular test ng 阿斯蒂芬"),e.state("angular_ng",{url:"/angular_ng",templateUrl:"views/angular_ng/angular_ng.html",controller:"angular_ng_controller",resolve:{loadMyRes:["$ocLazyLoad",function(e){return e.load({files:[{type:"js",path:"views/angular_ng/angular_ng.controller.js"}]})}]}})}]),app.config(["$stateProvider","$urlRouterProvider",function(e,t){e.state("touch",{url:"/touch",templateUrl:"views/touch/touch.html",controller:"touchController",resolve:{loadMyRes:["$ocLazyLoad",function(e){return e.load({files:[{type:"js",path:"views/touch/touch.controller.js"},{type:"css",path:"views/touch/touch.css"}]})}]}})}]),app.config(["$stateProvider","$urlRouterProvider",function(e,t){e.state("closure",{url:"/closure",templateUrl:"views/closure/closure.html",controller:"closureController",resolve:{loadMyRes:["$ocLazyLoad",function(e){return e.load({files:[{type:"js",path:"views/closure/closure.controller.js"},{type:"css",path:"views/closure/closure.css"}]})}]}})}]);