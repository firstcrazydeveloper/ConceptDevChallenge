import { Component, ViewContainerRef, Input } from '@angular/core';
import { ActivatedRoute, Params, Router, UrlSegment } from '@angular/router';
import { SpeechComponentBase } from '../../speechComponentBase';
import { SpeechService } from '../../speech.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AuthService } from '../../../../shared/service/auth.service';
import { BusySpinnerService } from '../../../../shared/components/busyspinner/busyspinner.service';
import { Speech } from '../../model/speech.model';
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

    ngOnInit() { }
}



