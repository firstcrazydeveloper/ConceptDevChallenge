import { Component, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpeechComponentBase } from '../../speechComponentBase';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { SpeechService } from '../../speech.service';
import { NavMenuService } from '../../../../shared/components/navmenu/navmenu.service';
import { AuthService } from '../../../../shared/service/auth.service';
import { BusySpinnerService } from '../../../../shared/components/busyspinner/busyspinner.service';
import { SpeechConstant } from '../../speechConstants';
@Component({
    selector: 'search-result-speech',
    templateUrl: `./searchResultSpeech.component.html`,
    styleUrls: ['./searchResultSpeech.component.min.css']
})
export class SearchResultSpeechComponent extends SpeechComponentBase {
    requestType: string = SpeechConstant.AllSpeech_RequestType;
    constructor(private navMenuService: NavMenuService, public route: ActivatedRoute, public modalService: NgbModal, public speechService: SpeechService,
        public authService: AuthService, public busySpinnerService: BusySpinnerService, public toastr: ToastsManager, public vcr: ViewContainerRef) {
        super(modalService, route, speechService, authService, busySpinnerService, toastr);
        this.toastr.setRootViewContainerRef(vcr);
        this.buildUICommand();
    }

    ngOnInit() {
        this.busySpinnerService.dispatcher.next(true);
        this.isActiveSpeechLoading = true;
        this.getFilterSpeechCollection();
        this.setDispatcher();
    }



    getFilterSpeechCollection() {
        this.speechService.getAdvanceSearchSpeechCollection(this.speechService.speechSearch)
            .subscribe(speechList => {
                this.setSpeechListData(speechList);
                this.busySpinnerService.dispatcher.next(false);
            },
            err => {
                this.toastr.error('We are getting error to connect with server! Try again', 'Oops!'); console.log(err)
                this.busySpinnerService.dispatcher.next(false);
            });
    }


    buildUICommand() {
        this.screenCommands.push({
            disabled: false, hidden: false, title: SpeechConstant.AllSpeech_ShareButton_Title, class: 'btn btn-primary  buttonSmall',
            handler: () => {
                this.openShareModel();
            }
        });
    }

    successToaster(msg: string) {
        this.toastr.success(msg, SpeechConstant.AllSpeech_SucessMsg);
    }
}