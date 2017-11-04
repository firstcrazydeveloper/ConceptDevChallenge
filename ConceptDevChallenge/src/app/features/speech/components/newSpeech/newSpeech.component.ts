import { Component, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeechComponentBase } from '../../speechComponentBase';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SpeechService } from '../../speech.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AuthService } from '../../../../shared/service/auth.service';
import { NavMenuService } from '../../../../shared/components/navmenu/navmenu.service';
import { BusySpinnerService } from '../../../../shared/components/busyspinner/busyspinner.service';
import { Speech } from '../../model/speech.model';
import { SpeechConstant } from '../../speechConstants';
import { ShareDataSettings } from '../../../../shared/shareData.settings';
declare var moment: any;
@Component({
    selector: 'speech-page',
    templateUrl: `./newSpeech.component.html`,
    styleUrls: ['./newSpeech.component.min.css']
})
export class NewSpeechComponent extends SpeechComponentBase {
    requestType: string = SpeechConstant.NewSpeech_RequestType;
    private changedetector: ChangeDetectorRef;
    constructor(private router: Router, private changedetectorref: ChangeDetectorRef, public route: ActivatedRoute, public modalService: NgbModal, public speechService: SpeechService,
        public toastr: ToastsManager, public vcr: ViewContainerRef, public authService: AuthService, public navMenuService: NavMenuService,
        public busySpinnerService: BusySpinnerService) {
        super(modalService, route, speechService, authService, busySpinnerService, toastr);
        this.toastr.setRootViewContainerRef(vcr);
        this.buildUICommand();
        this.changedetector = changedetectorref;
    }

    ngOnInit() {
        this.activeSpeech = new Speech();
        this.changedetector.detectChanges();
    }

    ngOnChanges(changes: any) {
        for (let propName in changes) {
            let chng = changes[propName];
        }
    }

    buildUICommand() {

        this.screenCommands.push({
            disabled: false, hidden: false, title: SpeechConstant.NewSpeech_SaveButton_Title, class: 'btn btn-primary  buttonSmall',
            handler: () => {
                this.activeSpeech.createdBy = this.authService.currentUser.id;
                this.activeSpeech.createdOn = moment(this.activeSpeech.createdOn).utc().format();
                this.activeSpeech.updatedOn = moment(this.activeSpeech.updatedOn).utc().format();
                this.activeSpeech.isDeleted = false;
                this.busySpinnerService.dispatcher.next(true);
                this.speechService.AddSpeech(this.activeSpeech).subscribe(() => {
                    this.successToaster(SpeechConstant.NewSpeech_SavedSucessMsg);
                    setTimeout(() => {
                        this.navMenuService.dispatcher.next('userspeech');
                        this.router.navigate(['speechDashboard/userspeech']);
                        this.activeSpeech = new Speech();
                    }, 500)
                    //TODO -- If want to redirect default page after saved then uncomment this code

                },
                    err => {
                        this.toastr.error('We are getting error to connect with server! Try again', 'Oops!'); console.log(err)
                        this.busySpinnerService.dispatcher.next(false);
                    });
            }
        });

        this.screenCommands.push({
            disabled: false, hidden: false, title: SpeechConstant.ClearButton_Title, class: 'btn btn-primary  buttonSmall',
            handler: () => {
                this.activeSpeech = new Speech();
                this.activeSpeech.createdOn = moment().format(ShareDataSettings.DateFormat);
            }
        });
    }

    successToaster(msg: string) {
        this.toastr.success(msg, SpeechConstant.NewSpeech_SucessMsg);
    }
}