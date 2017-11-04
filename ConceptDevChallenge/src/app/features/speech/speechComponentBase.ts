import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ShareSpeechContent } from '../../common/components/sharepeech/sharespeech.component';
import { ActivatedRoute, Params, Router, UrlSegment } from '@angular/router';
import { SpeechService } from './speech.service';
import { Speech } from './model/speech.model';
import { AuthService } from '../../shared/service/auth.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { SpeechConstant } from './speechConstants';
import { ShareDataSettings } from '../../shared/shareData.settings';
declare var moment: any;

import { BusySpinnerService } from '../../shared/components/busyspinner/busyspinner.service';
export abstract class SpeechComponentBase {
    requestType: string;
    isActiveSpeech: Boolean = false;
    isActiveSpeechLoading: Boolean = true;
    filterType: string;
    activeMenu: string;
    activeSpeech: Speech = new Speech();
    activeSpeechOldData: Speech = new Speech();
    screenCommands: Array<any> = [];
    speechList: Array<Speech> = [];
    constructor(public modalService: NgbModal, public route: ActivatedRoute, public speechService: SpeechService,
        public authService: AuthService, public busySpinnerService: BusySpinnerService, public toastr: ToastsManager) {
        this.route.url.forEach((segments: UrlSegment[]) => {
            this.activeMenu = segments.join("/");
        });
    }

    getSpeechListCollection(requestType: string): void {
        let currentUser = this.authService.currentUser;
        if (requestType == SpeechConstant.AllSpeech_RequestType) {
            this.getAllSpeechCollection();

        }
        else {
            this.getUserSpecificSpeechCollection(currentUser.id);
        }


    }

    getUserSpecificSpeechCollection(id: number) {
        this.speechService.getSpeechCollection()
            .subscribe(speechList => {
                speechList = speechList.filter((d: Speech) => d.createdBy === id);
                this.setSpeechListData(speechList);
            },
            err => {
                this.toastr.error('We are getting error to connect with server! Try again', 'Oops!'); console.log(err)
                this.busySpinnerService.dispatcher.next(false);
            });

    }

    getAllSpeechCollection() {
        this.speechService.getSpeechCollection()
            .subscribe(speechList => {
                this.setSpeechListData(speechList);
            },
            err => {
                this.toastr.error('We are getting error to connect with server! Try again', 'Oops!'); console.log(err)
                this.busySpinnerService.dispatcher.next(false);
            });
    }


    setSpeechListData(speechList: any): void {
        this.speechList = speechList;
        if (this.speechList !== undefined && this.speechList.length > 0) {
            this.activeSpeech = this.speechList[0];
            this.activeSpeech.createdOn = this.activeSpeech.createdOn !== undefined ? moment(this.activeSpeech.createdOn).format(ShareDataSettings.DateFormat) :
                moment().format(ShareDataSettings.DateFormat);
            this.activeSpeechOldData = Object.assign({}, this.activeSpeech);
        }
        else {
            this.activeSpeech = undefined;
        }
        this.speechService.dispatcher.next(this.activeSpeech);
        this.busySpinnerService.dispatcher.next(false);
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

    setInitialValue(val: any) {
        this.activeSpeech = val;
        if (val !== undefined) {
            this.activeSpeech.createdOn = this.activeSpeech.createdOn !== undefined ? moment(this.activeSpeech.createdOn).format(ShareDataSettings.DateFormat) :
                moment().format(ShareDataSettings.DateFormat);
        }
        this.activeSpeechOldData = Object.assign({}, this.activeSpeech);
        this.isActiveSpeechLoading = false;
        this.busySpinnerService.dispatcher.next(false);

    }

    setDispatcher() {
        this.speechService.dispatcher.subscribe((val: any) => {
            if (val !== undefined && Object.keys(val).length > 0 && val.id !== undefined) {
                this.isActiveSpeech = true;
                this.setInitialValue(val);
            }
            else {
                this.isActiveSpeech = false;
                this.setInitialValue(val);
            }
        });
    }

    setOnInItData(requestType: string) {
        this.requestType = requestType;
        this.busySpinnerService.dispatcher.next(true);
        this.isActiveSpeechLoading = true;
        this.filterType = this.requestType;
        this.getSpeechListCollection(this.requestType);
        this.speechService.dispatcher.subscribe((val: any) => {
            if (val !== undefined && Object.keys(val).length > 0 && val.id !== undefined) {
                this.isActiveSpeech = true;
                this.setInitialValue(val);
            }
            else {
                this.isActiveSpeech = false;
                this.setInitialValue(undefined);
            }
        });
    }
    abstract buildUICommand(): void;
    abstract successToaster(msg: string): void;

}