"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sharespeech_component_1 = require("../../common/components/sharepeech/sharespeech.component");
var speech_model_1 = require("./model/speech.model");
var SpeechComponentBase = (function () {
    function SpeechComponentBase(modalService, route, speechService, authService, busySpinnerService) {
        var _this = this;
        this.modalService = modalService;
        this.route = route;
        this.speechService = speechService;
        this.authService = authService;
        this.busySpinnerService = busySpinnerService;
        this.speechList = [];
        this.activeSpeech = new speech_model_1.Speech();
        this.screenCommands = [];
        this.route.url.forEach(function (segments) {
            _this.activeMenu = segments.join("/");
            console.log('start');
            console.log(_this.activeMenu);
            // alert(this.activeMenu);
            console.log('End');
        });
    }
    SpeechComponentBase.prototype.getSpeechListCollection = function (requestType) {
        this.busySpinnerService.dispatcher.next(true);
        var currentUser = this.authService.currentUser;
        if (requestType == 'all') {
            this.getAllSpeechCollection();
        }
        else {
            this.getUserSpecificSpeechCollection(currentUser.id);
        }
    };
    SpeechComponentBase.prototype.getUserSpecificSpeechCollection = function (id) {
        var _this = this;
        this.speechService.getSpeechCollection()
            .subscribe(function (speechlist) {
            _this.speechList = speechlist.filter(function (d) { return d.userId === id; });
            _this.activeSpeech = _this.speechList[0];
            _this.busySpinnerService.dispatcher.next(false);
        });
    };
    SpeechComponentBase.prototype.getAllSpeechCollection = function () {
        var _this = this;
        this.speechService.getSpeechCollection()
            .subscribe(function (speechlist) {
            _this.speechList = speechlist;
            _this.activeSpeech = _this.speechList[0];
            _this.busySpinnerService.dispatcher.next(false);
        });
    };
    SpeechComponentBase.prototype.openShareModel = function () {
        var modalRef = this.modalService.open(sharespeech_component_1.ShareSpeechContent);
        modalRef.componentInstance.name = 'World';
    };
    return SpeechComponentBase;
}());
exports.SpeechComponentBase = SpeechComponentBase;
//# sourceMappingURL=speechComponentBase.js.map