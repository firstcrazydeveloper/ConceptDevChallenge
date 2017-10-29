webpackJsonp(["speech.module"],{

/***/ "../../../../../src/app/common/components/sharepeech/sharespeech.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareSpeechContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_mail_service__ = __webpack_require__("../../../../../src/app/shared/service/mail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_model_mail_model__ = __webpack_require__("../../../../../src/app/shared/model/mail.model.ts");
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






var ShareSpeechContent = (function () {
    function ShareSpeechContent(activeModal, mailService, toastr, vcr, busySpinnerService) {
        this.activeModal = activeModal;
        this.mailService = mailService;
        this.toastr = toastr;
        this.vcr = vcr;
        this.busySpinnerService = busySpinnerService;
        this.isMailSending = false;
        this.toastr.setRootViewContainerRef(vcr);
    }
    ShareSpeechContent.prototype.shareSpeech = function () {
        var _this = this;
        this.isMailSending = true;
        var mailData = new __WEBPACK_IMPORTED_MODULE_4__shared_model_mail_model__["a" /* Mail */]();
        mailData.content = this.content;
        mailData.email = this.userEmail;
        mailData.subject = this.subject;
        this.mailService.sendMail(mailData).subscribe(function () {
            _this.isMailSending = false;
            _this.toastr.success('Your speech shared successfully!', 'Success!');
            _this.handler(_this.activeModal);
        });
    };
    return ShareSpeechContent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ShareSpeechContent.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ShareSpeechContent.prototype, "handler", void 0);
ShareSpeechContent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'share-speech-modal-content',
        template: " <busy-spinner [busyIndicator]=\"isMailSending\"></busy-spinner>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Share Speech</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n    <form class=\"omb_loginForm\"  autocomplete=\"off\" #f=\"ngForm\" (ngSubmit)=\"shareSpeech()\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></span>\n                        <input type=\"text\" class=\"form-control\" name=\"subject\" [(ngModel)]=\"subject\" required placeholder=\"mail subject\">\n                    </div>\n                    <div class=\"input-group\" style=\"margin-top:20px;\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></span>\n                        <input type=\"text\" class=\"form-control\" name=\"useremail\" [(ngModel)]=\"userEmail\" required placeholder=\"user email\">\n                    </div>\n                    <span class=\"help-block\"></span>\n                   \n                </form>\n     \n    </div>\n    <div class=\"modal-footer\">\n    <button class=\"btn btn-sm btn-primary\" type=\"button\" [disabled]=\"!f.valid\" (click)=\"shareSpeech()\">Share</button>\n      <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"activeModal.close('Close click')\">Cancel</button>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_service_mail_service__["a" /* MailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_service_mail_service__["a" /* MailService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_components_busyspinner_busyspinner_service__["a" /* BusySpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_components_busyspinner_busyspinner_service__["a" /* BusySpinnerService */]) === "function" && _e || Object])
], ShareSpeechContent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=sharespeech.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/speech/components/allSpeech/allSpeech.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"speechContainer\">\r\n    <busy-spinner [busyIndicator]=\"isActiveSpeechLoading\"></busy-spinner>\r\n    <div class=\"row speechContainer-child\">\r\n        <div class=\"col-md-3 speechContainer-sidemenu\" id=\"sidemenu\" *ngIf=\"filterType !='new'\">\r\n            <form #f=\"ngForm\">\r\n                <side-menu [sideMenus]=\"speechList\" [activeSpeech]=\"activeSpeech\"></side-menu>\r\n            </form>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n        <div class=\"col-md-9 padding-top-5\" [ngClass]=\"(filterType !='new')?'col-md-9':'col-md-12'\" *ngIf=\"isActiveSpeech && !isActiveSpeechLoading\">\r\n            <speech [screenCommands]=\"screenCommands\"  [activeSpeech]=\"activeSpeech\"></speech>\r\n        </div>\r\n        <div class=\"col-md-9 padding-top-5\" [ngClass]=\"(filterType !='new')?'col-md-9':'col-md-12'\" *ngIf=\"!isActiveSpeech && !isActiveSpeechLoading\">\r\n            <strong> No any speech is submitted by any users,  submit a new speech.</strong>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/features/speech/components/allSpeech/allSpeech.component.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#speechContainer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:stretch;align-content:stretch;width:100%;height:100%;}#speechContainer .speechContainer-child{width:100%;overflow-y:auto;overflow-x:hidden;margin:0 !important;padding:0;padding-top:20px;}#speechContainer .btn-primary:not([disabled]):not(.disabled).active,#speechContainer .btn-primary:not([disabled]):not(.disabled):active,#speechContainer .show>.btn-primary.dropdown-toggle{color:#fff;background-color:#2c3842;border-color:#2c3842;box-shadow:0 0 0 .2rem #1b242b;cursor:pointer;}#speechContainer .btn-primary{color:#fff;background-color:#6e7a87;border-color:#2c3842;box-shadow:0 0 0 .2rem #1b242b);}#speechContainer .btn-primary:hover{color:#fff;background-color:#2c3842;border-color:#6e7a87;box-shadow:0 0 0 .2rem #1b242b);}#speechContainer .btn-primary.disabled,#speechContainer .btn-primary:disabled{background-color:#b1b3b5;border-color:#b1b3b5;cursor:none;}#speechContainer .btn-primary.disabled:hover,#speechContainer .btn-primary:disabled:hover{background-color:#b1b3b5;border-color:#b1b3b5;cursor:none;}", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__speech_service__ = __webpack_require__("../../../../../src/app/features/speech/speech.service.ts");
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








var AllSpeechComponent = (function (_super) {
    __extends(AllSpeechComponent, _super);
    function AllSpeechComponent(router, route, modalService, speechService, authService, busySpinnerService, toastr) {
        var _this = _super.call(this, modalService, route, speechService, authService, busySpinnerService, toastr) || this;
        _this.router = router;
        _this.route = route;
        _this.modalService = modalService;
        _this.speechService = speechService;
        _this.authService = authService;
        _this.busySpinnerService = busySpinnerService;
        _this.toastr = toastr;
        _this.requestType = 'all';
        _this.buildUICommand();
        return _this;
    }
    AllSpeechComponent.prototype.ngOnInit = function () {
        this.busySpinnerService.dispatcher.next(true);
        this.isActiveSpeechLoading = true;
        this.filterType = this.requestType;
        this.getSpeechCollection();
    };
    AllSpeechComponent.prototype.getSpeechCollection = function () {
        var _this = this;
        this.getSpeechListCollection(this.requestType);
        this.speechService.dispatcher.subscribe(function (val) {
            if (val.id !== undefined) {
                _this.isActiveSpeech = true;
            }
            else {
                _this.isActiveSpeech = false;
            }
            _this.activeSpeech = val;
            _this.isActiveSpeechLoading = false;
            _this.busySpinnerService.dispatcher.next(false);
        });
    };
    AllSpeechComponent.prototype.buildUICommand = function () {
        var _this = this;
        this.screenCommands.push({
            disabled: true, hidden: false, title: 'Delete', class: 'btn btn-primary  buttonSmall',
            handler: function () {
            }
        });
        this.screenCommands.push({
            disabled: true, hidden: false, title: 'Update', class: 'btn btn-primary  buttonSmall',
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
    AllSpeechComponent.prototype.successToaster = function (msg) {
        this.toastr.success(msg, 'Success!');
    };
    return AllSpeechComponent;
}(__WEBPACK_IMPORTED_MODULE_2__speechComponentBase__["a" /* SpeechComponentBase */]));
AllSpeechComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'speech-page',
        template: __webpack_require__("../../../../../src/app/features/speech/components/allSpeech/allSpeech.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/speech/components/allSpeech/allSpeech.component.min.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__speech_service__["a" /* SpeechService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__speech_service__["a" /* SpeechService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__shared_service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_service_auth_service__["a" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__shared_components_busyspinner_busyspinner_service__["a" /* BusySpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_components_busyspinner_busyspinner_service__["a" /* BusySpinnerService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _g || Object])
], AllSpeechComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=allSpeech.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/speech/components/newSpeech/newSpeech.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"speechContainer\">\r\n    <busy-spinner></busy-spinner>\r\n    <div class=\"row speechContainer-child\">\r\n        <div class=\"col-md-12 padding-top-5\">\r\n            <speech [screenCommands]=\"screenCommands\" [activeSpeech]=\"activeSpeech\"></speech>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/features/speech/components/newSpeech/newSpeech.component.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#speechContainer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:stretch;align-content:stretch;width:100%;height:100%;}#speechContainer .speechContainer-child{width:100%;overflow-y:auto;overflow-x:hidden;margin:0 !important;padding:0;padding-top:20px;}#speechContainer .btn-primary:not([disabled]):not(.disabled).active,#speechContainer .btn-primary:not([disabled]):not(.disabled):active,#speechContainer .show>.btn-primary.dropdown-toggle{color:#fff;background-color:#2c3842;border-color:#2c3842;box-shadow:0 0 0 .2rem #1b242b;cursor:pointer;}#speechContainer .btn-primary{color:#fff;background-color:#6e7a87;border-color:#2c3842;box-shadow:0 0 0 .2rem #1b242b);cursor:pointer;}#speechContainer .btn-primary:hover{color:#fff;background-color:#2c3842;border-color:#6e7a87;box-shadow:0 0 0 .2rem #1b242b);}#speechContainer .btn-primary.disabled,#speechContainer .btn-primary:disabled{background-color:#b1b3b5;border-color:#b1b3b5;cursor:none;}#speechContainer .btn-primary.disabled:hover,#speechContainer .btn-primary:disabled:hover{background-color:#b1b3b5;border-color:#b1b3b5;cursor:none;}", ""]);

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
    function NewSpeechComponent(router, changedetectorref, route, modalService, speechService, toastr, vcr, authService, navMenuService, busySpinnerService) {
        var _this = _super.call(this, modalService, route, speechService, authService, busySpinnerService, toastr) || this;
        _this.router = router;
        _this.changedetectorref = changedetectorref;
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
        _this.changedetector = changedetectorref;
        return _this;
    }
    NewSpeechComponent.prototype.ngOnInit = function () {
        this.filterType = this.requestType;
        this.activeSpeech = new __WEBPACK_IMPORTED_MODULE_9__model_speech_model__["a" /* Speech */]();
        this.activeSpeech.createdOn = moment().format("YYYY-MM-DD");
        this.changedetector.detectChanges();
        // alert(this.valuedate);
    };
    NewSpeechComponent.prototype.ngOnChanges = function (changes) {
        console.log('start change');
        for (var propName in changes) {
            var chng = changes[propName];
            console.log(chng);
        }
    };
    NewSpeechComponent.prototype.buildUICommand = function () {
        var _this = this;
        this.screenCommands.push({
            disabled: true, hidden: false, title: 'Delete', class: 'btn btn-primary  buttonSmall',
            handler: function () {
            }
        });
        this.screenCommands.push({
            disabled: false, hidden: false, title: 'Save', class: 'btn btn-primary  buttonSmall',
            handler: function () {
                _this.activeSpeech.createdBy = _this.authService.currentUser.id;
                _this.activeSpeech.createdOn = moment(_this.activeSpeech.createdOn).utc().format();
                _this.activeSpeech.updatedOn = moment(_this.activeSpeech.updatedOn).utc().format();
                _this.activeSpeech.isDeleted = false;
                _this.busySpinnerService.dispatcher.next(true);
                _this.speechService.AddSpeech(_this.activeSpeech).subscribe(function () {
                    _this.successToaster('Your speech saved successfully!');
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
    NewSpeechComponent.prototype.successToaster = function (msg) {
        this.toastr.success(msg, 'Success!');
    };
    return NewSpeechComponent;
}(__WEBPACK_IMPORTED_MODULE_2__speechComponentBase__["a" /* SpeechComponentBase */]));
NewSpeechComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'speech-page',
        template: __webpack_require__("../../../../../src/app/features/speech/components/newSpeech/newSpeech.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/speech/components/newSpeech/newSpeech.component.min.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__speech_service__["a" /* SpeechService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__speech_service__["a" /* SpeechService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__shared_service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_service_auth_service__["a" /* AuthService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__shared_components_navmenu_navmenu_service__["a" /* NavMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_components_navmenu_navmenu_service__["a" /* NavMenuService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8__shared_components_busyspinner_busyspinner_service__["a" /* BusySpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared_components_busyspinner_busyspinner_service__["a" /* BusySpinnerService */]) === "function" && _k || Object])
], NewSpeechComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=newSpeech.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/speech/components/selfSpeech/selfSpeech.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"speechContainer\">\r\n    <busy-spinner [busyIndicator]=\"isActiveSpeechLoading\"></busy-spinner>\r\n    <div class=\"row speechContainer-child\">\r\n        <div class=\"col-md-3 speechContainer-sidemenu\" id=\"sidemenu\" *ngIf=\"filterType !='new'\">\r\n            <form #f=\"ngForm\">\r\n                <side-menu [sideMenus]=\"speechList\" [activeSpeech]=\"activeSpeech\"></side-menu>\r\n            </form>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n        <div class=\"col-md-9 padding-top-5\" [ngClass]=\"(filterType !='new')?'col-md-9':'col-md-12'\" *ngIf=\"isActiveSpeech && !isActiveSpeechLoading\">\r\n            <speech [screenCommands]=\"screenCommands\" [activeSpeech]=\"activeSpeech\"></speech>\r\n        </div>\r\n        <div class=\"col-md-9 padding-top-5\" [ngClass]=\"(filterType !='new')?'col-md-9':'col-md-12'\" *ngIf=\"!isActiveSpeech && !isActiveSpeechLoading\">\r\n            <strong> No any speech is submitted by any users,  submit a new speech.</strong>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/features/speech/components/selfSpeech/selfSpeech.component.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#speechContainer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:stretch;align-content:stretch;width:100%;height:100%;}#speechContainer .speechContainer-child{width:100%;overflow-y:auto;overflow-x:hidden;margin:0 !important;padding:0;padding-top:20px;}#speechContainer .btn-primary:not([disabled]):not(.disabled).active,#speechContainer .btn-primary:not([disabled]):not(.disabled):active,#speechContainer .show>.btn-primary.dropdown-toggle{color:#fff;background-color:#2c3842;border-color:#2c3842;box-shadow:0 0 0 .2rem #1b242b);}#speechContainer .btn-primary{color:#fff;background-color:#6e7a87;border-color:#2c3842;box-shadow:0 0 0 .2rem #1b242b;cursor:pointer;}#speechContainer .btn-primary:hover{color:#fff;background-color:#2c3842;border-color:#6e7a87;box-shadow:0 0 0 .2rem #1b242b);}#speechContainer .btn-primary.disabled,#speechContainer .btn-primary:disabled{background-color:#b1b3b5;border-color:#b1b3b5;cursor:none;}#speechContainer .btn-primary.disabled:hover,#speechContainer .btn-primary:disabled:hover{background-color:#b1b3b5;border-color:#b1b3b5;cursor:none;}", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_speech_model__ = __webpack_require__("../../../../../src/app/features/speech/model/speech.model.ts");
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
        var _this = _super.call(this, modalService, route, speechService, authService, busySpinnerService, toastr) || this;
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
        this.busySpinnerService.dispatcher.next(true);
        this.isActiveSpeechLoading = true;
        this.filterType = this.requestType;
        this.getSpeechCollection();
    };
    SelfSpeechComponent.prototype.getSpeechCollection = function () {
        var _this = this;
        this.getSpeechListCollection(this.requestType);
        this.speechService.dispatcher.subscribe(function (val) {
            if (val !== undefined) {
                _this.isActiveSpeech = true;
                _this.setInitialValue(val);
            }
            else {
                _this.isActiveSpeech = false;
                _this.setInitialValue(val);
            }
        });
    };
    SelfSpeechComponent.prototype.setInitialValue = function (val) {
        this.activeSpeech = val;
        this.isActiveSpeechLoading = false;
        this.busySpinnerService.dispatcher.next(false);
    };
    SelfSpeechComponent.prototype.buildUICommand = function () {
        var _this = this;
        this.screenCommands = [];
        this.screenCommands.push({
            disabled: false, hidden: false, title: 'Delete', class: 'btn btn-primary  buttonSmall',
            handler: function () {
                _this.activeSpeech.isDeleted = true;
                _this.busySpinnerService.dispatcher.next(true);
                _this.speechService.AddSpeech(_this.activeSpeech).subscribe(function () {
                    _this.toastr.success('Your speech deleted successfully!', 'Success!');
                    _this.activeSpeech = new __WEBPACK_IMPORTED_MODULE_8__model_speech_model__["a" /* Speech */]();
                    //TODO -- If want to redirect default page after saved then uncomment this code
                    // this.navMenuService.dispatcher.next('userspeech');
                    //  this.router.navigate(['speechDashboard/userspeech']);
                    _this.getSpeechCollection();
                });
            }
        });
        this.screenCommands.push({
            disabled: false, hidden: false, title: 'Update', class: 'btn btn-primary  buttonSmall',
            handler: function () {
                _this.busySpinnerService.dispatcher.next(true);
                _this.activeSpeech.updatedOn = moment(_this.activeSpeech.updatedOn).utc().format();
                _this.busySpinnerService.dispatcher.next(true);
                _this.speechService.AddSpeech(_this.activeSpeech).subscribe(function () {
                    _this.successToaster('Your speech updated successfully!');
                    // this.activeSpeech = new Speech();
                    //TODO -- If want to redirect default page after saved then uncomment this code
                    // this.navMenuService.dispatcher.next('userspeech');
                    //  this.router.navigate(['speechDashboard/userspeech']);
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
    SelfSpeechComponent.prototype.successToaster = function (msg) {
        this.toastr.success(msg, 'Success!');
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

/***/ "../../../../../src/app/features/speech/components/speech/speech.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"speech\">\r\n    <div class=\"col-md-12 padding-top-5\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <textarea [(ngModel)]=\"activeSpeech.speechContent\"></textarea>\r\n            </div>\r\n        </div>\r\n        <div class=\"row padding-none padding-top-20\">\r\n            <div class=\"col-md-12  float-right padding-none\">\r\n                <div class=\"form-inline speech-content\">\r\n                    <div class=\"input-group\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"Title\" placeholder=\"Title\" [(ngModel)]=\"activeSpeech.title\" />\r\n                    </div>\r\n                    <div class=\"input-group\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"Author\" placeholder=\"Author\" [(ngModel)]=\"activeSpeech.author\" />\r\n                    </div>\r\n                    <div class=\"input-group\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"keyword\" placeholder=\"Subject area keywords\" [(ngModel)]=\"activeSpeech.keywords\" />\r\n                    </div>\r\n\r\n                    <div class=\"input-group\">\r\n                        <input class=\"form-control\" placeholder=\"{{valuedate | date: 'MM/dd/yyyy'}}\" datepickerPopup=\"mm-dd-yyyy\"\r\n                               name=\"dp\" [(ngModel)]=\"activeSpeech.createdOn\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                        <button class=\"input-group-addon\" (click)=\"d.toggle()\" type=\"button\">\r\n                            <img src=\"https://ng-bootstrap.github.io/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row command-container padding-none padding-top-20\">\r\n            <div class=\"col-md-12 padding-none\">\r\n                <div class=\"commandButtonContainer\">\r\n                    <div *ngFor=\"let screenCommand of screenCommands\">\r\n                        <button type=\"button\"\r\n                                class=\"{{screenCommand.class}}\"\r\n                                (click)=\"screenCommand.handler()\"\r\n                                [hidden]=\"screenCommand.hidden\"\r\n                                [disabled]=\"screenCommand.disabled\">\r\n                            {{screenCommand.title}}\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/features/speech/components/speech/speech.component.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#speech textarea{background:#ecf0f5!important;height:275px;width:100%;}.speechContainer-child{width:100%;overflow-y:auto;overflow-x:hidden;margin:0 !important;padding:0;padding-top:20px;}.speechContainer-sidemenu{float:right;padding:0;overflow:auto;}.speech-content div{margin-left:15px;margin-top:5px;}#sidemenu::-webkit-scrollbar{width:.5em;height:.5em;}#sidemenu::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);}#sidemenu::-webkit-scrollbar-thumb{background-color:#ffaa3c;outline:1px solid #708090;}.textcontent{width:calc(-50%);min-height:275px;overflow:auto;}.commandButtonContainer{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;float:right;margin-right:5px;margin-top:10px;}.commandButtonContainer div{margin-left:10px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/speech/components/speech/speech.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_speech_model__ = __webpack_require__("../../../../../src/app/features/speech/model/speech.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpeechComponent = (function () {
    function SpeechComponent() {
    }
    SpeechComponent.prototype.ngOnInit = function () { };
    return SpeechComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SpeechComponent.prototype, "screenCommands", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_speech_model__["a" /* Speech */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_speech_model__["a" /* Speech */]) === "function" && _a || Object)
], SpeechComponent.prototype, "activeSpeech", void 0);
SpeechComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'speech',
        template: __webpack_require__("../../../../../src/app/features/speech/components/speech/speech.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/speech/components/speech/speech.component.min.css")]
    }),
    __metadata("design:paramtypes", [])
], SpeechComponent);

var _a;
//# sourceMappingURL=speech.component.js.map

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
        this.speechService.getSpeechDashBoardNavigationMenu()
            .subscribe(function (navmenus) {
            _this.navMenusCollection = navmenus;
            _this.activeMenu = _this.navMenusCollection[0].routeLink;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_speech_speech_component__ = __webpack_require__("../../../../../src/app/features/speech/components/speech/speech.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_components_sharepeech_sharespeech_component__ = __webpack_require__("../../../../../src/app/common/components/sharepeech/sharespeech.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__speech_service__ = __webpack_require__("../../../../../src/app/features/speech/speech.service.ts");
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
        declarations: [__WEBPACK_IMPORTED_MODULE_7__components_speechDashboard_speechDashboard_component__["a" /* SpeechDashboardComponent */], __WEBPACK_IMPORTED_MODULE_8__components_selfSpeech_selfSpeech_component__["a" /* SelfSpeechComponent */], __WEBPACK_IMPORTED_MODULE_9__components_newSpeech_newSpeech_component__["a" /* NewSpeechComponent */], __WEBPACK_IMPORTED_MODULE_10__components_allSpeech_allSpeech_component__["a" /* AllSpeechComponent */], __WEBPACK_IMPORTED_MODULE_12__common_components_sharepeech_sharespeech_component__["a" /* ShareSpeechContent */], __WEBPACK_IMPORTED_MODULE_11__components_speech_speech_component__["a" /* SpeechComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_7__components_speechDashboard_speechDashboard_component__["a" /* SpeechDashboardComponent */], __WEBPACK_IMPORTED_MODULE_8__components_selfSpeech_selfSpeech_component__["a" /* SelfSpeechComponent */], __WEBPACK_IMPORTED_MODULE_9__components_newSpeech_newSpeech_component__["a" /* NewSpeechComponent */], __WEBPACK_IMPORTED_MODULE_10__components_allSpeech_allSpeech_component__["a" /* AllSpeechComponent */], __WEBPACK_IMPORTED_MODULE_12__common_components_sharepeech_sharespeech_component__["a" /* ShareSpeechContent */], __WEBPACK_IMPORTED_MODULE_11__components_speech_speech_component__["a" /* SpeechComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_12__common_components_sharepeech_sharespeech_component__["a" /* ShareSpeechContent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_13__speech_service__["a" /* SpeechService */]]
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
    function SpeechComponentBase(modalService, route, speechService, authService, busySpinnerService, toastr) {
        var _this = this;
        this.modalService = modalService;
        this.route = route;
        this.speechService = speechService;
        this.authService = authService;
        this.busySpinnerService = busySpinnerService;
        this.toastr = toastr;
        this.isActiveSpeech = false;
        this.isActiveSpeechLoading = true;
        this.dateFormat = 'MM/dd/yyyy';
        this.valuedate = moment().format('MM/DD/YYYY');
        this.speechList = [];
        this.activeSpeech = new __WEBPACK_IMPORTED_MODULE_1__model_speech_model__["a" /* Speech */]();
        this.screenCommands = [];
        this.route.url.forEach(function (segments) {
            _this.activeMenu = segments.join("/");
        });
    }
    SpeechComponentBase.prototype.getSpeechListCollection = function (requestType) {
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
            _this.speechList = speechlist.filter(function (d) { return d.createdBy === id; });
            if (_this.speechList !== undefined && _this.speechList.length > 0) {
                _this.activeSpeech = _this.speechList[0];
            }
            else {
                _this.activeSpeech = undefined;
            }
            _this.speechService.dispatcher.next(_this.activeSpeech);
        });
    };
    SpeechComponentBase.prototype.getAllSpeechCollection = function () {
        var _this = this;
        this.speechService.getSpeechCollection()
            .subscribe(function (speechlist) {
            _this.speechList = speechlist;
            if (_this.speechList !== undefined && _this.speechList.length > 0) {
                _this.activeSpeech = _this.speechList[0];
            }
            else {
                _this.activeSpeech = undefined;
            }
            _this.speechService.dispatcher.next(_this.activeSpeech);
        });
    };
    SpeechComponentBase.prototype.openShareModel = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_0__common_components_sharepeech_sharespeech_component__["a" /* ShareSpeechContent */]);
        modalRef.componentInstance.content = this.activeSpeech.speechContent;
        modalRef.componentInstance.handler = function (callback) {
            setTimeout(function () {
                callback.close('Close click');
            }, 1000);
        };
    };
    return SpeechComponentBase;
}());

//# sourceMappingURL=speechComponentBase.js.map

/***/ }),

/***/ "../../../../../src/app/shared/model/mail.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mail; });
var Mail = (function () {
    function Mail() {
    }
    return Mail;
}());

//# sourceMappingURL=mail.model.js.map

/***/ })

});
//# sourceMappingURL=speech.module.chunk.js.map