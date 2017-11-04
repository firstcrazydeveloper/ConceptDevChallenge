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
var speech_model_1 = require("../../model/speech.model");
var shareData_settings_1 = require("../../../../shared/shareData.settings");
var SpeechComponent = (function () {
    function SpeechComponent() {
    }
    SpeechComponent.prototype.ngOnInit = function () {
        if (this.activeSpeech.createdOn === undefined) {
            this.activeSpeech.createdOn = moment().format(shareData_settings_1.ShareDataSettings.DateFormat);
        }
        else {
            this.activeSpeech.createdOn = moment(this.activeSpeech.createdOn).format(shareData_settings_1.ShareDataSettings.DateFormat);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], SpeechComponent.prototype, "screenCommands", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", speech_model_1.Speech)
    ], SpeechComponent.prototype, "activeSpeech", void 0);
    SpeechComponent = __decorate([
        core_1.Component({
            selector: 'speech',
            templateUrl: "./speech.component.html",
            styleUrls: ['./speech.component.min.css']
        }),
        __metadata("design:paramtypes", [])
    ], SpeechComponent);
    return SpeechComponent;
}());
exports.SpeechComponent = SpeechComponent;
//# sourceMappingURL=speech.component.js.map