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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var speech_service_1 = require("../../speech.service");
var busyspinner_service_1 = require("../../../../shared/components/busyspinner/busyspinner.service");
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
    SpeechDashboardComponent = __decorate([
        core_1.Component({
            selector: 'speech-dashboard',
            templateUrl: "./speechDashboard.component.html",
            styleUrls: ['./speechDashboard.component.min.css']
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal, speech_service_1.SpeechService, busyspinner_service_1.BusySpinnerService])
    ], SpeechDashboardComponent);
    return SpeechDashboardComponent;
}());
exports.SpeechDashboardComponent = SpeechDashboardComponent;
//# sourceMappingURL=speechDashboard.component.js.map