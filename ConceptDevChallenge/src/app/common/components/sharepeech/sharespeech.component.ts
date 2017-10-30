import { Component, ViewContainerRef, Input } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MailService } from '../../../shared/service/mail.service';
import { Mail } from '../../../shared/model/mail.model';
import { BusySpinnerService } from '../../../shared/components/busyspinner/busyspinner.service';

@Component({
    selector: 'share-speech-modal-content',
    template: ` <busy-spinner [busyIndicator]="isMailSending"></busy-spinner>
    <div class="modal-header">
      <h4 class="modal-title">Share Speech</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <form class="omb_loginForm"  autocomplete="off" #f="ngForm" (ngSubmit)="shareSpeech()">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                        <input type="text" class="form-control" name="subject" [(ngModel)]="subject" required placeholder="mail subject">
                    </div>
                    <div class="input-group" style="margin-top:20px;">
                        <span class="input-group-addon"><i class="fa fa-user" aria-hidden="true"></i></span>
                        <input type="email" class="form-control" name="useremail" [(ngModel)]="userEmail"  pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" email required placeholder="user email">
                    </div>
                    <span class="help-block"></span>
                   
                </form>
     
    </div>
    <div class="modal-footer">
    <button class="btn btn-sm btn-primary" type="button" [disabled]="!f.valid" (click)="shareSpeech()">Share</button>
      <button type="button" class="btn btn-sm btn-primary" (click)="activeModal.close('Close click')">Cancel</button>
    </div>
  `
})
export class ShareSpeechContent {
    @Input() content: string;
    @Input() handler: any;
    userEmail: string;
    subject: string;
    isMailSending: Boolean = false;

    constructor(public activeModal: NgbActiveModal, public mailService: MailService, public toastr: ToastsManager,
        public vcr: ViewContainerRef, public busySpinnerService: BusySpinnerService) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    shareSpeech() {
        this.isMailSending = true;
        let mailData = new Mail();
        mailData.content = this.content;
        mailData.email = this.userEmail;
        mailData.subject = this.subject;
        this.mailService.sendMail(mailData).subscribe(() => {
            this.isMailSending = false;
            this.toastr.success('Your speech shared successfully!', 'Success!');
            this.handler(this.activeModal);
        });
    }
}