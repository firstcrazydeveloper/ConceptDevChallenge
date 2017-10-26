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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/toPromise");
var WebApiManager = (function () {
    function WebApiManager(http) {
        this.http = http;
        var headerObj = new http_1.Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        var headers = new http_1.Headers(headerObj);
        this.requestOptions = new http_1.RequestOptions({ headers: headers });
    }
    WebApiManager.prototype.post = function (url, dataToPost) {
        console.log("Angular2 - Making HTTP POST -> URL: " + url + ", with DATA: " + JSON.stringify(dataToPost));
        return this.http.post(url, dataToPost)
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebApiManager.prototype.get = function (url, getParameters) {
        if (getParameters === void 0) { getParameters = undefined; }
        console.log("Angular2 - Making HTTP GET -> URL: " + url);
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .do(function (response) { return console.log('fetched ' + url); })
            .publishReplay(1)
            .refCount()
            .catch(this.handleError);
    };
    WebApiManager.prototype.handleError = function (error) {
        // TODO - Do proper logging
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    WebApiManager.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    WebApiManager = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], WebApiManager);
    return WebApiManager;
}());
exports.WebApiManager = WebApiManager;
//# sourceMappingURL=webApiManager.service.js.map