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
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var mail_service_1 = require("../../../shared/service/mail.service");
var mail_model_1 = require("../../../shared/model/mail.model");
var busyspinner_service_1 = require("../../../shared/components/busyspinner/busyspinner.service");
var forms_1 = require("@angular/forms");
var ShareSpeechContent = (function () {
    function ShareSpeechContent(activeModal, mailService, toastr, vcr, busySpinnerService) {
        this.activeModal = activeModal;
        this.mailService = mailService;
        this.toastr = toastr;
        this.vcr = vcr;
        this.busySpinnerService = busySpinnerService;
        this.isMailSending = false;
        this.toastr.setRootViewContainerRef(vcr);
    }
    ShareSpeechContent.prototype.ngOnInit = function () {
        this.createFormControls();
        this.createForm();
    };
    ShareSpeechContent.prototype.createFormControls = function () {
        this.subject = new forms_1.FormControl('', forms_1.Validators.required);
        this.useremail = new forms_1.FormControl('', [
            forms_1.Validators.required,
            forms_1.Validators.pattern("[^ @]*@[^ @]*")
        ]);
    };
    ShareSpeechContent.prototype.createForm = function () {
        this.sharespeechform = new forms_1.FormGroup({
            useremail: this.useremail,
            subject: this.subject
        });
    };
    ShareSpeechContent.prototype.shareSpeech = function () {
        var _this = this;
        this.isMailSending = true;
        var mailData = new mail_model_1.Mail();
        mailData.content = this.content;
        mailData.email = this.Email;
        mailData.subject = this.Subject;
        this.mailService.sendMail(mailData).subscribe(function () {
            _this.isMailSending = false;
            _this.toastr.success('Your speech shared successfully!', 'Success!');
            _this.handler(_this.activeModal);
        });
    };
    Object.defineProperty(ShareSpeechContent.prototype, "Email", {
        get: function () { return this.sharespeechform.get('useremail').value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareSpeechContent.prototype, "Subject", {
        get: function () { return this.sharespeechform.get('subject').value; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ShareSpeechContent.prototype, "content", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ShareSpeechContent.prototype, "handler", void 0);
    ShareSpeechContent = __decorate([
        core_1.Component({
            selector: 'share-speech-modal-content',
            templateUrl: "./sharespeech.component.html"
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal, mail_service_1.MailService, ng2_toastr_1.ToastsManager,
            core_1.ViewContainerRef, busyspinner_service_1.BusySpinnerService])
    ], ShareSpeechContent);
    return ShareSpeechContent;
}());
exports.ShareSpeechContent = ShareSpeechContent;
//# sourceMappingURL=sharespeech.component.js.map