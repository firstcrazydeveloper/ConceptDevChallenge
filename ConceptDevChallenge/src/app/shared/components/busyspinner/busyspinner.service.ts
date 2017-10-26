import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BusySpinnerService {
    dispatcher = new Subject();

    constructor() {
        console.log('start BusySpinnerService');
    }
}