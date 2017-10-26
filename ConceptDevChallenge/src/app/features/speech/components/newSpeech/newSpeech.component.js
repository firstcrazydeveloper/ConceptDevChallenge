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
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var auth_service_1 = require("../../../../shared/service/auth.service");
var navmenu_service_1 = require("../../../../shared/components/navmenu/navmenu.service");
var busyspinner_service_1 = require("../../../../shared/components/busyspinner/busyspinner.service");
var speech_model_1 = require("../../model/speech.model");
var NewSpeechComponent = (function (_super) {
    __extends(NewSpeechComponent, _super);
    function NewSpeechComponent(router, route, modalService, speechService, toastr, vcr, authService, navMenuService, busySpinnerService) {
        var _this = _super.call(this, modalService, route, speechService, authService, busySpinnerService) || this;
        _this.router = router;
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
        return _this;
    }
    NewSpeechComponent.prototype.ngOnInit = function () {
        this.filterType = this.requestType;
    };
    NewSpeechComponent.prototype.buildUICommand = function () {
        var _this = this;
        this.screenCommands.push({
            disabled: true, hidden: false, title: 'Delete', class: 'btn btn-danger  buttonSmall',
            handler: function () {
            }
        });
        this.screenCommands.push({
            disabled: false, hidden: false, title: 'Save', class: 'btn btn-success  buttonSmall',
            handler: function () {
                _this.activeSpeech.userId = _this.authService.currentUser.id;
                _this.busySpinnerService.dispatcher.next(true);
                _this.speechService.AddOrUpdateSpeech(_this.activeSpeech).subscribe(function () {
                    _this.toastr.success('Your speech saved successfully!', 'Success!');
                    _this.activeSpeech = new speech_model_1.Speech();
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
    NewSpeechComponent = __decorate([
        core_1.Component({
            selector: 'speech-page',
            templateUrl: "./newSpeech.component.html",
            styleUrls: ['./newSpeech.component.min.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, ng_bootstrap_1.NgbModal, speech_service_1.SpeechService,
            ng2_toastr_1.ToastsManager, core_1.ViewContainerRef, auth_service_1.AuthService, navmenu_service_1.NavMenuService,
            busyspinner_service_1.BusySpinnerService])
    ], NewSpeechComponent);
    return NewSpeechComponent;
}(speechComponentBase_1.SpeechComponentBase));
exports.NewSpeechComponent = NewSpeechComponent;
//# sourceMappingURL=newSpeech.component.js.map