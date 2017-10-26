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
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var shared_module_1 = require("./shared/shared.module");
var app_component_1 = require("./app.component");
var login_component_1 = require("./common/components/login/login.component");
var pagenotfound_component_1 = require("./common/components/pagenotfound/pagenotfound.component");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule(router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent, login_component_1.LoginComponent, pagenotfound_component_1.PageNotFoundComponent
            ],
            imports: [
                platform_browser_1.BrowserModule, animations_1.BrowserAnimationsModule, common_1.CommonModule, forms_1.FormsModule, ng_bootstrap_1.NgbModule.forRoot(), app_routing_1.routing, shared_module_1.SharedModule.forRoot()
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map