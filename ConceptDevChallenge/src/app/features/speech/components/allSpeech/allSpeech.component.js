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
var speech_service_1 = require("../../speech.service");
var auth_service_1 = require("../../../../shared/service/auth.service");
var busyspinner_service_1 = require("../../../../shared/components/busyspinner/busyspinner.service");
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
        this.busySpinnerService.dispatcher.next(true);
        this.isActiveSpeechLoading = true;
        this.filterType = this.requestType;
        this.getSpeechCollection();
    };
    AllSpeechComponent.prototype.getSpeechCollection = function () {
        var _this = this;
        this.getSpeechListCollection(this.requestType);
        this.speechService.dispatcher.subscribe(function (val) {
            if (val !== undefined) {
                _this.isActiveSpeech = true;
            }
            _this.activeSpeech = val;
            _this.isActiveSpeechLoading = false;
            _this.busySpinnerService.dispatcher.next(false);
        });
    };
    AllSpeechComponent.prototype.buildUICommand = function () {
        var _this = this;
        this.screenCommands.push({
            disabled: true, hidden: false, title: 'Delete', class: 'btn btn-danger  buttonSmall',
            handler: function () {
            }
        });
        this.screenCommands.push({
            disabled: true, hidden: false, title: 'Update', class: 'btn btn-success  buttonSmall',
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
    AllSpeechComponent = __decorate([
        core_1.Component({
            selector: 'speech-page',
            templateUrl: "./allSpeech.component.html",
            styleUrls: ['./allSpeech.component.min.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, ng_bootstrap_1.NgbModal, speech_service_1.SpeechService,
            auth_service_1.AuthService, busyspinner_service_1.BusySpinnerService])
    ], AllSpeechComponent);
    return AllSpeechComponent;
}(speechComponentBase_1.SpeechComponentBase));
exports.AllSpeechComponent = AllSpeechComponent;
//# sourceMappingURL=allSpeech.component.js.map