import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ShareSpeechContent } from '../../common/components/sharepeech/sharespeech.component';
import { ActivatedRoute, Params, Router, UrlSegment } from '@angular/router';
import { SpeechService } from './speech.service';
import { Speech } from './model/speech.model';
import { AuthService } from '../../shared/service/auth.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
declare var moment: any;

import { BusySpinnerService } from '../../shared/components/busyspinner/busyspinner.service';
export abstract class SpeechComponentBase {
    isActiveSpeech: Boolean = false;
    isActiveSpeechLoading: Boolean = true;
    dateFormat: string = 'MM/dd/yyyy';
    valuedate: string = moment().format('MM/DD/YYYY');
    filterType: string;
    activeMenu: string;
    speechList: Array<Speech> = [];
    activeSpeech: Speech = new Speech();
    protected screenCommands: Array<any> = [];
    constructor(public modalService: NgbModal, public route: ActivatedRoute, public speechService: SpeechService,
        public authService: AuthService, public busySpinnerService: BusySpinnerService, public toastr: ToastsManager) {
        this.route.url.forEach((segments: UrlSegment[]) => {
            this.activeMenu = segments.join("/");
        });
    }

    getSpeechListCollection(requestType: string): void {
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
                this.speechList = speechlist.filter((d: Speech) => d.createdBy === id);
                if (this.speechList !== undefined && this.speechList.length > 0) {
                    this.activeSpeech = this.speechList[0];
                }
                else {
                    this.activeSpeech = undefined;
                }
                this.speechService.dispatcher.next(this.activeSpeech);
            });

    }

    getAllSpeechCollection() {
        this.speechService.getSpeechCollection()
            .subscribe(speechlist => {
                this.speechList = speechlist;
                if (this.speechList !== undefined && this.speechList.length > 0) {
                    this.activeSpeech = this.speechList[0];
                }
                else {
                    this.activeSpeech = undefined;
                }
                this.speechService.dispatcher.next(this.activeSpeech);
            });

    }

    openShareModel() {
        const modalRef = this.modalService.open(ShareSpeechContent);
        modalRef.componentInstance.content = this.activeSpeech.speechContent;
        modalRef.componentInstance.handler = (callback: any) => {
            setTimeout(function () {
                callback.close('Close click');
            }, 1000)
            
        }
    }

    abstract buildUICommand(): void;
    abstract successToaster(msg: string): void;

}