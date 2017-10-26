webpackJsonp(["speech.module"],{

/***/ "../../../../../src/app/common/components/sharepeech/sharespeech.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareSpeechContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShareSpeechContent = (function () {
    function ShareSpeechContent(activeModal) {
        this.activeModal = activeModal;
    }
    return ShareSpeechContent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ShareSpeechContent.prototype, "name", void 0);
ShareSpeechContent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'share-speech-modal-content',
        template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Share Speech</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n    <form class=\"omb_loginForm\"  autocomplete=\"off\" #f=\"ngForm\" (ngSubmit)=\"shareSpeech()\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></span>\n                        <input type=\"text\" class=\"form-control\" name=\"subject\" [(ngModel)]=\"subject\" required placeholder=\"mail subject\">\n                    </div>\n                    <div class=\"input-group\" style=\"margin-top:20px;\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></span>\n                        <input type=\"text\" class=\"form-control\" name=\"useremail\" [(ngModel)]=\"userEmail\" required placeholder=\"user email\">\n                    </div>\n                    <span class=\"help-block\"></span>\n                   \n                </form>\n     \n    </div>\n    <div class=\"modal-footer\">\n    <button class=\"btn btn-sm btn-primary\" type=\"button\" [disabled]=\"!f.valid\" (click)=\"shareSpeech()\">Share</button>\n      <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"activeModal.close('Close click')\">Cancel</button>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object])
], ShareSpeechContent);

var _a;
//# sourceMappingURL=sharespeech.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/speech/components/allSpeech/allSpeech.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"speechContainer\">\r\n    <busy-spinner></busy-spinner>\r\n    <div class=\"row speechContainer-child\">\r\n        <div class=\"col-md-3 speechContainer-sidemenu\" id=\"sidemenu\" *ngIf=\"filterType !='new'\">\r\n            <form #f=\"ngForm\">\r\n                <side-menu [sideMenus]=\"speechList\" [activeSpeech]=\"activeSpeech\"></side-menu>\r\n            </form>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n        <div class=\"col-md-9 padding-top-5\" [ngClass]=\"(filterType !='new')?'col-md-9':'col-md-12'\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12 padding-none\">\r\n                    <textarea [(ngModel)]=\"activeSpeech.content\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"row padding-none padding-top-20\">\r\n                <div class=\"col-md-12  float-right padding-none\">\r\n                    <div class=\"form-inline speech-content\">\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control\" type=\"text\" name=\"Title\" placeholder=\"Title\" [(ngModel)]=\"activeSpeech.title\" />\r\n                        </div>\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control\" type=\"text\" name=\"Author\" placeholder=\"Author\" [(ngModel)]=\"activeSpeech.author\" />\r\n                        </div>\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control\" type=\"text\" name=\"keyword\" placeholder=\"Subject area keywords\" [(ngModel)]=\"activeSpeech.keywords\" />\r\n                        </div>\r\n\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control\" placeholder=\"{{valuedate | date: 'MM/dd/yyyy'}}\" datepickerPopup=\"mm-dd-yyyy\"\r\n                                   name=\"dp\" [(ngModel)]=\"activeSpeech.date\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                            <button class=\"input-group-addon\" (click)=\"d.toggle()\" type=\"button\">\r\n                                <img src=\"https://ng-bootstrap.github.io/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row command-container padding-none padding-top-20\">\r\n                <div class=\"col-md-12 padding-none\">\r\n                    <div class=\"commandButtonContainer\">\r\n                        <div *ngFor=\"let screenCommand of screenCommands\">\r\n                            <button type=\"button\"\r\n                                    class=\"{{screenCommand.class}}\"\r\n                                    (click)=\"screenCommand.handler()\"\r\n                                    [hidden]=\"screenCommand.hidden\"\r\n                                    [disabled]=\"screenCommand.disabled\">\r\n                                {{screenCommand.title}}\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/features/speech/components/allSpeech/allSpeech.component.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#speechContainer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:stretch;align-content:stretch;width:100%;height:100%;}#speechContainer textarea{background:rgba(71,207,96,.14) !important;height:275px;width:100%;}#speechContainer .speechContainer-child{width:100%;overflow-y:auto;overflow-x:hidden;margin:0 !important;padding:0;padding-top:20px;}#speechContainer .speechContainer-sidemenu{float:right;padding:0;overflow:auto;}#speechContainer .speech-content div{margin-left:15px;margin-top:5px;}#sidemenu::-webkit-scrollbar{width:.5em;height:.5em;}#sidemenu::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);}#sidemenu::-webkit-scrollbar-thumb{background-color:#ffaa3c;outline:1px solid #708090;}.textcontent{width:calc(-50%);min-height:275px;overflow:auto;}.commandButtonContainer{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;float:right;margin-right:5px;margin-top:10px;}.commandButtonContainer div{margin-left:10px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/speech/components/allSpeech/allSpeech.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllSpeechComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__speechComponentBase__ = __webpack_require__("../../../../../src/app/features/speech/speechComponentBase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__speech_service__ = __webpack_require__("../../../../../src/app/features/speech/speech.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_auth_service__ = __webpack_require__("../../../../../src/app/shared/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_components_busyspinner_busyspinner_service__ = __webpack_require__("../../../../../src/app/shared/components/busyspinner/busyspinner.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AllSpeechComponent = (function (_super) {
    __extends(AllSpeechComponent, _super);
    function AllSpeechComponent(router, route, modalService, speechService, authService, busySpinnerService) {
        var _this = _super.call(this, modalService, route, speechService, authService, busySpinnerService) || this;
        _this.router = router;
        _this.route = route;
        _this.modalService = modalService;
        _this.speechService = speechService;
        _this.authService = authService;
        _this.busySpinnerService = busySpinnerService;
        _this.requestType = 'all';
        _this.buildUICommand();
        return _this;
    }
    AllSpeechComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterType = this.requestType;
        this.getSpeechListCollection(this.requestType);
        this.speechService.dispatcher.subscribe(function (val) { _this.activeSpeech = val; });
        console.log(this.activeSpeech);
    };
    AllSpeechComponent.prototype.buildUICommand = function () {
        var _this = this;
        this.screenCommands.push({
            disabled: true, hidden: false, title: 'Delete', class: 'btn btn-danger  buttonSmall',
            handler: function () {
            }
        });
        this.screenCommands.push({
            disabled: true, hidden: false, title: 'Save', class: 'btn btn-success  buttonSmall',
            handler: function () {
            }
        });
        this.screenCommands.push({
            disabled: false, hidden: false, title: 'Share', class: 'btn btn-primary  buttonSmall',
            handler: function () {
                _this.openShareModel();
            }
        });
    };
    return AllSpeechComponent;
}(__WEBPACK_IMPORTED_MODULE_2__speechComponentBase__["a" /* SpeechComponentBase */]));
AllSpeechComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'speech-page',
        template: __webpack_require__("../../../../../src/app/features/speech/components/allSpeech/allSpeech.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/speech/components/allSpeech/allSpeech.component.min.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__speech_service__["a" /* SpeechService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__speech_service__["a" /* SpeechService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service_auth_service__["a" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared_components_busyspinner_busyspinner_service__["a" /* BusySpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_components_busyspinner_busyspinner_service__["a" /* BusySpinnerService */]) === "function" && _f || Object])
], AllSpeechComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=allSpeech.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/speech/components/newSpeech/newSpeech.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"speechContainer\">\r\n    <busy-spinner></busy-spinner>\r\n    <div class=\"row speechContainer-child\">\r\n        <div class=\"col-md-3 speechContainer-sidemenu\" id=\"sidemenu\" *ngIf=\"filterType !='new'\">\r\n            <form #f=\"ngForm\">\r\n                <side-menu [sideMenus]=\"speechList\" [activeSpeech]=\"activeSpeech\"></side-menu>\r\n            </form>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n        <div class=\"col-md-9 padding-top-5\" [ngClass]=\"(filterType !='new')?'col-md-9':'col-md-12'\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12 padding-none\">\r\n                    <textarea [(ngModel)]=\"activeSpeech.content\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"row padding-none padding-top-20\">\r\n                <div class=\"col-md-12  float-right padding-none\">\r\n                    <div class=\"form-inline speech-content\">\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control\" type=\"text\" name=\"Title\" placeholder=\"Title\" [(ngModel)]=\"activeSpeech.title\" />\r\n                        </div>\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control\" type=\"text\" name=\"Author\" placeholder=\"Author\" [(ngModel)]=\"activeSpeech.author\" />\r\n                        </div>\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control\" type=\"text\" name=\"keyword\" placeholder=\"Subject area keywords\" [(ngModel)]=\"activeSpeech.keywords\" />\r\n                        </div>\r\n\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control\" placeholder=\"{{valuedate | date: 'MM/dd/yyyy'}}\" datepickerPopup=\"mm-dd-yyyy\"\r\n                                   name=\"dp\" [(ngModel)]=\"activeSpeech.date\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                            <button class=\"input-group-addon\" (click)=\"d.toggle()\" type=\"button\">\r\n                                <img src=\"https://ng-bootstrap.github.io/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row command-container padding-none padding-top-20\">\r\n                <div class=\"col-md-12 padding-none\">\r\n                    <div class=\"commandButtonContainer\">\r\n                        <div *ngFor=\"let screenCommand of screenCommands\">\r\n                            <button type=\"button\"\r\n                                    class=\"{{screenCommand.class}}\"\r\n                                    (click)=\"screenCommand.handler()\"\r\n                                    [hidden]=\"screenCommand.hidden\"\r\n                                    [disabled]=\"screenCommand.disabled\">\r\n                                {{screenCommand.title}}\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/features/speech/components/newSpeech/newSpeech.component.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#speechContainer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:stretch;align-content:stretch;width:100%;height:100%;}#speechContainer textarea{background:rgba(71,207,96,.14) !important;height:275px;width:100%;}#speechContainer .speechContainer-child{width:100%;overflow-y:auto;overflow-x:hidden;margin:0 !important;padding:0;padding-top:20px;}#speechContainer .speechContainer-sidemenu{float:right;padding:0;overflow:auto;}#speechContainer .speech-content div{margin-left:15px;margin-top:5px;}#sidemenu::-webkit-scrollbar{width:.5em;height:.5em;}#sidemenu::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);}#sidemenu::-webkit-scrollbar-thumb{background-color:#ffaa3c;outline:1px solid #708090;}.textcontent{width:calc(-50%);min-height:275px;overflow:auto;}.commandButtonContainer{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;float:right;margin-right:5px;margin-top:10px;}.commandButtonContainer div{margin-left:10px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/speech/components/newSpeech/newSpeech.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewSpeechComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__speechComponentBase__ = __webpack_require__("../../../../../src/app/features/speech/speechComponentBase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__speech_service__ = __webpack_require__("../../../../../src/app/features/speech/speech.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_service_auth_service__ = __webpack_require__("../../../../../src/app/shared/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_components_navmenu_navmenu_service__ = __webpack_require__("../../../../../src/app/shared/components/navmenu/navmenu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_components_busyspinner_busyspinner_service__ = __webpack_require__("../../../../../src/app/shared/components/busyspinner/busyspinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__model_speech_model__ = __webpack_require__("../../../../../src/app/features/speech/model/speech.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var NewSpeechComponent = (function (_super) {
    __extends(NewSpeechComponent, _super);
    function NewSpeechComponent(router, route, modalService, speechService, toastr, vcr, authService, navMenuService, busySpinnerService) {
        var _this = _super.call(this, modalService, route, speechService, authService, busySpinnerService) || this;
        _this.router = router;
        _this.route = route;
        _this.modalService = modalService;
        _this.speechService = speechService;
        _this.toastr = toastr;
        _this.vcr = vcr;
        _this.authService = authService;
        _this.navMenuService = navMenuService;
        _this.busySpinnerService = busySpinnerService;
        _this.requestType = 'new';
        _this.toastr.setRootViewContainerRef(vcr);
        _this.buildUICommand();
        return _this;
    }
    NewSpeechComponent.prototype.ngOnInit = function () {
        this.filterType = this.requestType;
    };
    NewSpeechComponent.prototype.buildUICommand = function () {
        var _this = this;
        this.screenCommands.push({
            disabled: true, hidden: false, title: 'Delete', class: 'btn btn-danger  buttonSmall',
            handler: function () {
            }
        });
        this.screenCommands.push({
            disabled: false, hidden: false, title: 'Save', class: 'btn btn-success  buttonSmall',
            handler: function () {
                _this.activeSpeech.userId = _this.authService.currentUser.id;
                _this.busySpinnerService.dispatcher.next(true);
                _this.speechService.AddOrUpdateSpeech(_this.activeSpeech).subscribe(function () {
                    _this.toastr.success('Your speech saved successfully!', 'Success!');
                    _this.activeSpeech = new __WEBPACK_IMPORTED_MODULE_9__model_speech_model__["a" /* Speech */]();
                    //TODO -- If want to redirect default page after saved then uncomment this code
                    // this.navMenuService.dispatcher.next('userspeech');
                    //  this.router.navigate(['speechDashboard/userspeech']);
                    _this.busySpinnerService.dispatcher.next(false);
                });
            }
        });
        this.screenCommands.push({
            disabled: true, hidden: false, title: 'Share', class: 'btn btn-primary  buttonSmall',
            handler: function () {
                _this.openShareModel();
            }
        });
    };
    return NewSpeechComponent;
}(__WEBPACK_IMPORTED_MODULE_2__speechComponentBase__["a" /* SpeechComponentBase */]));
NewSpeechComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'speech-page',
        template: __webpack_require__("../../../../../src/app/features/speech/components/newSpeech/newSpeech.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/speech/components/newSpeech/newSpeech.component.min.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__speech_service__["a" /* SpeechService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__speech_service__["a" /* SpeechService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__shared_service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_service_auth_service__["a" /* AuthService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__shared_components_navmenu_navmenu_service__["a" /* NavMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_components_navmenu_navmenu_service__["a" /* NavMenuService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_8__shared_components_busyspinner_busyspinner_service__["a" /* BusySpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared_components_busyspinner_busyspinner_service__["a" /* BusySpinnerService */]) === "function" && _j || Object])
], NewSpeechComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=newSpeech.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/speech/components/selfSpeech/selfSpeech.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"speechContainer\">\r\n    <busy-spinner></busy-spinner>\r\n    <div class=\"row speechContainer-child\">\r\n        <div class=\"col-md-3 speechContainer-sidemenu\" id=\"sidemenu\" *ngIf=\"filterType !='new'\">\r\n            <form #f=\"ngForm\">\r\n                <side-menu [sideMenus]=\"speechList\" [activeSpeech]=\"activeSpeech\"></side-menu>\r\n            </form>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n        <div class=\"col-md-9 padding-top-5\" [ngClass]=\"(filterType !='new')?'col-md-9':'col-md-12'\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12 padding-none\">\r\n                    <textarea [(ngModel)]=\"activeSpeech.content\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"row padding-none padding-top-20\">\r\n                <div class=\"col-md-12  float-right padding-none\">\r\n                    <div class=\"form-inline speech-content\">\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control\" type=\"text\" name=\"Title\" placeholder=\"Title\" [(ngModel)]=\"activeSpeech.title\" />\r\n                        </div>\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control\" type=\"text\" name=\"Author\" placeholder=\"Author\" [(ngModel)]=\"activeSpeech.author\" />\r\n                        </div>\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control\" type=\"text\" name=\"keyword\" placeholder=\"Subject area keywords\" [(ngModel)]=\"activeSpeech.keywords\" />\r\n                        </div>\r\n\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control\" placeholder=\"{{valuedate | date: 'MM/dd/yyyy'}}\" datepickerPopup=\"mm-dd-yyyy\"\r\n                                   name=\"dp\" [(ngModel)]=\"activeSpeech.date\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                            <button class=\"input-group-addon\" (click)=\"d.toggle()\" type=\"button\">\r\n                                <img src=\"https://ng-bootstrap.github.io/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row command-container padding-none padding-top-20\">\r\n                <div class=\"col-md-12 padding-none\">\r\n                    <div class=\"commandButtonContainer\">\r\n                        <div *ngFor=\"let screenCommand of screenCommands\">\r\n                            <button type=\"button\"\r\n                                    class=\"{{screenCommand.class}}\"\r\n                                    (click)=\"screenCommand.handler()\"\r\n                                    [hidden]=\"screenCommand.hidden\"\r\n                                    [disabled]=\"screenCommand.disabled\">\r\n                                {{screenCommand.title}}\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/features/speech/components/selfSpeech/selfSpeech.component.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#speechContainer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:stretch;align-content:stretch;width:100%;height:100%;}#speechContainer textarea{background:rgba(71,207,96,.14) !important;height:275px;width:100%;}#speechContainer .speechContainer-child{width:100%;overflow-y:auto;overflow-x:hidden;margin:0 !important;padding:0;padding-top:20px;}#speechContainer .speechContainer-sidemenu{float:right;padding:0;overflow:auto;}#speechContainer .speech-content div{margin-left:15px;margin-top:5px;}#sidemenu::-webkit-scrollbar{width:.5em;height:.5em;}#sidemenu::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);}#sidemenu::-webkit-scrollbar-thumb{background-color:#ffaa3c;outline:1px solid #708090;}.textcontent{width:calc(-50%);min-height:275px;overflow:auto;}.commandButtonContainer{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;float:right;margin-right:5px;margin-top:10px;}.commandButtonContainer div{margin-left:10px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/speech/components/selfSpeech/selfSpeech.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelfSpeechComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__speechComponentBase__ = __webpack_require__("../../../../../src/app/features/speech/speechComponentBase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__speech_service__ = __webpack_require__("../../../../../src/app/features/speech/speech.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_service_auth_service__ = __webpack_require__("../../../../../src/app/shared/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_components_busyspinner_busyspinner_service__ = __webpack_require__("../../../../../src/app/shared/components/busyspinner/busyspinner.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SelfSpeechComponent = (function (_super) {
    __extends(SelfSpeechComponent, _super);
    function SelfSpeechComponent(router, modalService, route, speechService, toastr, vcr, authService, busySpinnerService) {
        var _this = _super.call(this, modalService, route, speechService, authService, busySpinnerService) || this;
        _this.router = router;
        _this.modalService = modalService;
        _this.route = route;
        _this.speechService = speechService;
        _this.toastr = toastr;
        _this.vcr = vcr;
        _this.authService = authService;
        _this.busySpinnerService = busySpinnerService;
        _this.requestType = 'user';
        _this.toastr.setRootViewContainerRef(vcr);
        _this.buildUICommand();
        return _this;
    }
    SelfSpeechComponent.prototype.ngOnInit = function () {
        this.filterType = this.requestType;
        this.getSpeechCollection();
    };
    SelfSpeechComponent.prototype.getSpeechCollection = function () {
        var _this = this;
        this.getSpeechListCollection(this.requestType);
        this.speechService.dispatcher.subscribe(function (val) { _this.activeSpeech = val; });
    };
    SelfSpeechComponent.prototype.buildUICommand = function () {
        var _this = this;
        this.screenCommands = [];
        this.screenCommands.push({
            disabled: false, hidden: false, title: 'Delete', class: 'btn btn-danger  buttonSmall',
            handler: function () {
                _this.busySpinnerService.dispatcher.next(true);
                _this.speechService.DeleteSpeech(_this.activeSpeech).subscribe(function () {
                    _this.toastr.success('Your speech deleted successfully!', 'Success!');
                    _this.getSpeechCollection();
                    _this.busySpinnerService.dispatcher.next(false);
                });
            }
        });
        this.screenCommands.push({
            disabled: false, hidden: false, title: 'Save', class: 'btn btn-success  buttonSmall',
            handler: function () {
                _this.busySpinnerService.dispatcher.next(true);
                _this.speechService.AddOrUpdateSpeech(_this.activeSpeech).subscribe(function () {
                    _this.toastr.success('Your speech saved successfully!', 'Success!');
                    _this.getSpeechCollection();
                    _this.busySpinnerService.dispatcher.next(false);
                });
            }
        });
        this.screenCommands.push({
            disabled: false, hidden: false, title: 'Share', class: 'btn btn-primary  buttonSmall',
            handler: function () {
                _this.openShareModel();
            }
        });
    };
    return SelfSpeechComponent;
}(__WEBPACK_IMPORTED_MODULE_2__speechComponentBase__["a" /* SpeechComponentBase */]));
SelfSpeechComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'speech-page',
        template: __webpack_require__("../../../../../src/app/features/speech/components/selfSpeech/selfSpeech.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/speech/components/selfSpeech/selfSpeech.component.min.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__speech_service__["a" /* SpeechService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__speech_service__["a" /* SpeechService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__shared_service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_service_auth_service__["a" /* AuthService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__shared_components_busyspinner_busyspinner_service__["a" /* BusySpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_components_busyspinner_busyspinner_service__["a" /* BusySpinnerService */]) === "function" && _h || Object])
], SelfSpeechComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=selfSpeech.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/speech/components/speechDashboard/speechDashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flexbox-parent\">\r\n    <div class=\"flexbox-item header\">\r\n        <nav-menu [navMenus]=\"navMenusCollection\" [activeMenu]=\"activeMenu\"></nav-menu>\r\n    </div>\r\n\r\n    <div class=\"flexbox-item fill-area content flexbox-item-grow\">\r\n        <div class=\"fill-area-content flexbox-item-grow\" style=\"position:relative;padding:0;\">\r\n            <div class=\"flexbox-parent\" style=\"position:absolute;\">\r\n                <div class=\"flexbox-item fill-area content flexbox-item-grow\" style=\"padding:0;\">\r\n                    <div class=\"fill-area-content flexbox-item-grow\">\r\n                        <router-outlet></router-outlet>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"flexbox-item footer\">\r\n        Powered by Abhishek @firstcrazydeveloper.com\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/features/speech/components/speechDashboard/speechDashboard.component.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".speech-dashboard-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;background:#fff;border-radius:5px;height:100%;}.dashboardContentContainer{height:95%;}#speechDashBoardContainer{padding-top:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:100vh;width:calc(100%);}#speechmenu{background:#99c;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:calc(100%);}#speechcontent{background:#9c9;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;width:calc(100%);}html,body{width:100%;height:100%;}.flexbox-parent{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column wrap;flex-flow:column wrap;width:100%;height:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:stretch;align-content:stretch;}.flexbox-item{padding:8px;}.flexbox-item-grow{-webkit-box-flex:1;-ms-flex:1;flex:1;}.fill-area{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:stretch;align-content:stretch;width:100%;height:100%;}.fill-area-content{width:100%;height:100%;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/speech/components/speechDashboard/speechDashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__speech_service__ = __webpack_require__("../../../../../src/app/features/speech/speech.service.ts");
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




var SpeechDashboardComponent = (function () {
    function SpeechDashboardComponent(modalService, speechService, busySpinnerService) {
        this.modalService = modalService;
        this.speechService = speechService;
        this.busySpinnerService = busySpinnerService;
    }
    SpeechDashboardComponent.prototype.ngOnInit = function () {
        this.getNavMenusCollection();
    };
    SpeechDashboardComponent.prototype.getNavMenusCollection = function () {
        var _this = this;
        this.busySpinnerService.dispatcher.next(true);
        this.speechService.getSpeechDashBoardNavigationMenu()
            .subscribe(function (navmenus) {
            _this.navMenusCollection = navmenus;
            _this.activeMenu = _this.navMenusCollection[0].routeLink;
            _this.busySpinnerService.dispatcher.next(false);
        });
    };
    return SpeechDashboardComponent;
}());
SpeechDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'speech-dashboard',
        template: __webpack_require__("../../../../../src/app/features/speech/components/speechDashboard/speechDashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/speech/components/speechDashboard/speechDashboard.component.min.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__speech_service__["a" /* SpeechService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__speech_service__["a" /* SpeechService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_components_busyspinner_busyspinner_service__["a" /* BusySpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_components_busyspinner_busyspinner_service__["a" /* BusySpinnerService */]) === "function" && _c || Object])
], SpeechDashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=speechDashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/speech/model/speech.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Speech; });
var Speech = (function () {
    function Speech() {
    }
    return Speech;
}());

//# sourceMappingURL=speech.model.js.map

/***/ }),

/***/ "../../../../../src/app/features/speech/speech.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechModule", function() { return SpeechModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__speech_routing__ = __webpack_require__("../../../../../src/app/features/speech/speech.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_speechDashboard_speechDashboard_component__ = __webpack_require__("../../../../../src/app/features/speech/components/speechDashboard/speechDashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_selfSpeech_selfSpeech_component__ = __webpack_require__("../../../../../src/app/features/speech/components/selfSpeech/selfSpeech.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_newSpeech_newSpeech_component__ = __webpack_require__("../../../../../src/app/features/speech/components/newSpeech/newSpeech.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_allSpeech_allSpeech_component__ = __webpack_require__("../../../../../src/app/features/speech/components/allSpeech/allSpeech.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_components_sharepeech_sharespeech_component__ = __webpack_require__("../../../../../src/app/common/components/sharepeech/sharespeech.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__speech_service__ = __webpack_require__("../../../../../src/app/features/speech/speech.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var SpeechModule = (function () {
    function SpeechModule() {
    }
    return SpeechModule;
}());
SpeechModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_5__speech_routing__["a" /* speechRouting */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_7__components_speechDashboard_speechDashboard_component__["a" /* SpeechDashboardComponent */], __WEBPACK_IMPORTED_MODULE_8__components_selfSpeech_selfSpeech_component__["a" /* SelfSpeechComponent */], __WEBPACK_IMPORTED_MODULE_9__components_newSpeech_newSpeech_component__["a" /* NewSpeechComponent */], __WEBPACK_IMPORTED_MODULE_10__components_allSpeech_allSpeech_component__["a" /* AllSpeechComponent */], __WEBPACK_IMPORTED_MODULE_11__common_components_sharepeech_sharespeech_component__["a" /* ShareSpeechContent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_7__components_speechDashboard_speechDashboard_component__["a" /* SpeechDashboardComponent */], __WEBPACK_IMPORTED_MODULE_8__components_selfSpeech_selfSpeech_component__["a" /* SelfSpeechComponent */], __WEBPACK_IMPORTED_MODULE_9__components_newSpeech_newSpeech_component__["a" /* NewSpeechComponent */], __WEBPACK_IMPORTED_MODULE_10__components_allSpeech_allSpeech_component__["a" /* AllSpeechComponent */], __WEBPACK_IMPORTED_MODULE_11__common_components_sharepeech_sharespeech_component__["a" /* ShareSpeechContent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_11__common_components_sharepeech_sharespeech_component__["a" /* ShareSpeechContent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_12__speech_service__["a" /* SpeechService */]]
    })
], SpeechModule);

//# sourceMappingURL=speech.module.js.map

/***/ }),

/***/ "../../../../../src/app/features/speech/speech.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return speechRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_speechDashboard_speechDashboard_component__ = __webpack_require__("../../../../../src/app/features/speech/components/speechDashboard/speechDashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_selfSpeech_selfSpeech_component__ = __webpack_require__("../../../../../src/app/features/speech/components/selfSpeech/selfSpeech.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_newSpeech_newSpeech_component__ = __webpack_require__("../../../../../src/app/features/speech/components/newSpeech/newSpeech.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_allSpeech_allSpeech_component__ = __webpack_require__("../../../../../src/app/features/speech/components/allSpeech/allSpeech.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_auth_guard_service__ = __webpack_require__("../../../../../src/app/shared/service/auth.guard.service.ts");






var speechRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__components_speechDashboard_speechDashboard_component__["a" /* SpeechDashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_service_auth_guard_service__["a" /* AuthGuard */]],
        children: [
            {
                path: '',
                children: [
                    {
                        path: '',
                        canActivateChild: [__WEBPACK_IMPORTED_MODULE_5__shared_service_auth_guard_service__["a" /* AuthGuard */]],
                        component: __WEBPACK_IMPORTED_MODULE_2__components_selfSpeech_selfSpeech_component__["a" /* SelfSpeechComponent */]
                    },
                    { path: 'allspeech', component: __WEBPACK_IMPORTED_MODULE_4__components_allSpeech_allSpeech_component__["a" /* AllSpeechComponent */] },
                    { path: 'newspeech', component: __WEBPACK_IMPORTED_MODULE_3__components_newSpeech_newSpeech_component__["a" /* NewSpeechComponent */] },
                    { path: 'userspeech', component: __WEBPACK_IMPORTED_MODULE_2__components_selfSpeech_selfSpeech_component__["a" /* SelfSpeechComponent */] }
                ]
            }
        ]
    }
];
var speechRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(speechRoutes);
//# sourceMappingURL=speech.routing.js.map

/***/ }),

/***/ "../../../../../src/app/features/speech/speechComponentBase.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechComponentBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_components_sharepeech_sharespeech_component__ = __webpack_require__("../../../../../src/app/common/components/sharepeech/sharespeech.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_speech_model__ = __webpack_require__("../../../../../src/app/features/speech/model/speech.model.ts");


var SpeechComponentBase = (function () {
    function SpeechComponentBase(modalService, route, speechService, authService, busySpinnerService) {
        var _this = this;
        this.modalService = modalService;
        this.route = route;
        this.speechService = speechService;
        this.authService = authService;
        this.busySpinnerService = busySpinnerService;
        this.speechList = [];
        this.activeSpeech = new __WEBPACK_IMPORTED_MODULE_1__model_speech_model__["a" /* Speech */]();
        this.screenCommands = [];
        this.route.url.forEach(function (segments) {
            _this.activeMenu = segments.join("/");
        });
    }
    SpeechComponentBase.prototype.getSpeechListCollection = function (requestType) {
        this.busySpinnerService.dispatcher.next(true);
        var currentUser = this.authService.currentUser;
        if (requestType == 'all') {
            this.getAllSpeechCollection();
        }
        else {
            this.getUserSpecificSpeechCollection(currentUser.id);
        }
    };
    SpeechComponentBase.prototype.getUserSpecificSpeechCollection = function (id) {
        var _this = this;
        this.speechService.getSpeechCollection()
            .subscribe(function (speechlist) {
            _this.speechList = speechlist.filter(function (d) { return d.userId === id; });
            _this.activeSpeech = _this.speechList[0];
            _this.busySpinnerService.dispatcher.next(false);
        });
    };
    SpeechComponentBase.prototype.getAllSpeechCollection = function () {
        var _this = this;
        this.speechService.getSpeechCollection()
            .subscribe(function (speechlist) {
            _this.speechList = speechlist;
            _this.activeSpeech = _this.speechList[0];
            _this.busySpinnerService.dispatcher.next(false);
        });
    };
    SpeechComponentBase.prototype.openShareModel = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_0__common_components_sharepeech_sharespeech_component__["a" /* ShareSpeechContent */]);
        modalRef.componentInstance.name = 'World';
    };
    return SpeechComponentBase;
}());

//# sourceMappingURL=speechComponentBase.js.map

/***/ })

});
//# sourceMappingURL=speech.module.chunk.js.map