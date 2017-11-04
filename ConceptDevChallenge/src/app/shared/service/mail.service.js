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
require("rxjs/add/observable/of");
require("rxjs/add/operator/do");
require("rxjs/add/operator/delay");
var webApiManager_service_1 = require("./webApiManager.service");
var auth_service_1 = require("./auth.service");
var appSettings_setting_1 = require("../../appSettings.setting");
var MailService = (function () {
    //TODO -- remove this Test Data Section after Web API implementation
    // Start TestData Section  
    // testUserData: Array<User> = [{ id: 1, userid: 'abhishek', password: 'sahil', email: 'abhishek.job@hotmail.com' },
    // { id: 2, userid: 'josh', password: 'rosman', email: 'sample@hotmail.com' }];
    // End TestData Section  
    function MailService(webApiService, authService) {
        this.webApiService = webApiService;
        this.authService = authService;
        console.log('start Mail Service');
    }
    MailService_1 = MailService;
    MailService.prototype.sendMail = function (mail) {
        return this.webApiService.post(MailService_1.mailUrl, mail, this.authService.token);
    };
    MailService.mailUrl = appSettings_setting_1.AppSettings.BaseAPIUrl + 'mail';
    MailService = MailService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [webApiManager_service_1.WebApiManager, auth_service_1.AuthService])
    ], MailService);
    return MailService;
    var MailService_1;
}());
exports.MailService = MailService;
//# sourceMappingURL=mail.service.js.map