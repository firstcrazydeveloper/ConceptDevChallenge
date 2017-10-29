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
var user_model_1 = require("../../../shared/model/user.model");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var busyspinner_service_1 = require("../../../shared/components/busyspinner/busyspinner.service");
var LoginComponent = (function () {
    function LoginComponent(router, authService, toastr, vcr, busySpinnerService) {
        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
        this.vcr = vcr;
        this.busySpinnerService = busySpinnerService;
        this.user = new user_model_1.User();
        this.toastr.setRootViewContainerRef(vcr);
    }
    LoginComponent.prototype.Login = function () {
        var _this = this;
        this.busySpinnerService.dispatcher.next(true);
        this.authService.login(this.id, this.password).subscribe(function (user) {
            if (user.isAunthenticate) {
                _this.authService.isLoggedIn = true;
                _this.authService.currentUser = user;
                _this.authService.userName = user.firstName;
                var redirect = _this.authService.redirectUrl ? _this.authService.redirectUrl : 'speechDashboard';
                var navigationExtras = {
                    preserveQueryParams: true,
                    preserveFragment: true
                };
                _this.router.navigate(['speechDashboard'], navigationExtras);
            }
            else {
                _this.busySpinnerService.dispatcher.next(false);
                _this.toastr.error('UserId and Password are not correct!', 'Oops!');
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-page',
            templateUrl: "./login.component.html",
            styleUrls: ['./login.component.min.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, auth_service_1.AuthService, ng2_toastr_1.ToastsManager,
            core_1.ViewContainerRef, busyspinner_service_1.BusySpinnerService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map