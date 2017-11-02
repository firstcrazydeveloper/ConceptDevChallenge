import { Component, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SpeechComponentBase } from '../../speechComponentBase';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SpeechService } from '../../speech.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AuthService } from '../../../../shared/service/auth.service';
import { NavMenuService } from '../../../../shared/components/navmenu/navmenu.service';
import { BusySpinnerService } from '../../../../shared/components/busyspinner/busyspinner.service';
import { Speech } from '../../model/speech.model';
declare var moment: any;
@Component({
    selector: 'speech-page',
    templateUrl: `./newSpeech.component.html`,
    styleUrls: ['./newSpeech.component.min.css']
})
export class NewSpeechComponent extends SpeechComponentBase {
    requestType: string = 'new';
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
        this.filterType = this.requestType;
        this.activeSpeech = new Speech();
        this.changedetector.detectChanges();
        // alert(this.valuedate);
    }

    ngOnChanges(changes: any) {
        console.log('start change');
        for (let propName in changes) {
            let chng = changes[propName];
            console.log(chng);
        }
    }

    buildUICommand() {
        this.screenCommands.push({
            disabled: true, hidden: false, title: 'Delete', class: 'btn btn-primary  buttonSmall',
            handler: () => {
            }
        });

        this.screenCommands.push({
            disabled: false, hidden: false, title: 'Save', class: 'btn btn-primary  buttonSmall',
            handler: () => {
                this.activeSpeech.createdBy = this.authService.currentUser.id;
                this.activeSpeech.createdOn = moment(this.activeSpeech.createdOn).utc().format();
                this.activeSpeech.updatedOn = moment(this.activeSpeech.updatedOn).utc().format();
                this.activeSpeech.isDeleted = false;
                this.busySpinnerService.dispatcher.next(true);
                this.speechService.AddSpeech(this.activeSpeech).subscribe(() => {
                    this.successToaster('Your speech saved successfully!');
                    this.activeSpeech = new Speech();
                    //TODO -- If want to redirect default page after saved then uncomment this code
                    // this.navMenuService.dispatcher.next('userspeech');
                    //  this.router.navigate(['speechDashboard/userspeech']);
                    this.busySpinnerService.dispatcher.next(false);
                });
            }
        });

        this.screenCommands.push({
            disabled: true, hidden: false, title: 'Share', class: 'btn btn-primary  buttonSmall',
            handler: () => {
                this.openShareModel();
            }
        });
    }

    successToaster(msg: string) {
        this.toastr.success(msg, 'Success!');
    }
}