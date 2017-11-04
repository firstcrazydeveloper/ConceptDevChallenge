import { Component, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { SpeechService } from '../../speech.service';
import { SpeechSearch } from '../../model/speechSearch.model';
import { NavMenuService } from '../../../../shared/components/navmenu/navmenu.service';
import { SideMenuService } from '../../../../shared/components/sidemenu/sidemenu.service';
import { BusySpinnerService } from '../../../../shared/components/busyspinner/busyspinner.service';
import { SpeechConstant } from '../../speechConstants';

@Component({
    selector: 'search-speech',
    templateUrl: `./searchSpeech.component.html`,
    styleUrls: ['./searchSpeech.component.min.css']
})
export class SearchSpeechComponent {

    routeName: string = SpeechConstant.SearchSpeech_RouteName;
    speechSearch: SpeechSearch = new SpeechSearch();

    constructor(private router: Router, public speechService: SpeechService, public busySpinnerService: BusySpinnerService,
        public navMenuService: NavMenuService, public sideMenuService: SideMenuService, public toastr: ToastsManager, public vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() { }

    globalSearch() {
        this.SearchSpeech();
    }

    advanceSearch() {
        this.SearchSpeech();
    }

    SearchSpeech() {
        this.busySpinnerService.dispatcher.next(true);

        if (this.navMenuService.currentNavItem !== this.routeName) {
            this.navMenuService.dispatcher.next(this.routeName);
            this.navMenuService.currentNavItem = this.routeName;
            this.speechService.speechSearch = this.speechSearch;
            this.clearData();
            this.router.navigate(['speechDashboard/' + this.routeName]);
        }
        else {
            this.updateFilterSpeechCollection();
        }
    }

    updateFilterSpeechCollection() {
        this.speechService.getAdvanceSearchSpeechCollection(this.speechSearch)
            .subscribe(speechlist => {
                this.clearData();
                this.sideMenuService.sideMenuDispatcher.next(speechlist);
            },
            err => {
                this.toastr.error('We are getting error to connect with server! Try again', 'Oops!'); console.log(err)
                this.busySpinnerService.dispatcher.next(false);
            });
    }

    clearData() {
        this.speechSearch = new SpeechSearch();
    }
}