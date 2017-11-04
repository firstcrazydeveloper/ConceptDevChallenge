import { Component, Input, Output, Renderer2, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NavMenuService } from './navmenu.service';
import { BusySpinnerService } from '../../../shared/components/busyspinner/busyspinner.service';
import { SpeechService } from '../../../features/speech/speech.service';
import { Speech } from '../../../features/speech/model/speech.model';
import { AuthService } from '../../../shared/service/auth.service';
import { SideMenuService } from '../sidemenu/sidemenu.service';
import { SpeechConstant } from '../../../features/speech/speechConstants';

@Component({
    selector: 'nav-menu',
    templateUrl: `./navmenu.component.html`,
    styleUrls: ['./navmenu.component.min.css']
})
export class NavMenuComponent {
    @Input() navMenus: Array<any>;
    @Input() activeMenu: string;
    isActiveSpeechLoading: boolean = false;

    constructor(private router: Router, public navMenuService: NavMenuService, public busySpinnerService: BusySpinnerService, public speechService: SpeechService,
        public authService: AuthService, public sideMenuService: SideMenuService) {

    }

    ngOnInit() {
        this.navMenuService.dispatcher.subscribe((val: any) => {
            this.activeMenu = val
        });
    }



    navigate(routeName: string) {
        this.busySpinnerService.dispatcher.next(true);
        if (this.activeMenu !== routeName) {
            this.navMenuService.currentNavItem = routeName;
            this.navMenuService.dispatcher.next(routeName);
            this.activeMenu = routeName;
            this.router.navigate(['speechDashboard/' + routeName]);
        }
        else {

            if (this.activeMenu == SpeechConstant.AllSpeech_NavigationMenu) {
                this.getSpeechListCollection(SpeechConstant.AllSpeech_RequestType);
            }
            else if (this.activeMenu === SpeechConstant.SelfSpeech_NavigationMenu) {
                this.getSpeechListCollection(SpeechConstant.SelfSpeech_RequestType);

            }
        }
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
            .subscribe(speechlist => {
                this.sideMenuService.sideMenuDispatcher.next(speechlist);
                this.busySpinnerService.dispatcher.next(false);
            });

    }

    getAllSpeechCollection() {
        this.speechService.getSpeechCollection()
            .subscribe(speechlist => {
                this.sideMenuService.sideMenuDispatcher.next(speechlist);
                this.busySpinnerService.dispatcher.next(false);
            });

    }

}