"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("../../../shared/service/auth.service");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var busyspinner_service_1 = require("../../../shared/components/busyspinner/busyspinner.service");
var TopMenuComponent = (function () {
    function TopMenuComponent(route, router, authService, toastr, vcr, busySpinnerService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
        this.vcr = vcr;
        this.busySpinnerService = busySpinnerService;
        this.userName = 'Guest';
        this.currentModule = 'speechDashboard';
        this.navigationExtras = {
            preserveQueryParams: true,
            preserveFragment: true
        };
        this.toastr.setRootViewContainerRef(vcr);
    }
    TopMenuComponent.prototype.logout = function () {
        var _this = this;
        this.busySpinnerService.dispatcher.next(true);
        this.authService.logout().subscribe(function () {
            _this.authService.isLoggedIn = false;
            _this.authService.userName = 'Guest';
            _this.authService.currentUser = undefined;
            _this.router.navigate(['login'], _this.navigationExtras);
        });
    };
    TopMenuComponent.prototype.redirect = function (url) {
        this.currentModule = url;
        this.router.navigate([url], this.navigationExtras);
    };
    TopMenuComponent = __decorate([
        core_1.Component({
            selector: 'top-menu',
            templateUrl: "./topmenu.component.html",
            styleUrls: ['./topmenu.component.min.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, auth_service_1.AuthService, ng2_toastr_1.ToastsManager,
            core_1.ViewContainerRef, busyspinner_service_1.BusySpinnerService])
    ], TopMenuComponent);
    return TopMenuComponent;
}());
exports.TopMenuComponent = TopMenuComponent;
//# sourceMappingURL=topmenu.component.js.map