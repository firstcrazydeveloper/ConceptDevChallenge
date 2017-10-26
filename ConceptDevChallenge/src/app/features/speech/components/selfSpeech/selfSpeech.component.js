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
    SelfSpeechComponent = __decorate([
        core_1.Component({
            selector: 'speech-page',
            templateUrl: "./selfSpeech.component.html",
            styleUrls: ['./selfSpeech.component.min.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, ng_bootstrap_1.NgbModal, router_1.ActivatedRoute,
            speech_service_1.SpeechService, ng2_toastr_1.ToastsManager, core_1.ViewContainerRef, auth_service_1.AuthService,
            busyspinner_service_1.BusySpinnerService])
    ], SelfSpeechComponent);
    return SelfSpeechComponent;
}(speechComponentBase_1.SpeechComponentBase));
exports.SelfSpeechComponent = SelfSpeechComponent;
//# sourceMappingURL=selfSpeech.component.js.map