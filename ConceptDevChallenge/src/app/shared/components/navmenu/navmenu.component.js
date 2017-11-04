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
var navmenu_service_1 = require("./navmenu.service");
var busyspinner_service_1 = require("../../../shared/components/busyspinner/busyspinner.service");
var speech_service_1 = require("../../../features/speech/speech.service");
var auth_service_1 = require("../../../shared/service/auth.service");
var sidemenu_service_1 = require("../sidemenu/sidemenu.service");
var speechConstants_1 = require("../../../features/speech/speechConstants");
var NavMenuComponent = (function () {
    function NavMenuComponent(router, navMenuService, busySpinnerService, speechService, authService, sideMenuService) {
        this.router = router;
        this.navMenuService = navMenuService;
        this.busySpinnerService = busySpinnerService;
        this.speechService = speechService;
        this.authService = authService;
        this.sideMenuService = sideMenuService;
        this.isActiveSpeechLoading = false;
    }
    NavMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navMenuService.dispatcher.subscribe(function (val) {
            _this.activeMenu = val;
        });
    };
    NavMenuComponent.prototype.navigate = function (routeName) {
        this.busySpinnerService.dispatcher.next(true);
        if (this.activeMenu !== routeName) {
            this.navMenuService.currentNavItem = routeName;
            this.navMenuService.dispatcher.next(routeName);
            this.activeMenu = routeName;
            this.router.navigate(['speechDashboard/' + routeName]);
        }
        else {
            if (this.activeMenu == speechConstants_1.SpeechConstant.AllSpeech_NavigationMenu) {
                this.getSpeechListCollection(speechConstants_1.SpeechConstant.AllSpeech_RequestType);
            }
            else if (this.activeMenu === speechConstants_1.SpeechConstant.SelfSpeech_NavigationMenu) {
                this.getSpeechListCollection(speechConstants_1.SpeechConstant.SelfSpeech_RequestType);
            }
        }
    };
    NavMenuComponent.prototype.getSpeechListCollection = function (requestType) {
        var currentUser = this.authService.currentUser;
        if (requestType == speechConstants_1.SpeechConstant.AllSpeech_RequestType) {
            this.getAllSpeechCollection();
        }
        else {
            this.getUserSpecificSpeechCollection(currentUser.id);
        }
    };
    NavMenuComponent.prototype.getUserSpecificSpeechCollection = function (id) {
        var _this = this;
        this.speechService.getSpeechCollection()
            .subscribe(function (speechlist) {
            _this.sideMenuService.sideMenuDispatcher.next(speechlist);
            _this.busySpinnerService.dispatcher.next(false);
        });
    };
    NavMenuComponent.prototype.getAllSpeechCollection = function () {
        var _this = this;
        this.speechService.getSpeechCollection()
            .subscribe(function (speechlist) {
            _this.sideMenuService.sideMenuDispatcher.next(speechlist);
            _this.busySpinnerService.dispatcher.next(false);
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], NavMenuComponent.prototype, "navMenus", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], NavMenuComponent.prototype, "activeMenu", void 0);
    NavMenuComponent = __decorate([
        core_1.Component({
            selector: 'nav-menu',
            templateUrl: "./navmenu.component.html",
            styleUrls: ['./navmenu.component.min.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, navmenu_service_1.NavMenuService, busyspinner_service_1.BusySpinnerService, speech_service_1.SpeechService,
            auth_service_1.AuthService, sidemenu_service_1.SideMenuService])
    ], NavMenuComponent);
    return NavMenuComponent;
}());
exports.NavMenuComponent = NavMenuComponent;
//# sourceMappingURL=navmenu.component.js.map