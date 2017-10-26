import { Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'share-speech-modal-content',
    template: `
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
                        <input type="text" class="form-control" name="useremail" [(ngModel)]="userEmail" required placeholder="user email">
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
    @Input() name: string;

    constructor(public activeModal: NgbActiveModal) { }
}