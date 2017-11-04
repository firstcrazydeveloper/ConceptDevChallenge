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
var speech_service_1 = require("../../../features/speech/speech.service");
var sidemenu_service_1 = require("./sidemenu.service");
var shareData_settings_1 = require("../../shareData.settings");
var SideMenuComponent = (function () {
    function SideMenuComponent(speechService, sideMenuService) {
        this.speechService = speechService;
        this.sideMenuService = sideMenuService;
    }
    SideMenuComponent.prototype.ngAfterContentChecked = function () { };
    SideMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sideMenuService.sideMenuDispatcher.subscribe(function (sideMenusList) {
            _this.sideMenus = sideMenusList;
            if (_this.sideMenus !== undefined && _this.sideMenus.length > 0) {
                _this.activeSpeech = _this.sideMenus[0];
                _this.updateDateFormat(_this.activeSpeech);
            }
            else {
                _this.activeSpeech = undefined;
            }
            _this.speechService.dispatcher.next(_this.activeSpeech);
        });
    };
    SideMenuComponent.prototype.ngOnChanges = function (changes) {
    };
    SideMenuComponent.prototype.updateDateFormat = function (activeSpeech) {
        if (activeSpeech.createdOn === undefined) {
            activeSpeech.createdOn = moment().format(shareData_settings_1.ShareDataSettings.DateFormat);
        }
        else {
            activeSpeech.createdOn = moment(activeSpeech.createdOn).format(shareData_settings_1.ShareDataSettings.DateFormat);
        }
    };
    SideMenuComponent.prototype.loadContent = function (speech) {
        this.updateDateFormat(speech);
        this.speechService.dispatcher.next(speech);
        this.activeSpeech = speech;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], SideMenuComponent.prototype, "sideMenus", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SideMenuComponent.prototype, "activeSpeech", void 0);
    SideMenuComponent = __decorate([
        core_1.Component({
            selector: 'side-menu',
            templateUrl: "./sidemenu.component.html",
            styleUrls: ['./sidemenu.component.min.css']
        }),
        __metadata("design:paramtypes", [speech_service_1.SpeechService, sidemenu_service_1.SideMenuService])
    ], SideMenuComponent);
    return SideMenuComponent;
}());
exports.SideMenuComponent = SideMenuComponent;
//# sourceMappingURL=sidemenu.component.js.map