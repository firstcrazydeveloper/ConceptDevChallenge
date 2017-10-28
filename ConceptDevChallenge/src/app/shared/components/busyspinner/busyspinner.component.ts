import { Component, Input, Output, Renderer2, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { BusySpinnerService } from './busyspinner.service';

@Component({
    selector: 'busy-spinner',
    templateUrl: `./busyspinner.component.html`,
    styleUrls: ['./busyspinner.component.min.css']
})
export class BusySpinnerComponent {
    @Input() busyIndicator: Boolean ;

    constructor(public busySpinnerService: BusySpinnerService) {

    }

    ngOnInit() {
        this.busySpinnerService.dispatcher.subscribe((val: Boolean) => { this.busyIndicator = val });

    }
}