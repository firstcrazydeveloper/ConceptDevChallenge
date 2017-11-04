import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SideMenuService {
    sideMenuDispatcher = new Subject();

    constructor() {
    }
}