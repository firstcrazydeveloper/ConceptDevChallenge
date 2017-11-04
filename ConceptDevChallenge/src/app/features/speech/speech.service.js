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
var webApiManager_service_1 = require("../../shared/service/webApiManager.service");
var appSettings_setting_1 = require("../../../app/appSettings.setting");
var Rx_1 = require("rxjs/Rx");
var Subject_1 = require("rxjs/Subject");
var auth_service_1 = require("../../shared/service/auth.service");
var speechSearch_model_1 = require("./model/speechSearch.model");
var SpeechService = (function () {
    //TODO -- remove this Test Data Section after Web API implementation
    // Start TestData Section  
    // End TestData Section
    function SpeechService(webApiService, authService) {
        this.webApiService = webApiService;
        this.authService = authService;
        this.speechCollection = null;
        this.speech = null;
        this.navigationMenu = null;
        this.dispatcher = new Subject_1.Subject();
        this.isSearch = false;
        this.speechSearch = new speechSearch_model_1.SpeechSearch();
    }
    SpeechService_1 = SpeechService;
    //TODO -- remove this code after Web API implementation
    //public static speechesUrl = 'src/assets/speechdata.json';
    //public static navMenuUrl = 'src/assets/navigationdata.json';
    //public static speechesUrl = 'assets/speechdata.json';
    //public static navMenuUrl = 'assets/navigationdata.json';
    SpeechService.prototype.getGlobalSearchSpeechCollection = function (searchKey) {
        var param = {
            searchKey: searchKey
        };
        this.speechCollection = this.webApiService.get(SpeechService_1.searchSpeechUrl, searchKey);
        return this.speechCollection;
    };
    SpeechService.prototype.getAdvanceSearchSpeechCollection = function (speechSearch) {
        this.speechCollection = this.webApiService.post(SpeechService_1.searchSpeechUrl, speechSearch, this.authService.token);
        return this.speechCollection;
    };
    SpeechService.prototype.getSpeechCollection = function () {
        //TODO -- remove this code after Web API implementation
        // return Observable.of(this.testDataSpeechList).delay(10);
        // TODO -- uncomment this code after Web API implementation
        this.speechCollection = this.webApiService.get(SpeechService_1.speechesUrl, this.authService.token);
        return this.speechCollection;
    };
    SpeechService.prototype.getSpeech = function (speechId) {
        var modifiedUrl = SpeechService_1.speechesUrl + '/' + speechId;
        this.speech = this.webApiService.get(modifiedUrl, this.authService.token);
        return modifiedUrl;
    };
    SpeechService.prototype.AddOrUpdateSpeech = function (speech) {
        //TODO -- remove this code after Web API implementation
        //if (speech.id === undefined) {
        //    speech.id = this.generateUniqueId();
        //}
        //else {
        //    this.testDataSpeechList = this.testDataSpeechList.filter(item => item.id !== speech.id);
        //}
        //this.testDataSpeechList.push(speech);
        //return Observable.of(true).delay(10);
        //TODO -- uncomment this code after Web API implementation
        return this.webApiService.post(SpeechService_1.speechesUrl, speech, this.authService.token);
    };
    SpeechService.prototype.AddSpeech = function (speech) {
        return this.webApiService.post(SpeechService_1.speechesUrl, speech, this.authService.token);
    };
    SpeechService.prototype.DeleteSpeech = function (speech) {
        // this.testDataSpeechList = this.testDataSpeechList.filter(item => item.id !== speech.id);
        return Rx_1.Observable.of(true).delay(10);
    };
    SpeechService.prototype.clearCache = function () {
        this.speechCollection = null;
        this.speech = null;
    };
    SpeechService.prototype.shareSpeech = function (userEmail, subject, content) {
        return Rx_1.Observable.of(true).delay(100);
    };
    SpeechService.prototype.getSpeechDashBoardNavigationMenu = function () {
        this.navigationMenu = this.webApiService.get(SpeechService_1.navMenuUrl, this.authService.token);
        return this.navigationMenu;
    };
    //TODO -- remove this method after Web API implementation
    SpeechService.prototype.generateUniqueId = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    //TODO -- uncomment this code after Web API implementation
    SpeechService.speechesUrl = appSettings_setting_1.AppSettings.BaseAPIUrl + 'speech';
    SpeechService.navMenuUrl = appSettings_setting_1.AppSettings.BaseAPIUrl + 'speechMenu';
    SpeechService.searchSpeechUrl = appSettings_setting_1.AppSettings.BaseAPIUrl + 'searchSpeech';
    SpeechService = SpeechService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [webApiManager_service_1.WebApiManager, auth_service_1.AuthService])
    ], SpeechService);
    return SpeechService;
    var SpeechService_1;
}());
exports.SpeechService = SpeechService;
//# sourceMappingURL=speech.service.js.map