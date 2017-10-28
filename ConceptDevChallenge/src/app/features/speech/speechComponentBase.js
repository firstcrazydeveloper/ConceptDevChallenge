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
        this.isActiveSpeech = false;
        this.isActiveSpeechLoading = true;
        this.dateFormat = 'MM/dd/yyyy';
        this.valuedate = moment().format('MM/DD/YYYY');
        this.speechList = [];
        this.activeSpeech = new speech_model_1.Speech();
        this.screenCommands = [];
        this.route.url.forEach(function (segments) {
            _this.activeMenu = segments.join("/");
        });
    }
    SpeechComponentBase.prototype.getSpeechListCollection = function (requestType) {
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
            _this.speechList = speechlist.filter(function (d) { return d.createdBy === id; });
            if (_this.speechList !== undefined && _this.speechList.length > 0) {
                _this.activeSpeech = _this.speechList[0];
            }
            else {
                _this.activeSpeech = undefined;
            }
            _this.speechService.dispatcher.next(_this.activeSpeech);
        });
    };
    SpeechComponentBase.prototype.getAllSpeechCollection = function () {
        var _this = this;
        this.speechService.getSpeechCollection()
            .subscribe(function (speechlist) {
            _this.speechList = speechlist;
            if (_this.speechList !== undefined && _this.speechList.length > 0) {
                _this.activeSpeech = _this.speechList[0];
            }
            else {
                _this.activeSpeech = undefined;
            }
            _this.speechService.dispatcher.next(_this.activeSpeech);
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