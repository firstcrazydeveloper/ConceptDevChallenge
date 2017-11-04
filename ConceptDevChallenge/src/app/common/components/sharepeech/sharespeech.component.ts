import { Component, ViewContainerRef, Input } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MailService } from '../../../shared/service/mail.service';
import { Mail } from '../../../shared/model/mail.model';
import { BusySpinnerService } from '../../../shared/components/busyspinner/busyspinner.service';
import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';

@Component({
    selector: 'share-speech-modal-content',
    templateUrl: `./sharespeech.component.html`
})
export class ShareSpeechContent {
    @Input() content: string;
    @Input() handler: any;
    sharespeechform: FormGroup;
    subject: FormControl;
    useremail: FormControl;
    isMailSending: Boolean = false;

    constructor(public activeModal: NgbActiveModal, public mailService: MailService, public toastr: ToastsManager,
        public vcr: ViewContainerRef, public busySpinnerService: BusySpinnerService) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
        this.createFormControls();
        this.createForm();
    }

    createFormControls() {
        this.subject = new FormControl('', Validators.required);
        this.useremail = new FormControl('', [
            Validators.required,
            Validators.pattern("[^ @]*@[^ @]*")
        ]);
    }

    createForm() {
        this.sharespeechform = new FormGroup({
            useremail: this.useremail,
            subject: this.subject
        });
    }

    shareSpeech() {
        this.isMailSending = true;
        let mailData = new Mail();
        mailData.content = this.content;
        mailData.email = this.Email;
        mailData.subject = this.Subject;
        this.mailService.sendMail(mailData).subscribe(() => {
            this.isMailSending = false;
            this.toastr.success('Your speech shared successfully!', 'Success!');
            this.handler(this.activeModal);
        });
    }

    get Email() { return this.sharespeechform.get('useremail').value; }

    get Subject() { return this.sharespeechform.get('subject').value; }
}