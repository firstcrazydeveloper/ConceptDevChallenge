import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SpeechComponentBase } from '../../speechComponentBase';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SpeechService } from '../../speech.service';
import { AuthService } from '../../../../shared/service/auth.service';
import { BusySpinnerService } from '../../../../shared/components/busyspinner/busyspinner.service';
@Component({
    selector: 'speech-page',
    templateUrl: `./allSpeech.component.html`,
    styleUrls: ['./allSpeech.component.min.css']
})
export class AllSpeechComponent extends SpeechComponentBase {
    requestType: string = 'all';
    constructor(private router: Router, public route: ActivatedRoute, public modalService: NgbModal, public speechService: SpeechService,
        public authService: AuthService, public busySpinnerService: BusySpinnerService) {
        super(modalService, route, speechService, authService, busySpinnerService);
        this.buildUICommand();
    }

    ngOnInit() {
        this.filterType = this.requestType;
        this.getSpeechListCollection(this.requestType);
        this.speechService.dispatcher.subscribe((val: any) => { this.activeSpeech = val });
        console.log(this.activeSpeech);
    }

   

    buildUICommand() {
        this.screenCommands.push({
            disabled: true, hidden: false, title: 'Delete', class: 'btn btn-danger  buttonSmall',
            handler: () => {
            }
        });

        this.screenCommands.push({
            disabled: true, hidden: false, title: 'Save', class: 'btn btn-success  buttonSmall',
            handler: () => {
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