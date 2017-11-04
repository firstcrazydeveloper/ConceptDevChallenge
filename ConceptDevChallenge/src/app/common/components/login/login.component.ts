import { Component, ViewContainerRef } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../../../shared/service/auth.service';
import { User } from '../../../shared/model/user.model';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { BusySpinnerService } from '../../../shared/components/busyspinner/busyspinner.service';


@Component({
    selector: 'login-page',
    templateUrl: `./login.component.html`,
    styleUrls: ['./login.component.min.css']
})
export class LoginComponent {
    id: string;
    password: string;
    user: User = new User();

    constructor(public router: Router, public authService: AuthService, public toastr: ToastsManager,
        public vcr: ViewContainerRef, public busySpinnerService: BusySpinnerService) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    Login() {
        this.busySpinnerService.dispatcher.next(true);
        this.authService.login(this.id, this.password).subscribe((user: User) => {
            if (user.isAunthenticate) {
                this.authService.isLoggedIn = true;
                this.authService.currentUser = user;
                this.authService.setUserDetails(user);
                this.authService.token = user.token;
                this.authService.userName = user.firstName;
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'speechDashboard';
                let navigationExtras: NavigationExtras = {
                    preserveQueryParams: true,
                    preserveFragment: true
                };
                this.router.navigate(['speechDashboard'], navigationExtras);

            }
            else {
                this.busySpinnerService.dispatcher.next(false);
                this.toastr.error('UserId and Password are not correct!', 'Oops!');

            }

        },
            err => {
                this.toastr.error('We are getting error to connect with server! Try again', 'Oops!'); console.log(err)
                this.busySpinnerService.dispatcher.next(false);
            });


    }
}