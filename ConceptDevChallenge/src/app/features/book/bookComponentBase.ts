import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ShareSpeechContent } from '../../common/components/sharepeech/sharespeech.component';
import { ActivatedRoute, Params, Router, UrlSegment } from '@angular/router';
import { BookService } from './book.service';
import { AuthService } from '../../shared/service/auth.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
declare var moment: any;
import { BusySpinnerService } from '../../shared/components/busyspinner/busyspinner.service';
export abstract class BookComponentBase {

    protected screenCommands: Array<any> = [];
    constructor() {
    }
}