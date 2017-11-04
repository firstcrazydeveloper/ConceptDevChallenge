import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    NavigationExtras,
    CanLoad, Route
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        // console.log('AuthGuard#canActivate called');
        return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    canLoad(route: Route): boolean {
        let url = `/${route.path}`;
        // console.log('canLoad');
        // console.log(this.authService.isLoggedIn);
        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        let data = url;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser !== null && currentUser !== undefined) {
            this.authService.currentUser = currentUser;
            this.authService.token = currentUser.token;
            this.authService.userName = currentUser.firstName;
            this.authService.isLoggedIn = true;
            return true;
        }

        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        // console.log(url);
        // Create a dummy session id
        let sessionId = 123456789;

        // Set our navigation extras object
        // that contains our global query params and fragment
        let navigationExtras: NavigationExtras = {
            queryParams: { 'session_id': sessionId },
            fragment: 'anchor'
        };

        // Navigate to the login page with extras
        this.router.navigate(['/login'], navigationExtras);
        return false;
    }
}