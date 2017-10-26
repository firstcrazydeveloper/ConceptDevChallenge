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
var speech_service_1 = require("./speech.service");
var SpeechDashboardComponent = (function () {
    function SpeechDashboardComponent(modalService, speechService) {
        this.modalService = modalService;
        this.speechService = speechService;
    }
    SpeechDashboardComponent.prototype.ngOnInit = function () {
        this.getNavMenusCollection();
    };
    SpeechDashboardComponent.prototype.getNavMenusCollection = function () {
        //this.speechService.getSpeechDashBoardNavigationMenu()
        //    .subscribe(navmenus => { this.navMenusCollection = navmenus; });
        this.navMenusCollection = [{ id: 1, name: 'View My Speeches', routeLink: 'userspeech' }, { id: 2, name: 'Submit a new Speech', routeLink: 'newspeech' }, { id: 3, name: 'Search all Speeches', routeLink: 'allspeech' }];
        this.activeMenu = this.navMenusCollection[0].routeLink;
    };
    SpeechDashboardComponent = __decorate([
        core_1.Component({
            selector: 'speech-dashboard',
            templateUrl: "./speechDashboard.component.html",
            styleUrls: ['./speechDashboard.component.min.css']
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal, speech_service_1.SpeechService])
    ], SpeechDashboardComponent);
    return SpeechDashboardComponent;
}());
exports.SpeechDashboardComponent = SpeechDashboardComponent;
//# sourceMappingURL=speechDashboard.component.js.map