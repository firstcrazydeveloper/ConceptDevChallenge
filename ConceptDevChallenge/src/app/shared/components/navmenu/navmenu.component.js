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
var navmenu_service_1 = require("./navmenu.service");
var busyspinner_service_1 = require("../../../shared/components/busyspinner/busyspinner.service");
var NavMenuComponent = (function () {
    function NavMenuComponent(router, navMenuService, busySpinnerService) {
        this.router = router;
        this.navMenuService = navMenuService;
        this.busySpinnerService = busySpinnerService;
    }
    NavMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navMenuService.dispatcher.subscribe(function (val) { _this.activeMenu = val; });
    };
    NavMenuComponent.prototype.navigate = function (routeName) {
        this.busySpinnerService.dispatcher.next(true);
        this.navMenuService.dispatcher.next(routeName);
        this.activeMenu = routeName;
        this.router.navigate(['speechDashboard/' + routeName]);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], NavMenuComponent.prototype, "navMenus", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], NavMenuComponent.prototype, "activeMenu", void 0);
    NavMenuComponent = __decorate([
        core_1.Component({
            selector: 'nav-menu',
            templateUrl: "./navmenu.component.html",
            styleUrls: ['./navmenu.component.min.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, navmenu_service_1.NavMenuService, busyspinner_service_1.BusySpinnerService])
    ], NavMenuComponent);
    return NavMenuComponent;
}());
exports.NavMenuComponent = NavMenuComponent;
//# sourceMappingURL=navmenu.component.js.map