"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var router_1 = require("@angular/router");
var speech_routing_1 = require("./speech.routing");
var shared_module_1 = require("../../shared/shared.module");
var speechDashboard_component_1 = require("./components/speechDashboard/speechDashboard.component");
var selfSpeech_component_1 = require("./components/selfSpeech/selfSpeech.component");
var newSpeech_component_1 = require("./components/newSpeech/newSpeech.component");
var allSpeech_component_1 = require("./components/allSpeech/allSpeech.component");
var speech_component_1 = require("./components/speech/speech.component");
var sharespeech_component_1 = require("../../common/components/sharepeech/sharespeech.component");
var searchSpeech_component_1 = require("./components/searchSpeech/searchSpeech.component");
var searchResultSpeech_component_1 = require("./components/searchResultSpeech/searchResultSpeech.component");
var speech_service_1 = require("./speech.service");
var canDeactivateGuard_service_1 = require("./canDeactivateGuard.service");
var SpeechModule = (function () {
    function SpeechModule() {
    }
    SpeechModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, shared_module_1.SharedModule, ng_bootstrap_1.NgbModule, router_1.RouterModule, speech_routing_1.speechRouting, forms_2.ReactiveFormsModule],
            declarations: [speechDashboard_component_1.SpeechDashboardComponent, selfSpeech_component_1.SelfSpeechComponent, newSpeech_component_1.NewSpeechComponent, allSpeech_component_1.AllSpeechComponent, sharespeech_component_1.ShareSpeechContent, speech_component_1.SpeechComponent, searchSpeech_component_1.SearchSpeechComponent, searchResultSpeech_component_1.SearchResultSpeechComponent],
            exports: [speechDashboard_component_1.SpeechDashboardComponent, selfSpeech_component_1.SelfSpeechComponent, newSpeech_component_1.NewSpeechComponent, allSpeech_component_1.AllSpeechComponent, sharespeech_component_1.ShareSpeechContent, speech_component_1.SpeechComponent, searchSpeech_component_1.SearchSpeechComponent, searchResultSpeech_component_1.SearchResultSpeechComponent],
            entryComponents: [sharespeech_component_1.ShareSpeechContent],
            providers: [speech_service_1.SpeechService, canDeactivateGuard_service_1.CanDeactivateService]
        })
    ], SpeechModule);
    return SpeechModule;
}());
exports.SpeechModule = SpeechModule;
//# sourceMappingURL=speech.module.js.map