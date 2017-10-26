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
var speechComponentBase_1 = require("./speechComponentBase");
var speech_service_1 = require("./speech.service");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var UserSpeechComponent = (function (_super) {
    __extends(UserSpeechComponent, _super);
    function UserSpeechComponent(router, modalService, route, speechService) {
        var _this = _super.call(this, modalService, route, speechService) || this;
        _this.router = router;
        _this.modalService = modalService;
        _this.route = route;
        _this.speechService = speechService;
        _this.requestType = 'user';
        _this.buildUICommand();
        return _this;
    }
    UserSpeechComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterType = this.requestType;
        this.getSpeechListCollection(this.requestType);
        this.speechService.dispatcher.subscribe(function (val) { _this.activeSpeech = val; });
    };
    UserSpeechComponent.prototype.buildUICommand = function () {
        var _this = this;
        this.screenCommands = [];
        this.screenCommands.push({
            disabled: false, hidden: false, title: 'Delete', class: 'btn btn-danger  buttonSmall',
            handler: function () {
            }
        });
        this.screenCommands.push({
            disabled: false, hidden: false, title: 'Save', class: 'btn btn-success  buttonSmall',
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
    UserSpeechComponent = __decorate([
        core_1.Component({
            selector: 'speech-page',
            templateUrl: "./speech.component.html",
            styleUrls: ['./speech.component.min.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, ng_bootstrap_1.NgbModal, router_1.ActivatedRoute, speech_service_1.SpeechService])
    ], UserSpeechComponent);
    return UserSpeechComponent;
}(speechComponentBase_1.SpeechComponentBase));
exports.UserSpeechComponent = UserSpeechComponent;
//# sourceMappingURL=userSpeech.component.js.map