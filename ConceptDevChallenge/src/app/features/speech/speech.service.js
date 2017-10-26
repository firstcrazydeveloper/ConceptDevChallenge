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
var Rx_1 = require("rxjs/Rx");
var Subject_1 = require("rxjs/Subject");
var SpeechService = (function () {
    // End TestData Section
    function SpeechService(webApiService) {
        this.webApiService = webApiService;
        this.speechCollection = null;
        this.speech = null;
        this.navigationMenu = null;
        this.dispatcher = new Subject_1.Subject();
        // Start TestData Section  
        this.testDataSpeechList = [{ id: this.generateUniqueId(), userId: 1, title: 'Speech 1', author: 'Abhishek', keywords: '', date: new Date(), content: 'Sample Data for Speech 1' },
            { id: this.generateUniqueId(), userId: 2, title: 'Speech 2', author: 'Sahil', keywords: '', date: new Date(), content: 'Sample Data for Speech 2' },
            { id: this.generateUniqueId(), userId: 3, title: 'Speech 3', author: 'Amit', keywords: '', date: new Date(), content: 'Sample Data for Speech 3' },
            { id: this.generateUniqueId(), userId: 1, title: 'Speech 4', author: 'Deepak', keywords: '', date: new Date(), content: 'Sample Data for Speech 4' },
            { id: this.generateUniqueId(), userId: 5, title: 'Speech 5', author: 'Sumit', keywords: '', date: new Date(), content: 'Sample Data for Speech 5' },
            { id: this.generateUniqueId(), userId: 1, title: 'Speech 6', author: 'Vinod', keywords: '', date: new Date(), content: 'Sample Data for Speech 6' }];
    }
    SpeechService_1 = SpeechService;
    //public static speechesUrl = 'assets/speechdata.json';
    //public static navMenuUrl = 'assets/navigationdata.json';
    SpeechService.prototype.getSpeechCollection = function () {
        return Rx_1.Observable.of(this.testDataSpeechList).delay(10);
        //this.speechCollection = this.webApiService.get(SpeechService.speechesUrl);
        //return this.speechCollection;
    };
    SpeechService.prototype.getSpeech = function (speechId) {
        var modifiedUrl = SpeechService_1.speechesUrl + '/' + speechId;
        this.speech = this.webApiService.get(modifiedUrl);
        return modifiedUrl;
    };
    SpeechService.prototype.AddOrUpdateSpeech = function (speech) {
        if (speech.id === undefined) {
            speech.id = this.generateUniqueId();
        }
        else {
            this.testDataSpeechList = this.testDataSpeechList.filter(function (item) { return item.id !== speech.id; });
        }
        this.testDataSpeechList.push(speech);
        return Rx_1.Observable.of(true).delay(10);
        // return this.webApiService.post(SpeechService.speechesUrl, speech);
    };
    SpeechService.prototype.DeleteSpeech = function (speech) {
        this.testDataSpeechList = this.testDataSpeechList.filter(function (item) { return item.id !== speech.id; });
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
        // return Observable.of(this.testDataNavMenu).delay(100);
        this.navigationMenu = this.webApiService.get(SpeechService_1.navMenuUrl);
        return this.navigationMenu;
    };
    SpeechService.prototype.generateUniqueId = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    //public static speechesUrl = AppSettings.BaseAPIUrl + 'speechlist';
    //public static navMenuUrl = AppSettings.BaseAPIUrl + 'navigationlist';
    SpeechService.speechesUrl = 'src/assets/speechdata.json';
    SpeechService.navMenuUrl = 'src/assets/navigationdata.json';
    SpeechService = SpeechService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [webApiManager_service_1.WebApiManager])
    ], SpeechService);
    return SpeechService;
    var SpeechService_1;
}());
exports.SpeechService = SpeechService;
//# sourceMappingURL=speech.service.js.map