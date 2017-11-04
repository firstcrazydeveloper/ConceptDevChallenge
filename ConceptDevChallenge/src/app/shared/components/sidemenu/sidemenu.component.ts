import { Component, Input, Renderer2, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { SpeechService } from '../../../features/speech/speech.service';
import { SideMenuService } from './sidemenu.service';
import { ShareDataSettings } from '../../shareData.settings';
declare var moment: any;

@Component({
    selector: 'side-menu',
    templateUrl: `./sidemenu.component.html`,
    styleUrls: ['./sidemenu.component.min.css']
})
export class SideMenuComponent {
    @Input() sideMenus: Array<any>;
    @Input() activeSpeech: any;

    constructor(public speechService: SpeechService, public sideMenuService: SideMenuService) { }

    ngAfterContentChecked() { }

    ngOnInit() {

        this.sideMenuService.sideMenuDispatcher.subscribe((sideMenusList: any) => {
            this.sideMenus = sideMenusList;
            if (this.sideMenus !== undefined && this.sideMenus.length > 0) {
                this.activeSpeech = this.sideMenus[0];
                this.updateDateFormat(this.activeSpeech);
            }
            else {
                this.activeSpeech = undefined;
            }
            this.speechService.dispatcher.next(this.activeSpeech);
        });

    }

    ngOnChanges(changes: any) {

    }

    updateDateFormat(activeSpeech: any) {
        if (activeSpeech.createdOn === undefined) {
            activeSpeech.createdOn = moment().format(ShareDataSettings.DateFormat);

        } else {
            activeSpeech.createdOn = moment(activeSpeech.createdOn).format(ShareDataSettings.DateFormat);
        }
    }

    loadContent(speech: any) {
        this.updateDateFormat(speech);
        this.speechService.dispatcher.next(speech);
        this.activeSpeech = speech;
    }

}