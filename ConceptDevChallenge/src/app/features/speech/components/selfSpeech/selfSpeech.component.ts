import { Component, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpeechComponentBase } from '../../speechComponentBase';
import { SpeechService } from '../../speech.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AuthService } from '../../../../shared/service/auth.service';
import { BusySpinnerService } from '../../../../shared/components/busyspinner/busyspinner.service';
import { Speech } from '../../model/speech.model';
import { SpeechConstant } from '../../speechConstants';
declare var moment: any;
@Component({
    selector: 'speech-page',
    templateUrl: `./selfSpeech.component.html`,
    styleUrls: ['./selfSpeech.component.min.css']
})
export class SelfSpeechComponent extends SpeechComponentBase {
    constructor(public modalService: NgbModal, public route: ActivatedRoute,
        public speechService: SpeechService, public toastr: ToastsManager, public vcr: ViewContainerRef, public authService: AuthService,
        public busySpinnerService: BusySpinnerService) {
        super(modalService, route, speechService, authService, busySpinnerService, toastr);
        this.toastr.setRootViewContainerRef(vcr);
        this.buildUICommand();

    }

    ngOnInit() {
        this.setOnInItData(SpeechConstant.SelfSpeech_RequestType);
    }

    buildUICommand() {
        this.screenCommands = [];
        this.screenCommands.push({
            disabled: false, hidden: false, title: SpeechConstant.SelfSpeech_DeleteButton_Title, class: 'btn btn-primary  buttonSmall',
            handler: () => {
                this.activeSpeech.isDeleted = true;
                this.busySpinnerService.dispatcher.next(true);
                this.speechService.AddSpeech(this.activeSpeech).subscribe(() => {
                    this.toastr.success(SpeechConstant.SelfSpeech_DeleteButton_SuccessMessage, SpeechConstant.ToasterSuccess);
                    this.activeSpeech = new Speech();
                    //TODO -- If want to redirect default page after saved then uncomment this code
                    // this.navMenuService.dispatcher.next('userspeech');
                    //  this.router.navigate(['speechDashboard/userspeech']);
                    this.setOnInItData(SpeechConstant.SelfSpeech_RequestType);
                });
            }
        });

        this.screenCommands.push({
            disabled: false, hidden: false, title: SpeechConstant.SelfSpeech_UpdateButton_Title, class: 'btn btn-primary  buttonSmall',
            handler: () => {
                this.busySpinnerService.dispatcher.next(true);
                this.activeSpeech.updatedOn = moment(this.activeSpeech.updatedOn).utc().format();
                this.busySpinnerService.dispatcher.next(true);
                this.speechService.AddSpeech(this.activeSpeech).subscribe(() => {
                    this.successToaster(SpeechConstant.SelfSpeech_UpdateButton_SuccessMessage);
                    // this.activeSpeech = new Speech();
                    //TODO -- If want to redirect default page after saved then uncomment this code
                    // this.navMenuService.dispatcher.next('userspeech');
                    //  this.router.navigate(['speechDashboard/userspeech']);
                    this.busySpinnerService.dispatcher.next(false);
                });
            }
        });

        this.screenCommands.push({
            disabled: false, hidden: false, title: SpeechConstant.SelfSpeech_ShareButton_Title, class: 'btn btn-primary  buttonSmall',
            handler: () => {
                this.openShareModel();
            }
        });

        this.screenCommands.push({
            disabled: false, hidden: false, title: SpeechConstant.ResetButton_Title, class: 'btn btn-primary  buttonSmall',
            handler: () => {
                this.activeSpeech = Object.assign({}, this.activeSpeechOldData);
            }
        });
    }

    successToaster(msg: string) {
        this.toastr.success(msg, SpeechConstant.ToasterSuccess);
    }
}