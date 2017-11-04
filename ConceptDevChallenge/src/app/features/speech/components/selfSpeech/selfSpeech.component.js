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
var speech_service_1 = require("../../speech.service");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var auth_service_1 = require("../../../../shared/service/auth.service");
var busyspinner_service_1 = require("../../../../shared/components/busyspinner/busyspinner.service");
var speech_model_1 = require("../../model/speech.model");
var speechConstants_1 = require("../../speechConstants");
var SelfSpeechComponent = (function (_super) {
    __extends(SelfSpeechComponent, _super);
    function SelfSpeechComponent(modalService, route, speechService, toastr, vcr, authService, busySpinnerService) {
        var _this = _super.call(this, modalService, route, speechService, authService, busySpinnerService, toastr) || this;
        _this.modalService = modalService;
        _this.route = route;
        _this.speechService = speechService;
        _this.toastr = toastr;
        _this.vcr = vcr;
        _this.authService = authService;
        _this.busySpinnerService = busySpinnerService;
        _this.toastr.setRootViewContainerRef(vcr);
        _this.buildUICommand();
        return _this;
    }
    SelfSpeechComponent.prototype.ngOnInit = function () {
        this.setOnInItData(speechConstants_1.SpeechConstant.SelfSpeech_RequestType);
    };
    SelfSpeechComponent.prototype.buildUICommand = function () {
        var _this = this;
        this.screenCommands = [];
        this.screenCommands.push({
            disabled: false, hidden: false, title: speechConstants_1.SpeechConstant.SelfSpeech_DeleteButton_Title, class: 'btn btn-primary  buttonSmall',
            handler: function () {
                _this.activeSpeech.isDeleted = true;
                _this.busySpinnerService.dispatcher.next(true);
                _this.speechService.AddSpeech(_this.activeSpeech).subscribe(function () {
                    _this.toastr.success(speechConstants_1.SpeechConstant.SelfSpeech_DeleteButton_SuccessMessage, speechConstants_1.SpeechConstant.ToasterSuccess);
                    _this.activeSpeech = new speech_model_1.Speech();
                    //TODO -- If want to redirect default page after saved then uncomment this code
                    // this.navMenuService.dispatcher.next('userspeech');
                    //  this.router.navigate(['speechDashboard/userspeech']);
                    _this.setOnInItData(speechConstants_1.SpeechConstant.SelfSpeech_RequestType);
                });
            }
        });
        this.screenCommands.push({
            disabled: false, hidden: false, title: speechConstants_1.SpeechConstant.SelfSpeech_UpdateButton_Title, class: 'btn btn-primary  buttonSmall',
            handler: function () {
                _this.busySpinnerService.dispatcher.next(true);
                _this.activeSpeech.updatedOn = moment(_this.activeSpeech.updatedOn).utc().format();
                _this.busySpinnerService.dispatcher.next(true);
                _this.speechService.AddSpeech(_this.activeSpeech).subscribe(function () {
                    _this.successToaster(speechConstants_1.SpeechConstant.SelfSpeech_UpdateButton_SuccessMessage);
                    // this.activeSpeech = new Speech();
                    //TODO -- If want to redirect default page after saved then uncomment this code
                    // this.navMenuService.dispatcher.next('userspeech');
                    //  this.router.navigate(['speechDashboard/userspeech']);
                    _this.busySpinnerService.dispatcher.next(false);
                });
            }
        });
        this.screenCommands.push({
            disabled: false, hidden: false, title: speechConstants_1.SpeechConstant.SelfSpeech_ShareButton_Title, class: 'btn btn-primary  buttonSmall',
            handler: function () {
                _this.openShareModel();
            }
        });
        this.screenCommands.push({
            disabled: false, hidden: false, title: speechConstants_1.SpeechConstant.ResetButton_Title, class: 'btn btn-primary  buttonSmall',
            handler: function () {
                _this.activeSpeech = Object.assign({}, _this.activeSpeechOldData);
            }
        });
    };
    SelfSpeechComponent.prototype.successToaster = function (msg) {
        this.toastr.success(msg, speechConstants_1.SpeechConstant.ToasterSuccess);
    };
    SelfSpeechComponent = __decorate([
        core_1.Component({
            selector: 'speech-page',
            templateUrl: "./selfSpeech.component.html",
            styleUrls: ['./selfSpeech.component.min.css']
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal, router_1.ActivatedRoute,
            speech_service_1.SpeechService, ng2_toastr_1.ToastsManager, core_1.ViewContainerRef, auth_service_1.AuthService,
            busyspinner_service_1.BusySpinnerService])
    ], SelfSpeechComponent);
    return SelfSpeechComponent;
}(speechComponentBase_1.SpeechComponentBase));
exports.SelfSpeechComponent = SelfSpeechComponent;
//# sourceMappingURL=selfSpeech.component.js.map