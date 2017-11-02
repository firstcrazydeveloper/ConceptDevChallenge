import { Component, Input, Renderer2, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { SpeechService } from '../../../features/speech/speech.service';
declare var moment: any;

@Component({
    selector: 'side-menu',
    templateUrl: `./sidemenu.component.html`,
    styleUrls: ['./sidemenu.component.min.css']
})
export class SideMenuComponent {
    @Input() sideMenus: Array<any>;
    @Input() activeSpeech: any;

    constructor(public speechService: SpeechService) { }

    ngAfterContentChecked() {

    }

    ngOnInit() { }

    ngOnChanges(changes: any) {

    }

    loadContent(speech: any) {
        if (speech.createdOn === undefined) {
            speech.createdOn = moment().format("YYYY-MM-DD");
        } else {
            speech.createdOn = moment(speech.createdOn).format("YYYY-MM-DD");
        }
        this.speechService.dispatcher.next(speech);
        this.activeSpeech = speech;
    }

}