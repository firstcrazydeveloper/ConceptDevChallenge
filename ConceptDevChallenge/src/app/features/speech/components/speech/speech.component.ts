import { Component, Input } from '@angular/core';
import { SpeechComponentBase } from '../../speechComponentBase';
import { Speech } from '../../model/speech.model';
import { ShareDataSettings } from '../../../../shared/shareData.settings';
declare var moment: any;
@Component({
    selector: 'speech',
    templateUrl: `./speech.component.html`,
    styleUrls: ['./speech.component.min.css']
})
export class SpeechComponent {
    @Input() screenCommands: Array<any>;
    @Input() activeSpeech: Speech;
    constructor() { }

    ngOnInit() {
        if (this.activeSpeech.createdOn === undefined) {
            this.activeSpeech.createdOn = moment().format(ShareDataSettings.DateFormat);
        } else {
            this.activeSpeech.createdOn = moment(this.activeSpeech.createdOn).format(ShareDataSettings.DateFormat);
        }

    }
}



