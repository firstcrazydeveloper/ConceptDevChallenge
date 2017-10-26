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
var AuthService = (function () {
    // End TestData Section  
    function AuthService() {
        this.isLoggedIn = false;
        // Start TestData Section  
        this.testUserData = [{ id: 1, userid: 'abhishek', password: 'sahil', email: 'abhishek.job@hotmail.com' },
            { id: 2, userid: 'josh', password: 'rosman', email: 'sample@hotmail.com' }];
        console.log('start AuthService');
    }
    // public static navMenuUrl = 'assets/userdata.json';
    AuthService.prototype.login = function (id, password) {
        var _this = this;
        //TODO: Need to implement Actual login logic
        return Observable_1.Observable.of(true).delay(1000).do(function (val) { return _this.verifuser(id, password); });
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
    };
    AuthService.prototype.verifuser = function (id, password) {
        var userList = this.testUserData.filter(function (user) { return user.userid === id && user.password === password; });
        if (userList != undefined && userList.length > 0) {
            this.currentUser = userList[0];
            this.isLoggedIn = true;
        }
        else {
            this.isLoggedIn = false;
        }
    };
    AuthService.navMenuUrl = 'src/assets/userdata.json';
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map