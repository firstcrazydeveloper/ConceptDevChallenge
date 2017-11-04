import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private router: Router) {

    }

    ngOnInit() {
        //this.router.routeReuseStrategy.shouldReuseRoute = function () {
        //    return false;
        //};

        //this.router.events.subscribe((evt) => {
        //    if (evt instanceof NavigationEnd) {
        //        this.router.navigated = false;
        //        window.scrollTo(0, 0);
        //    }
        //});
    }
}
