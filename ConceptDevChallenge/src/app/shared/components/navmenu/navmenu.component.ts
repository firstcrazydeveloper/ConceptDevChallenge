import { Component, Input, Output, Renderer2, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NavMenuService } from './navmenu.service';
import { BusySpinnerService } from '../../../shared/components/busyspinner/busyspinner.service';

@Component({
    selector: 'nav-menu',
    templateUrl: `./navmenu.component.html`,
    styleUrls: ['./navmenu.component.min.css']
})
export class NavMenuComponent {
    @Input() navMenus: Array<any>;
    @Input() activeMenu: string;

    constructor(private router: Router, public navMenuService: NavMenuService, public busySpinnerService: BusySpinnerService) {

    }

    ngOnInit() {
        this.navMenuService.dispatcher.subscribe((val: any) => { this.activeMenu = val });

    }



    navigate(routeName: string) {
        this.busySpinnerService.dispatcher.next(true);
        this.navMenuService.dispatcher.next(routeName);
        this.activeMenu = routeName;
        this.router.navigate(['speechDashboard/' + routeName]);
    }

}