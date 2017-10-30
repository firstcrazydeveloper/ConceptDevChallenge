import { Component, ViewContainerRef } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../../../shared/service/auth.service';
import { User } from '../../../shared/model/user.model';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { BusySpinnerService } from '../../../shared/components/busyspinner/busyspinner.service';

@Component({
    selector: 'top-menu',
    templateUrl: `./topmenu.component.html`,
    styleUrls: ['./topmenu.component.min.css']
})
export class TopMenuComponent {
    userName: string = 'Guest';
    navigationExtras: NavigationExtras = {
        preserveQueryParams: true,
        preserveFragment: true
    };

    constructor(public router: Router, public authService: AuthService, public toastr: ToastsManager,
        public vcr: ViewContainerRef, public busySpinnerService: BusySpinnerService) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    logout() {
        this.busySpinnerService.dispatcher.next(true);
        this.authService.logout().subscribe(() => {
            this.authService.isLoggedIn = false;
            this.authService.userName = 'Guest';
            this.authService.currentUser = undefined;
            this.router.navigate(['login'], this.navigationExtras);
        });
    }

    redirect(url: string) {
        this.router.navigate([url], this.navigationExtras);

    }
}