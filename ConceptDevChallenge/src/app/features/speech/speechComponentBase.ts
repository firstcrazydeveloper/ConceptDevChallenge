import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ShareSpeechContent } from '../../common/components/sharepeech/sharespeech.component';
import { ActivatedRoute, Params, Router, UrlSegment } from '@angular/router';
import { SpeechService } from './speech.service';
import { Speech } from './model/speech.model';
import { AuthService } from '../../shared/service/auth.service';

import { BusySpinnerService } from '../../shared/components/busyspinner/busyspinner.service';
export abstract class SpeechComponentBase {
   
    filterType: string;
    activeMenu: string;
    speechList: Array<Speech> = [];
    activeSpeech: Speech = new Speech();
    protected screenCommands: Array<any> = [];
    constructor(public modalService: NgbModal, public route: ActivatedRoute, public speechService: SpeechService, public authService: AuthService, public busySpinnerService: BusySpinnerService) {
        this.route.url.forEach((segments: UrlSegment[]) => {
            this.activeMenu = segments.join("/");
        });
    }

    getSpeechListCollection(requestType: string): void {
        this.busySpinnerService.dispatcher.next(true);
        let currentUser = this.authService.currentUser;
        if (requestType == 'all') {
            this.getAllSpeechCollection();

        }
        else {
            this.getUserSpecificSpeechCollection(currentUser.id);
        }


    }

    getUserSpecificSpeechCollection(id: number) {
        this.speechService.getSpeechCollection()
            .subscribe(speechlist => {
                this.speechList = speechlist.filter(d => d.userId === id);
                this.activeSpeech = this.speechList[0];
                this.busySpinnerService.dispatcher.next(false);
            });

    }

    getAllSpeechCollection() {
        this.speechService.getSpeechCollection()
            .subscribe(speechlist => {
                this.speechList = speechlist;
                this.activeSpeech = this.speechList[0];
                this.busySpinnerService.dispatcher.next(false);
            });

    }

    openShareModel() {
        const modalRef = this.modalService.open(ShareSpeechContent);
        modalRef.componentInstance.name = 'World';
    }

    abstract buildUICommand(): void;

}