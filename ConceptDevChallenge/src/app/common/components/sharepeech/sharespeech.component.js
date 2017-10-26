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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ShareSpeechContent = (function () {
    function ShareSpeechContent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ShareSpeechContent.prototype, "name", void 0);
    ShareSpeechContent = __decorate([
        core_1.Component({
            selector: 'share-speech-modal-content',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Share Speech</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n    <form class=\"omb_loginForm\"  autocomplete=\"off\" #f=\"ngForm\" (ngSubmit)=\"shareSpeech()\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></span>\n                        <input type=\"text\" class=\"form-control\" name=\"subject\" [(ngModel)]=\"subject\" required placeholder=\"mail subject\">\n                    </div>\n                    <div class=\"input-group\" style=\"margin-top:20px;\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></span>\n                        <input type=\"text\" class=\"form-control\" name=\"useremail\" [(ngModel)]=\"userEmail\" required placeholder=\"user email\">\n                    </div>\n                    <span class=\"help-block\"></span>\n                   \n                </form>\n     \n    </div>\n    <div class=\"modal-footer\">\n    <button class=\"btn btn-sm btn-primary\" type=\"button\" [disabled]=\"!f.valid\" (click)=\"shareSpeech()\">Share</button>\n      <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"activeModal.close('Close click')\">Cancel</button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
    ], ShareSpeechContent);
    return ShareSpeechContent;
}());
exports.ShareSpeechContent = ShareSpeechContent;
//# sourceMappingURL=sharespeech.component.js.map