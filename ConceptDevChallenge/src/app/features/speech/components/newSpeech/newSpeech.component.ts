import { Component, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SpeechComponentBase } from '../../speechComponentBase';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SpeechService } from '../../speech.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AuthService } from '../../../../shared/service/auth.service';
import { NavMenuService } from '../../../../shared/components/navmenu/navmenu.service';
import { BusySpinnerService } from '../../../../shared/components/busyspinner/busyspinner.service';
import { Speech } from '../../model/speech.model';
@Component({
    selector: 'speech-page',
    templateUrl: `./newSpeech.component.html`,
    styleUrls: ['./newSpeech.component.min.css']
})
export class NewSpeechComponent extends SpeechComponentBase {
    requestType: string = 'new';
    constructor(private router: Router, public route: ActivatedRoute, public modalService: NgbModal, public speechService: SpeechService,
        public toastr: ToastsManager, public vcr: ViewContainerRef, public authService: AuthService, public navMenuService: NavMenuService,
        public busySpinnerService: BusySpinnerService) {
        super(modalService, route, speechService, authService, busySpinnerService);
        this.toastr.setRootViewContainerRef(vcr);
        this.buildUICommand();
    }

    ngOnInit() {
        this.filterType = this.requestType;
    }
    buildUICommand() {
        this.screenCommands.push({
            disabled: true, hidden: false, title: 'Delete', class: 'btn btn-danger  buttonSmall',
            handler: () => {
            }
        });

        this.screenCommands.push({
            disabled: false, hidden: false, title: 'Save', class: 'btn btn-success  buttonSmall',
            handler: () => {
                this.activeSpeech.userId = this.authService.currentUser.id;
                this.busySpinnerService.dispatcher.next(true);
                this.speechService.AddOrUpdateSpeech(this.activeSpeech).subscribe(() => {
                    this.toastr.success('Your speech saved successfully!', 'Success!');
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
}