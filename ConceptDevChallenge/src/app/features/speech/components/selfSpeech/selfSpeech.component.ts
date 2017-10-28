import { Component, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params, Router, UrlSegment } from '@angular/router';
import { SpeechComponentBase } from '../../speechComponentBase';
import { SpeechService } from '../../speech.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AuthService } from '../../../../shared/service/auth.service';
import { BusySpinnerService } from '../../../../shared/components/busyspinner/busyspinner.service';
import { Speech } from '../../model/speech.model';
declare var moment: any;
@Component({
    selector: 'speech-page',
    templateUrl: `./selfSpeech.component.html`,
    styleUrls: ['./selfSpeech.component.min.css']
})
export class SelfSpeechComponent extends SpeechComponentBase {
    requestType: string = 'user';
    constructor(private router: Router, public modalService: NgbModal, public route: ActivatedRoute,
        public speechService: SpeechService, public toastr: ToastsManager, public vcr: ViewContainerRef, public authService: AuthService,
        public busySpinnerService: BusySpinnerService) {
        super(modalService, route, speechService, authService, busySpinnerService);
        this.toastr.setRootViewContainerRef(vcr);
        this.buildUICommand();

    }

    ngOnInit() {
        this.busySpinnerService.dispatcher.next(true);
        this.isActiveSpeechLoading = true;
        this.filterType = this.requestType;
        this.getSpeechCollection();

    }

    getSpeechCollection() {
        this.getSpeechListCollection(this.requestType);
        this.speechService.dispatcher.subscribe((val: any) => {
            if (val !== undefined) {
                this.isActiveSpeech = true;
                this.setInitialValue(val);
            }
            else {
                this.isActiveSpeech = false;
                this.setInitialValue(val);
            }
            
        });
    }

    setInitialValue(val:any) {
        this.activeSpeech = val;
        this.isActiveSpeechLoading = false;
        this.busySpinnerService.dispatcher.next(false);

    }



    buildUICommand() {
        this.screenCommands = [];
        this.screenCommands.push({
            disabled: false, hidden: false, title: 'Delete', class: 'btn btn-danger  buttonSmall',
            handler: () => {
                this.activeSpeech.isDeleted = true;
                this.busySpinnerService.dispatcher.next(true);
                this.speechService.AddSpeech(this.activeSpeech).subscribe(() => {
                    this.toastr.success('Your speech deleted successfully!', 'Success!');
                    this.activeSpeech = new Speech();
                    //TODO -- If want to redirect default page after saved then uncomment this code
                    // this.navMenuService.dispatcher.next('userspeech');
                    //  this.router.navigate(['speechDashboard/userspeech']);
                    this.getSpeechCollection();
                });
            }
        });

        this.screenCommands.push({
            disabled: false, hidden: false, title: 'Update', class: 'btn btn-success  buttonSmall',
            handler: () => {
                this.busySpinnerService.dispatcher.next(true);
                this.activeSpeech.updatedOn = moment(this.activeSpeech.updatedOn).utc().format();
                this.busySpinnerService.dispatcher.next(true);
                this.speechService.AddSpeech(this.activeSpeech).subscribe(() => {
                    this.toastr.success('Your speech updated successfully!', 'Success!');
                    // this.activeSpeech = new Speech();
                    //TODO -- If want to redirect default page after saved then uncomment this code
                    // this.navMenuService.dispatcher.next('userspeech');
                    //  this.router.navigate(['speechDashboard/userspeech']);
                    this.busySpinnerService.dispatcher.next(false);
                });
            }
        });

        this.screenCommands.push({
            disabled: false, hidden: false, title: 'Share', class: 'btn btn-primary  buttonSmall',
            handler: () => {
                this.openShareModel();
            }
        });
    }
}