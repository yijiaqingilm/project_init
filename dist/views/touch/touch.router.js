app.config(["$stateProvider","$urlRouterProvider",function(t,o){t.state("touch",{url:"/touch",templateUrl:"views/touch/touch.html",controller:"touchController",resolve:{loadMyRes:["$ocLazyLoad",function(t){return t.load({files:[{type:"js",path:"views/touch/touch.controller.js"},{type:"css",path:"views/touch/touch.css"}]})}]}})}]);