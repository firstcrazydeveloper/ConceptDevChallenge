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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
require("rxjs/add/operator/do");
require("rxjs/add/operator/delay");
var webApiManager_service_1 = require("./webApiManager.service");
var appSettings_setting_1 = require("../../appSettings.setting");
var AuthService = (function () {
    //TODO -- remove this Test Data Section after Web API implementation
    // Start TestData Section  
    // testUserData: Array<User> = [{ id: 1, userid: 'abhishek', password: 'sahil', email: 'abhishek.job@hotmail.com' },
    // { id: 2, userid: 'josh', password: 'rosman', email: 'sample@hotmail.com' }];
    // End TestData Section  
    function AuthService(webApiService) {
        this.webApiService = webApiService;
        this.isLoggedIn = false;
        this.userData = null;
        this.userName = 'Guest';
    }
    AuthService_1 = AuthService;
    //TODO -- remove this code after Web API implementation
    // public static loginUrl = 'src/assets/userdata.json';
    // public static navMenuUrl = 'assets/userdata.json';
    AuthService.prototype.login = function (id, password) {
        //TODO: Need to implement Actual login logic
        // return Observable.of(true).delay(1000).do(val => this.verifuser(id, password));
        var param = {
            userId: id,
            password: password
        };
        this.userData = this.webApiService.post(AuthService_1.loginUrl, param, undefined);
        return this.userData;
    };
    AuthService.prototype.setUserDetails = function (currentUser) {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.token = null;
        this.isLoggedIn = false;
        this.currentUser = undefined;
        this.userName = 'Guest';
        localStorage.removeItem('currentUser');
        return Observable_1.Observable.of(true).delay(1000).do(function (val) { return _this.isLoggedIn = false; });
    };
    //TODO -- uncomment this code after Web API implementation
    AuthService.loginUrl = appSettings_setting_1.AppSettings.BaseAPIUrl + 'login';
    AuthService = AuthService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [webApiManager_service_1.WebApiManager])
    ], AuthService);
    return AuthService;
    var AuthService_1;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map