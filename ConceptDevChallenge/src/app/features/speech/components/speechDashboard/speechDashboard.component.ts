import { Component } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ShareSpeechContent } from '../../../../common/components/sharepeech/sharespeech.component';
import { SpeechService } from '../../speech.service';
import { Navigation } from '../../model/navMenu.model';
import { BusySpinnerService } from '../../../../shared/components/busyspinner/busyspinner.service';
@Component({
    selector: 'speech-dashboard',
    templateUrl: `./speechDashboard.component.html`,
    styleUrls: ['./speechDashboard.component.min.css']
})
export class SpeechDashboardComponent {
    navMenusCollection: Array<Navigation>;
    activeMenu: string;

    constructor(private modalService: NgbModal, public speechService: SpeechService, public busySpinnerService: BusySpinnerService) { }

    ngOnInit() {
        this.getNavMenusCollection();
    }

    getNavMenusCollection(): void {
        this.busySpinnerService.dispatcher.next(true);
        this.speechService.getSpeechDashBoardNavigationMenu()
            .subscribe(navmenus => {
                this.navMenusCollection = navmenus;
                this.activeMenu = this.navMenusCollection[0].routeLink;
                this.busySpinnerService.dispatcher.next(false);
            });
    }
}