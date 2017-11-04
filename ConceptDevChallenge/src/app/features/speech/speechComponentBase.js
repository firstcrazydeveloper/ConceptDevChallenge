"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sharespeech_component_1 = require("../../common/components/sharepeech/sharespeech.component");
var speech_model_1 = require("./model/speech.model");
var speechConstants_1 = require("./speechConstants");
var shareData_settings_1 = require("../../shared/shareData.settings");
var SpeechComponentBase = (function () {
    function SpeechComponentBase(modalService, route, speechService, authService, busySpinnerService, toastr) {
        var _this = this;
        this.modalService = modalService;
        this.route = route;
        this.speechService = speechService;
        this.authService = authService;
        this.busySpinnerService = busySpinnerService;
        this.toastr = toastr;
        this.isActiveSpeech = false;
        this.isActiveSpeechLoading = true;
        this.activeSpeech = new speech_model_1.Speech();
        this.activeSpeechOldData = new speech_model_1.Speech();
        this.screenCommands = [];
        this.speechList = [];
        this.route.url.forEach(function (segments) {
            _this.activeMenu = segments.join("/");
        });
    }
    SpeechComponentBase.prototype.getSpeechListCollection = function (requestType) {
        var currentUser = this.authService.currentUser;
        if (requestType == speechConstants_1.SpeechConstant.AllSpeech_RequestType) {
            this.getAllSpeechCollection();
        }
        else {
            this.getUserSpecificSpeechCollection(currentUser.id);
        }
    };
    SpeechComponentBase.prototype.getUserSpecificSpeechCollection = function (id) {
        var _this = this;
        this.speechService.getSpeechCollection()
            .subscribe(function (speechList) {
            speechList = speechList.filter(function (d) { return d.createdBy === id; });
            _this.setSpeechListData(speechList);
        }, function (err) {
            _this.toastr.error('We are getting error to connect with server! Try again', 'Oops!');
            console.log(err);
            _this.busySpinnerService.dispatcher.next(false);
        });
    };
    SpeechComponentBase.prototype.getAllSpeechCollection = function () {
        var _this = this;
        this.speechService.getSpeechCollection()
            .subscribe(function (speechList) {
            _this.setSpeechListData(speechList);
        }, function (err) {
            _this.toastr.error('We are getting error to connect with server! Try again', 'Oops!');
            console.log(err);
            _this.busySpinnerService.dispatcher.next(false);
        });
    };
    SpeechComponentBase.prototype.setSpeechListData = function (speechList) {
        this.speechList = speechList;
        if (this.speechList !== undefined && this.speechList.length > 0) {
            this.activeSpeech = this.speechList[0];
            this.activeSpeech.createdOn = this.activeSpeech.createdOn !== undefined ? moment(this.activeSpeech.createdOn).format(shareData_settings_1.ShareDataSettings.DateFormat) :
                moment().format(shareData_settings_1.ShareDataSettings.DateFormat);
            this.activeSpeechOldData = Object.assign({}, this.activeSpeech);
        }
        else {
            this.activeSpeech = undefined;
        }
        this.speechService.dispatcher.next(this.activeSpeech);
        this.busySpinnerService.dispatcher.next(false);
    };
    SpeechComponentBase.prototype.openShareModel = function () {
        var modalRef = this.modalService.open(sharespeech_component_1.ShareSpeechContent);
        modalRef.componentInstance.content = this.activeSpeech.speechContent;
        modalRef.componentInstance.handler = function (callback) {
            setTimeout(function () {
                callback.close('Close click');
            }, 1000);
        };
    };
    SpeechComponentBase.prototype.setInitialValue = function (val) {
        this.activeSpeech = val;
        if (val !== undefined) {
            this.activeSpeech.createdOn = this.activeSpeech.createdOn !== undefined ? moment(this.activeSpeech.createdOn).format(shareData_settings_1.ShareDataSettings.DateFormat) :
                moment().format(shareData_settings_1.ShareDataSettings.DateFormat);
        }
        this.activeSpeechOldData = Object.assign({}, this.activeSpeech);
        this.isActiveSpeechLoading = false;
        this.busySpinnerService.dispatcher.next(false);
    };
    SpeechComponentBase.prototype.setDispatcher = function () {
        var _this = this;
        this.speechService.dispatcher.subscribe(function (val) {
            if (val !== undefined && Object.keys(val).length > 0 && val.id !== undefined) {
                _this.isActiveSpeech = true;
                _this.setInitialValue(val);
            }
            else {
                _this.isActiveSpeech = false;
                _this.setInitialValue(val);
            }
        });
    };
    SpeechComponentBase.prototype.setOnInItData = function (requestType) {
        var _this = this;
        this.requestType = requestType;
        this.busySpinnerService.dispatcher.next(true);
        this.isActiveSpeechLoading = true;
        this.filterType = this.requestType;
        this.getSpeechListCollection(this.requestType);
        this.speechService.dispatcher.subscribe(function (val) {
            if (val !== undefined && Object.keys(val).length > 0 && val.id !== undefined) {
                _this.isActiveSpeech = true;
                _this.setInitialValue(val);
            }
            else {
                _this.isActiveSpeech = false;
                _this.setInitialValue(undefined);
            }
        });
    };
    return SpeechComponentBase;
}());
exports.SpeechComponentBase = SpeechComponentBase;
//# sourceMappingURL=speechComponentBase.js.map