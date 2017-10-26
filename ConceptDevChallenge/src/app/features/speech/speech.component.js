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
var SpeechComponent = (function () {
    function SpeechComponent(route, router) {
        this.route = route;
        this.router = router;
        this.buildUICommand();
    }
    //ngOnInit() {
    //    this.authorSpeech = this.route.params.subscribe(params => {
    //        this.filterType = params['type']; // (+) converts string 'id' to a number
    //        if (this.filterType != undefined && this.filterType === 'self') {
    //            // load author specifc speech
    //        }
    //        else if (this.filterType != undefined && this.filterType === 'all') {
    //            // load author specifc speech
    //        }
    //        else {
    //            // load all speech
    //        }
    //    });
    //}
    SpeechComponent.prototype.buildUICommand = function () {
        this.screenCommands = [];
        this.screenCommands.push({
            disabled: false, hidden: false, title: 'Delete',
            handler: function () {
            }
        });
        this.screenCommands.push({
            disabled: false, hidden: false, title: 'Save',
            handler: function () {
            }
        });
        this.screenCommands.push({
            disabled: false, hidden: false, title: 'Share',
            handler: function () {
            }
        });
    };
    SpeechComponent.prototype.onVoted = function (data) {
        console.log(data);
    };
    SpeechComponent = __decorate([
        core_1.Component({
            selector: 'speech-page',
            templateUrl: "./speech.component.html",
            styleUrls: ['./speech.component.min.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
    ], SpeechComponent);
    return SpeechComponent;
}());
exports.SpeechComponent = SpeechComponent;
//# sourceMappingURL=speech.component.js.map