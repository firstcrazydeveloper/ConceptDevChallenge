webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/features/speech/speech.module": [
		"../../../../../src/app/features/speech/speech.module.ts",
		"speech.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html {\r\n    background-color: #5d1760;\r\n}\r\n\r\nbody {\r\n    background-color: #5d1760;\r\n    color: #84878d;\r\n    font-family: \"Roboto\", \"Open Sans\", sans-serif;\r\n    font-size: 15px;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n}\r\n\r\n    body::-webkit-scrollbar {\r\n        width: .5em;\r\n        height: .5em;\r\n    }\r\n\r\n    body::-webkit-scrollbar-track {\r\n        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n    }\r\n\r\n    body::-webkit-scrollbar-thumb {\r\n        background-color: #ffaa3c;\r\n        outline: 1px solid slategrey;\r\n    }\r\n\r\n.main-content {\r\n    margin-top: 30px;\r\n}\r\n\r\n.container {\r\n    /*background: #d5cfcf;*/\r\n    background: white;\r\n    border-radius: 5px;\r\n    overflow:hidden;\r\n}\r\n\r\nnav-menu ul {\r\n    margin-bottom: 5px;\r\n}\r\n\r\nul li {\r\n    background: #462556;\r\n    list-style: none;\r\n    height: 35px;\r\n    float: left;\r\n    padding: 0 5px;\r\n    border-right: 2px solid #d5cfcf;\r\n    margin-bottom: 5px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.active {\r\n    border-bottom: 4px solid #ffaa3c;\r\n    padding: 0 15px;\r\n    color: #ffaa3c;\r\n    font-weight: bold;\r\n}\r\n\r\nul li a {\r\n    min-width: 100px;\r\n    height: 35px;\r\n    padding: 0 15px;\r\n    color: #fff;\r\n    font-size: 0.8em;\r\n    font-weight: 400;\r\n    line-height: 2.5;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: block;\r\n    transition: .2s all linear;\r\n}\r\n\r\n    ul li a:focus {\r\n        text-decoration: none;\r\n        color: #ffaa3c;\r\n        outline: none;\r\n    }\r\n\r\nul li.active a {\r\n    text-decoration: none;\r\n    color: #ffaa3c;\r\n    outline: none;\r\n    font-weight: bold;\r\n}\r\n\r\nul:hover > li:not(:hover) {\r\n    opacity: 0.5;\r\n}\r\n\r\nul li a:hover {\r\n    border-bottom: 4px solid #ffaa3c;\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n\r\nul:hover > li {\r\n    background-color: #6a3787;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">   \r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_components_login_login_component__ = __webpack_require__("../../../../../src/app/common/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_components_pagenotfound_pagenotfound_component__ = __webpack_require__("../../../../../src/app/common/components/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = (function () {
    function AppModule(router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_9__common_components_login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_10__common_components_pagenotfound_pagenotfound_component__["a" /* PageNotFoundComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_11__app_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */].forRoot()
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AppModule);

var _a;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_components_login_login_component__ = __webpack_require__("../../../../../src/app/common/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_components_pagenotfound_pagenotfound_component__ = __webpack_require__("../../../../../src/app/common/components/pagenotfound/pagenotfound.component.ts");



var appRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__common_components_login_login_component__["a" /* LoginComponent */] },
    {
        path: 'speechDashboard',
        loadChildren: 'app/features/speech/speech.module#SpeechModule'
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__common_components_pagenotfound_pagenotfound_component__["a" /* PageNotFoundComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/appSettings.setting.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = (function () {
    function AppSettings() {
    }
    return AppSettings;
}());

// public static BaseAPIUrl: string = 'http://localhost:48255/api/';
AppSettings.BaseAPIUrl = 'http://devchallengewebapi.firstcrazydeveloper.com/api/';
//# sourceMappingURL=appSettings.setting.js.map

/***/ }),

/***/ "../../../../../src/app/common/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loging-container\">\r\n    <busy-spinner></busy-spinner>\r\n    <div class=\"omb_row-sm-offset-3\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <form class=\"omb_loginForm\" autocomplete=\"off\" #f=\"ngForm\" (ngSubmit)=\"Login()\">\r\n                <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\r\n                    <input type=\"text\" class=\"form-control\" name=\"userId\" [(ngModel)]=\"id\" required placeholder=\"User ID\">\r\n                </div>\r\n\r\n                <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"fa fa-lock\"></i></span>\r\n                    <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\" required placeholder=\"Password\">\r\n                </div>\r\n                <div>\r\n                    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!f.valid\">Login</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/common/components/login/login.component.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loging-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#fff;border-radius:5px;height:100vh;}@media(min-width:768px){.loging-container .omb_row-sm-offset-3 div:first-child[class*=\"col-\"]{margin-left:10%;}}.loging-container .omb_login .omb_authTitle{margin-left:28%;line-height:300%;}.loging-container .omb_login .omb_socialButtons a{color:#fff;opacity:.9;}.loging-container .omb_login .omb_socialButtons a:hover{color:#fff;opacity:1;}.loging-container .omb_login .omb_socialButtons .omb_btn-facebook{background:#3b5998;}.loging-container .omb_login .omb_socialButtons .omb_btn-twitter{background:#00aced;}.loging-container .omb_login .omb_socialButtons .omb_btn-google{background:#c32f10;}.loging-container .omb_login .omb_loginOr{position:relative;font-size:1.5em;color:#aaa;margin-top:1em;margin-bottom:1em;padding-top:.5em;padding-bottom:.5em;}.loging-container .omb_login .omb_loginOr .omb_hrOr{background-color:#cdcdcd;height:1px;margin-top:0 !important;margin-bottom:0 !important;}.loging-container .omb_login .omb_loginOr .omb_spanOr{display:block;position:absolute;left:50%;top:-.6em;margin-left:-1.5em;background-color:#fff;width:3em;text-align:center;}.loging-container .omb_login .omb_loginForm .input-group.i{width:2em;}.loging-container .omb_login .omb_loginForm .help-block{color:#f00;}@media(min-width:768px){.loging-container .omb_login .omb_forgotPwd{text-align:right;margin-top:10px;}}.omb_loginForm div{margin-top:10px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_auth_service__ = __webpack_require__("../../../../../src/app/shared/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_model_user_model__ = __webpack_require__("../../../../../src/app/shared/model/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_components_busyspinner_busyspinner_service__ = __webpack_require__("../../../../../src/app/shared/components/busyspinner/busyspinner.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(router, authService, toastr, vcr, busySpinnerService) {
        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
        this.vcr = vcr;
        this.busySpinnerService = busySpinnerService;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__shared_model_user_model__["a" /* User */]();
        this.toastr.setRootViewContainerRef(vcr);
    }
    LoginComponent.prototype.Login = function () {
        var _this = this;
        this.busySpinnerService.dispatcher.next(true);
        this.authService.login(this.id, this.password).subscribe(function (user) {
            if (user.isAunthenticate) {
                _this.authService.isLoggedIn = true;
                _this.authService.currentUser = user;
                var redirect = _this.authService.redirectUrl ? _this.authService.redirectUrl : 'speechDashboard';
                var navigationExtras = {
                    preserveQueryParams: true,
                    preserveFragment: true
                };
                _this.router.navigate(['speechDashboard'], navigationExtras);
            }
            else {
                _this.busySpinnerService.dispatcher.next(false);
                _this.toastr.error('UserId and Password are not correct!', 'Oops!');
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login-page',
        template: __webpack_require__("../../../../../src/app/common/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/common/components/login/login.component.min.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_service_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_components_busyspinner_busyspinner_service__["a" /* BusySpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_components_busyspinner_busyspinner_service__["a" /* BusySpinnerService */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/common/components/pagenotfound/pagenotfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: '<h2>Page not found</h2>'
    })
], PageNotFoundComponent);

//# sourceMappingURL=pagenotfound.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/speech/speech.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_webApiManager_service__ = __webpack_require__("../../../../../src/app/shared/service/webApiManager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_appSettings_setting__ = __webpack_require__("../../../../../src/app/appSettings.setting.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SpeechService = SpeechService_1 = (function () {
    //TODO -- remove this Test Data Section after Web API implementation
    // Start TestData Section  
    // End TestData Section
    function SpeechService(webApiService) {
        this.webApiService = webApiService;
        this.speechCollection = null;
        this.speech = null;
        this.navigationMenu = null;
        this.dispatcher = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
    }
    //TODO -- remove this code after Web API implementation
    //public static speechesUrl = 'src/assets/speechdata.json';
    //public static navMenuUrl = 'src/assets/navigationdata.json';
    //public static speechesUrl = 'assets/speechdata.json';
    //public static navMenuUrl = 'assets/navigationdata.json';
    SpeechService.prototype.getSpeechCollection = function () {
        //TODO -- remove this code after Web API implementation
        // return Observable.of(this.testDataSpeechList).delay(10);
        // TODO -- uncomment this code after Web API implementation
        this.speechCollection = this.webApiService.get(SpeechService_1.speechesUrl);
        return this.speechCollection;
    };
    SpeechService.prototype.getSpeech = function (speechId) {
        var modifiedUrl = SpeechService_1.speechesUrl + '/' + speechId;
        this.speech = this.webApiService.get(modifiedUrl);
        return modifiedUrl;
    };
    SpeechService.prototype.AddOrUpdateSpeech = function (speech) {
        //TODO -- remove this code after Web API implementation
        //if (speech.id === undefined) {
        //    speech.id = this.generateUniqueId();
        //}
        //else {
        //    this.testDataSpeechList = this.testDataSpeechList.filter(item => item.id !== speech.id);
        //}
        //this.testDataSpeechList.push(speech);
        //return Observable.of(true).delay(10);
        //TODO -- uncomment this code after Web API implementation
        return this.webApiService.post(SpeechService_1.speechesUrl, speech);
    };
    SpeechService.prototype.AddSpeech = function (speech) {
        return this.webApiService.post(SpeechService_1.speechesUrl, speech);
    };
    SpeechService.prototype.DeleteSpeech = function (speech) {
        // this.testDataSpeechList = this.testDataSpeechList.filter(item => item.id !== speech.id);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].of(true).delay(10);
    };
    SpeechService.prototype.clearCache = function () {
        this.speechCollection = null;
        this.speech = null;
    };
    SpeechService.prototype.shareSpeech = function (userEmail, subject, content) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].of(true).delay(100);
    };
    SpeechService.prototype.getSpeechDashBoardNavigationMenu = function () {
        this.navigationMenu = this.webApiService.get(SpeechService_1.navMenuUrl);
        return this.navigationMenu;
    };
    //TODO -- remove this method after Web API implementation
    SpeechService.prototype.generateUniqueId = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return SpeechService;
}());
//TODO -- uncomment this code after Web API implementation
SpeechService.speechesUrl = __WEBPACK_IMPORTED_MODULE_2__app_appSettings_setting__["a" /* AppSettings */].BaseAPIUrl + 'speech';
SpeechService.navMenuUrl = __WEBPACK_IMPORTED_MODULE_2__app_appSettings_setting__["a" /* AppSettings */].BaseAPIUrl + 'speechMenu';
SpeechService = SpeechService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_webApiManager_service__["a" /* WebApiManager */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_webApiManager_service__["a" /* WebApiManager */]) === "function" && _a || Object])
], SpeechService);

var SpeechService_1, _a;
//# sourceMappingURL=speech.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/busyspinner/busyspinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\" *ngIf=\"busyIndicator\">Loading&#8230;</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/busyspinner/busyspinner.component.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loading{position:fixed;z-index:999;height:2em;width:2em;overflow:show;margin:auto;top:0;left:0;bottom:0;right:0;}.loading:before{content:'';display:block;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.3);}.loading:not(:required){font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0;}.loading:not(:required):after{content:'';display:block;font-size:10px;width:1em;height:1em;margin-top:-.5em;-webkit-animation:spinner 1500ms infinite linear;animation:spinner 1500ms infinite linear;border-radius:.5em;box-shadow:rgba(0,0,0,.75) 1.5em 0 0 0,rgba(0,0,0,.75) 1.1em 1.1em 0 0,rgba(0,0,0,.75) 0 1.5em 0 0,rgba(0,0,0,.75) -1.1em 1.1em 0 0,rgba(0,0,0,.75) -1.5em 0 0 0,rgba(0,0,0,.75) -1.1em -1.1em 0 0,rgba(0,0,0,.75) 0 -1.5em 0 0,rgba(0,0,0,.75) 1.1em -1.1em 0 0;}@-webkit-keyframes spinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/busyspinner/busyspinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusySpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__busyspinner_service__ = __webpack_require__("../../../../../src/app/shared/components/busyspinner/busyspinner.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BusySpinnerComponent = (function () {
    function BusySpinnerComponent(busySpinnerService) {
        this.busySpinnerService = busySpinnerService;
    }
    BusySpinnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.busySpinnerService.dispatcher.subscribe(function (val) { _this.busyIndicator = val; });
    };
    return BusySpinnerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BusySpinnerComponent.prototype, "busyIndicator", void 0);
BusySpinnerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'busy-spinner',
        template: __webpack_require__("../../../../../src/app/shared/components/busyspinner/busyspinner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/components/busyspinner/busyspinner.component.min.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__busyspinner_service__["a" /* BusySpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__busyspinner_service__["a" /* BusySpinnerService */]) === "function" && _a || Object])
], BusySpinnerComponent);

var _a;
//# sourceMappingURL=busyspinner.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/busyspinner/busyspinner.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusySpinnerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BusySpinnerService = (function () {
    function BusySpinnerService() {
        this.dispatcher = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        console.log('start BusySpinnerService');
    }
    return BusySpinnerService;
}());
BusySpinnerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], BusySpinnerService);

//# sourceMappingURL=busyspinner.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/navmenu/navmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills nav-fill\">\r\n    <li *ngFor=\"let menu of navMenus;\" class=\"nav-item navmenu\">\r\n        <a class=\"nav-link active\" (click)=\"navigate(menu.routeLink)\" [ngClass]=\"{'active': menu.routeLink==activeMenu}\">{{menu.name}}</a>\r\n    </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/navmenu/navmenu.component.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-pills .nav-link.active{color:#000;cursor:default;background-color:#17a2b8;}.nav-pills .nav-link{border:1px solid #848781;color:#000;}.navmenu{cursor:pointer;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/navmenu/navmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navmenu_service__ = __webpack_require__("../../../../../src/app/shared/components/navmenu/navmenu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_components_busyspinner_busyspinner_service__ = __webpack_require__("../../../../../src/app/shared/components/busyspinner/busyspinner.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavMenuComponent = (function () {
    function NavMenuComponent(router, navMenuService, busySpinnerService) {
        this.router = router;
        this.navMenuService = navMenuService;
        this.busySpinnerService = busySpinnerService;
    }
    NavMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navMenuService.dispatcher.subscribe(function (val) { _this.activeMenu = val; });
    };
    NavMenuComponent.prototype.navigate = function (routeName) {
        this.busySpinnerService.dispatcher.next(true);
        this.navMenuService.dispatcher.next(routeName);
        this.activeMenu = routeName;
        this.router.navigate(['speechDashboard/' + routeName]);
    };
    return NavMenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NavMenuComponent.prototype, "navMenus", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], NavMenuComponent.prototype, "activeMenu", void 0);
NavMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'nav-menu',
        template: __webpack_require__("../../../../../src/app/shared/components/navmenu/navmenu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/components/navmenu/navmenu.component.min.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__navmenu_service__["a" /* NavMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__navmenu_service__["a" /* NavMenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_components_busyspinner_busyspinner_service__["a" /* BusySpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_components_busyspinner_busyspinner_service__["a" /* BusySpinnerService */]) === "function" && _c || Object])
], NavMenuComponent);

var _a, _b, _c;
//# sourceMappingURL=navmenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/navmenu/navmenu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavMenuService = (function () {
    function NavMenuService() {
        this.dispatcher = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    return NavMenuService;
}());
NavMenuService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], NavMenuService);

//# sourceMappingURL=navmenu.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/sidemenu/sidemenu.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"navigation\" *ngIf=\"sideMenus != undefined && sideMenus.length>0\">\r\n    <div class=\"list-group leftPadding\">\r\n        <a *ngFor=\"let menu of sideMenus;\" class=\"list-group-item list-group-item-action \" [ngClass]=\"{'list-group-item-success': menu.id==activeSpeech.id}\" (click)=\"loadContent(menu)\">\r\n            {{menu.title}}<i *ngIf=\"menu.id==activeSpeech.id\" class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\r\n        </a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/sidemenu/sidemenu.component.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#navigation{font-size:.75em;margin-right:2%;padding:5px;}#navigation ul{margin:0;padding:0;}#navigation li{list-style:none;}ul.top-level{background:#fff;}ul.top-level li{margin:0 0 3px 0;border:solid 1px #ccc;border-radius:5px;}#navigation a{color:#666;cursor:pointer;display:block;height:36px;text-decoration:none;width:100%;}#navigation a:hover{text-decoration:none;}#navigation li:hover{background:#efefef;position:relative;}ul.sub-level{display:none;}li:hover .sub-level{background:#fff;border:#fff solid;border-width:1px;display:block;position:absolute;left:150px;top:5px;}ul.sub-level li{border:none;float:left;width:150px;}#navigation .list-group .list-group-item i{float:right;margin-right:-12px;font-size:16px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/sidemenu/sidemenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__features_speech_speech_service__ = __webpack_require__("../../../../../src/app/features/speech/speech.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideMenuComponent = (function () {
    function SideMenuComponent(speechService) {
        this.speechService = speechService;
    }
    SideMenuComponent.prototype.ngAfterContentChecked = function () {
    };
    SideMenuComponent.prototype.ngOnInit = function () { };
    SideMenuComponent.prototype.ngOnChanges = function (changes) {
    };
    SideMenuComponent.prototype.loadContent = function (speech) {
        this.speechService.dispatcher.next(speech);
        this.activeSpeech = speech;
    };
    return SideMenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SideMenuComponent.prototype, "sideMenus", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SideMenuComponent.prototype, "activeSpeech", void 0);
SideMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'side-menu',
        template: __webpack_require__("../../../../../src/app/shared/components/sidemenu/sidemenu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/components/sidemenu/sidemenu.component.min.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__features_speech_speech_service__["a" /* SpeechService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__features_speech_speech_service__["a" /* SpeechService */]) === "function" && _a || Object])
], SideMenuComponent);

var _a;
//# sourceMappingURL=sidemenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/model/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/service/auth.guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/shared/service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        // console.log('AuthGuard#canActivate called');
        return this.checkLogin(url);
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.prototype.canLoad = function (route) {
        var url = "/" + route.path;
        // console.log('canLoad');
        // console.log(this.authService.isLoggedIn);
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        var data = url;
        if (this.authService.isLoggedIn) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        // console.log(url);
        // Create a dummy session id
        var sessionId = 123456789;
        // Set our navigation extras object
        // that contains our global query params and fragment
        var navigationExtras = {
            queryParams: { 'session_id': sessionId },
            fragment: 'anchor'
        };
        // Navigate to the login page with extras
        this.router.navigate(['/login'], navigationExtras);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/service/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__webApiManager_service__ = __webpack_require__("../../../../../src/app/shared/service/webApiManager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appSettings_setting__ = __webpack_require__("../../../../../src/app/appSettings.setting.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = AuthService_1 = (function () {
    //TODO -- remove this Test Data Section after Web API implementation
    // Start TestData Section  
    // testUserData: Array<User> = [{ id: 1, userid: 'abhishek', password: 'sahil', email: 'abhishek.job@hotmail.com' },
    // { id: 2, userid: 'josh', password: 'rosman', email: 'sample@hotmail.com' }];
    // End TestData Section  
    function AuthService(webApiService) {
        this.webApiService = webApiService;
        this.isLoggedIn = false;
        this.userData = null;
        console.log('start AuthService');
    }
    //TODO -- remove this code after Web API implementation
    // public static loginUrl = 'src/assets/userdata.json';
    // public static navMenuUrl = 'assets/userdata.json';
    AuthService.prototype.login = function (id, password) {
        //TODO: Need to implement Actual login logic
        // return Observable.of(true).delay(1000).do(val => this.verifuser(id, password));
        var param = {
            userId: id,
            password: password
        };
        this.userData = this.webApiService.post(AuthService_1.loginUrl, param);
        return this.userData;
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
    };
    return AuthService;
}());
//TODO -- uncomment this code after Web API implementation
AuthService.loginUrl = __WEBPACK_IMPORTED_MODULE_5__appSettings_setting__["a" /* AppSettings */].BaseAPIUrl + 'login';
AuthService = AuthService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__webApiManager_service__["a" /* WebApiManager */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__webApiManager_service__["a" /* WebApiManager */]) === "function" && _a || Object])
], AuthService);

var AuthService_1, _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/service/webApiManager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebApiManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebApiManager = (function () {
    function WebApiManager(http) {
        this.http = http;
        var headerObj = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](headerObj);
        this.requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    }
    WebApiManager.prototype.post = function (url, dataToPost) {
        console.log("Angular2 - Making HTTP POST -> URL: " + url + ", with DATA: " + JSON.stringify(dataToPost));
        return this.http.post(url, dataToPost, this.requestOptions)
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebApiManager.prototype.get = function (url, getParameters) {
        if (getParameters === void 0) { getParameters = undefined; }
        console.log("Angular2 - Making HTTP GET -> URL: " + url);
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .do(function (response) { return console.log('fetched ' + url); })
            .publishReplay(1)
            .refCount()
            .catch(this.handleError);
    };
    WebApiManager.prototype.handleError = function (error) {
        // TODO - Do proper logging
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    WebApiManager.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    return WebApiManager;
}());
WebApiManager = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], WebApiManager);

var _a;
//# sourceMappingURL=webApiManager.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_navmenu_navmenu_component__ = __webpack_require__("../../../../../src/app/shared/components/navmenu/navmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_busyspinner_busyspinner_component__ = __webpack_require__("../../../../../src/app/shared/components/busyspinner/busyspinner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_sidemenu_sidemenu_component__ = __webpack_require__("../../../../../src/app/shared/components/sidemenu/sidemenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_webApiManager_service__ = __webpack_require__("../../../../../src/app/shared/service/webApiManager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_auth_guard_service__ = __webpack_require__("../../../../../src/app/shared/service/auth.guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_auth_service__ = __webpack_require__("../../../../../src/app/shared/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_navmenu_navmenu_service__ = __webpack_require__("../../../../../src/app/shared/components/navmenu/navmenu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_busyspinner_busyspinner_service__ = __webpack_require__("../../../../../src/app/shared/components/busyspinner/busyspinner.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var SharedModule = SharedModule_1 = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_8__service_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_9__service_auth_service__["a" /* AuthService */]]
        };
    };
    return SharedModule;
}());
SharedModule = SharedModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_10_ng2_toastr_ng2_toastr__["ToastModule"].forRoot()],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__components_navmenu_navmenu_component__["a" /* NavMenuComponent */], __WEBPACK_IMPORTED_MODULE_6__components_sidemenu_sidemenu_component__["a" /* SideMenuComponent */], __WEBPACK_IMPORTED_MODULE_5__components_busyspinner_busyspinner_component__["a" /* BusySpinnerComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__components_navmenu_navmenu_component__["a" /* NavMenuComponent */], __WEBPACK_IMPORTED_MODULE_6__components_sidemenu_sidemenu_component__["a" /* SideMenuComponent */], __WEBPACK_IMPORTED_MODULE_5__components_busyspinner_busyspinner_component__["a" /* BusySpinnerComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_7__service_webApiManager_service__["a" /* WebApiManager */], __WEBPACK_IMPORTED_MODULE_11__components_navmenu_navmenu_service__["a" /* NavMenuService */], __WEBPACK_IMPORTED_MODULE_12__components_busyspinner_busyspinner_service__["a" /* BusySpinnerService */]]
    })
], SharedModule);

var SharedModule_1;
//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map