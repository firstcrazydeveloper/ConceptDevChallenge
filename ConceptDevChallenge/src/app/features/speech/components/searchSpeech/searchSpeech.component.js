"use strict";
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
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var speech_service_1 = require("../../speech.service");
var speechSearch_model_1 = require("../../model/speechSearch.model");
var navmenu_service_1 = require("../../../../shared/components/navmenu/navmenu.service");
var sidemenu_service_1 = require("../../../../shared/components/sidemenu/sidemenu.service");
var busyspinner_service_1 = require("../../../../shared/components/busyspinner/busyspinner.service");
var speechConstants_1 = require("../../speechConstants");
var SearchSpeechComponent = (function () {
    function SearchSpeechComponent(router, speechService, busySpinnerService, navMenuService, sideMenuService, toastr, vcr) {
        this.router = router;
        this.speechService = speechService;
        this.busySpinnerService = busySpinnerService;
        this.navMenuService = navMenuService;
        this.sideMenuService = sideMenuService;
        this.toastr = toastr;
        this.vcr = vcr;
        this.routeName = speechConstants_1.SpeechConstant.SearchSpeech_RouteName;
        this.speechSearch = new speechSearch_model_1.SpeechSearch();
        this.toastr.setRootViewContainerRef(vcr);
    }
    SearchSpeechComponent.prototype.ngOnInit = function () { };
    SearchSpeechComponent.prototype.globalSearch = function () {
        this.SearchSpeech();
    };
    SearchSpeechComponent.prototype.advanceSearch = function () {
        this.SearchSpeech();
    };
    SearchSpeechComponent.prototype.SearchSpeech = function () {
        this.busySpinnerService.dispatcher.next(true);
        if (this.navMenuService.currentNavItem !== this.routeName) {
            this.navMenuService.dispatcher.next(this.routeName);
            this.navMenuService.currentNavItem = this.routeName;
            this.speechService.speechSearch = this.speechSearch;
            this.clearData();
            this.router.navigate(['speechDashboard/' + this.routeName]);
        }
        else {
            this.updateFilterSpeechCollection();
        }
    };
    SearchSpeechComponent.prototype.updateFilterSpeechCollection = function () {
        var _this = this;
        this.speechService.getAdvanceSearchSpeechCollection(this.speechSearch)
            .subscribe(function (speechlist) {
            _this.clearData();
            _this.sideMenuService.sideMenuDispatcher.next(speechlist);
        }, function (err) {
            _this.toastr.error('We are getting error to connect with server! Try again', 'Oops!');
            console.log(err);
            _this.busySpinnerService.dispatcher.next(false);
        });
    };
    SearchSpeechComponent.prototype.clearData = function () {
        this.speechSearch = new speechSearch_model_1.SpeechSearch();
    };
    SearchSpeechComponent = __decorate([
        core_1.Component({
            selector: 'search-speech',
            templateUrl: "./searchSpeech.component.html",
            styleUrls: ['./searchSpeech.component.min.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, speech_service_1.SpeechService, busyspinner_service_1.BusySpinnerService,
            navmenu_service_1.NavMenuService, sidemenu_service_1.SideMenuService, ng2_toastr_1.ToastsManager, core_1.ViewContainerRef])
    ], SearchSpeechComponent);
    return SearchSpeechComponent;
}());
exports.SearchSpeechComponent = SearchSpeechComponent;
//# sourceMappingURL=searchSpeech.component.js.map