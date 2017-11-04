"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var speechDashboard_component_1 = require("./components/speechDashboard/speechDashboard.component");
var selfSpeech_component_1 = require("./components/selfSpeech/selfSpeech.component");
var newSpeech_component_1 = require("./components/newSpeech/newSpeech.component");
var allSpeech_component_1 = require("./components/allSpeech/allSpeech.component");
var searchResultSpeech_component_1 = require("./components/searchResultSpeech/searchResultSpeech.component");
var auth_guard_service_1 = require("../../shared/service/auth.guard.service");
var canDeactivateGuard_service_1 = require("./canDeactivateGuard.service");
var speechRoutes = [
    {
        path: '',
        component: speechDashboard_component_1.SpeechDashboardComponent,
        canActivate: [auth_guard_service_1.AuthGuard],
        children: [
            {
                path: '',
                children: [
                    {
                        path: '',
                        canActivateChild: [auth_guard_service_1.AuthGuard],
                        component: selfSpeech_component_1.SelfSpeechComponent
                    },
                    { path: 'allspeech', component: allSpeech_component_1.AllSpeechComponent },
                    { path: 'filterspeech', component: searchResultSpeech_component_1.SearchResultSpeechComponent },
                    { path: 'newspeech', component: newSpeech_component_1.NewSpeechComponent, canDeactivate: [canDeactivateGuard_service_1.CanDeactivateService] },
                    { path: 'userspeech', component: selfSpeech_component_1.SelfSpeechComponent }
                ]
            }
        ]
    }
];
exports.speechRouting = router_1.RouterModule.forChild(speechRoutes);
//# sourceMappingURL=speech.routing.js.map