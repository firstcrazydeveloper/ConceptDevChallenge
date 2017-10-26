"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var login_component_1 = require("./common/components/login/login.component");
var pagenotfound_component_1 = require("./common/components/pagenotfound/pagenotfound.component");
var appRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    {
        path: 'speechDashboard',
        loadChildren: 'app/features/speech/speech.module#SpeechModule'
    },
    { path: '**', component: pagenotfound_component_1.PageNotFoundComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map