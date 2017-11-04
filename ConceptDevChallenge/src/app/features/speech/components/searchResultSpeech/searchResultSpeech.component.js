"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var speechComponentBase_1 = require("../../speechComponentBase");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var speech_service_1 = require("../../speech.service");
var navmenu_service_1 = require("../../../../shared/components/navmenu/navmenu.service");
var auth_service_1 = require("../../../../shared/service/auth.service");
var busyspinner_service_1 = require("../../../../shared/components/busyspinner/busyspinner.service");
var speechConstants_1 = require("../../speechConstants");
var SearchResultSpeechComponent = (function (_super) {
    __extends(SearchResultSpeechComponent, _super);
    function SearchResultSpeechComponent(navMenuService, route, modalService, speechService, authService, busySpinnerService, toastr, vcr) {
        var _this = _super.call(this, modalService, route, speechService, authService, busySpinnerService, toastr) || this;
        _this.navMenuService = navMenuService;
        _this.route = route;
        _this.modalService = modalService;
        _this.speechService = speechService;
        _this.authService = authService;
        _this.busySpinnerService = busySpinnerService;
        _this.toastr = toastr;
        _this.vcr = vcr;
        _this.requestType = speechConstants_1.SpeechConstant.AllSpeech_RequestType;
        _this.toastr.setRootViewContainerRef(vcr);
        _this.buildUICommand();
        return _this;
    }
    SearchResultSpeechComponent.prototype.ngOnInit = function () {
        this.busySpinnerService.dispatcher.next(true);
        this.isActiveSpeechLoading = true;
        this.getFilterSpeechCollection();
        this.setDispatcher();
    };
    SearchResultSpeechComponent.prototype.getFilterSpeechCollection = function () {
        var _this = this;
        this.speechService.getAdvanceSearchSpeechCollection(this.speechService.speechSearch)
            .subscribe(function (speechList) {
            _this.setSpeechListData(speechList);
            _this.busySpinnerService.dispatcher.next(false);
        }, function (err) {
            _this.toastr.error('We are getting error to connect with server! Try again', 'Oops!');
            console.log(err);
            _this.busySpinnerService.dispatcher.next(false);
        });
    };
    SearchResultSpeechComponent.prototype.buildUICommand = function () {
        var _this = this;
        this.screenCommands.push({
            disabled: false, hidden: false, title: speechConstants_1.SpeechConstant.AllSpeech_ShareButton_Title, class: 'btn btn-primary  buttonSmall',
            handler: function () {
                _this.openShareModel();
            }
        });
    };
    SearchResultSpeechComponent.prototype.successToaster = function (msg) {
        this.toastr.success(msg, speechConstants_1.SpeechConstant.AllSpeech_SucessMsg);
    };
    SearchResultSpeechComponent = __decorate([
        core_1.Component({
            selector: 'search-result-speech',
            templateUrl: "./searchResultSpeech.component.html",
            styleUrls: ['./searchResultSpeech.component.min.css']
        }),
        __metadata("design:paramtypes", [navmenu_service_1.NavMenuService, router_1.ActivatedRoute, ng_bootstrap_1.NgbModal, speech_service_1.SpeechService,
            auth_service_1.AuthService, busyspinner_service_1.BusySpinnerService, ng2_toastr_1.ToastsManager, core_1.ViewContainerRef])
    ], SearchResultSpeechComponent);
    return SearchResultSpeechComponent;
}(speechComponentBase_1.SpeechComponentBase));
exports.SearchResultSpeechComponent = SearchResultSpeechComponent;
//# sourceMappingURL=searchResultSpeech.component.js.map