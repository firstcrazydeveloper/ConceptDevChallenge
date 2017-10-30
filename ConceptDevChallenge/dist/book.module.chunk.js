webpackJsonp(["book.module"],{

/***/ "../../../../../src/app/features/book/book.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookModule", function() { return BookModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__book_routing__ = __webpack_require__("../../../../../src/app/features/book/book.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_bookDashboard_bookDashboard_component__ = __webpack_require__("../../../../../src/app/features/book/components/bookDashboard/bookDashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__book_service__ = __webpack_require__("../../../../../src/app/features/book/book.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var BookModule = (function () {
    function BookModule() {
    }
    return BookModule;
}());
BookModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_5__book_routing__["a" /* BookRouting */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_7__components_bookDashboard_bookDashboard_component__["a" /* BookDashboardComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_7__components_bookDashboard_bookDashboard_component__["a" /* BookDashboardComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_8__book_service__["a" /* BookService */]]
    })
], BookModule);

//# sourceMappingURL=book.module.js.map

/***/ }),

/***/ "../../../../../src/app/features/book/book.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_bookDashboard_bookDashboard_component__ = __webpack_require__("../../../../../src/app/features/book/components/bookDashboard/bookDashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_auth_guard_service__ = __webpack_require__("../../../../../src/app/shared/service/auth.guard.service.ts");



var bookRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__components_bookDashboard_bookDashboard_component__["a" /* BookDashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_service_auth_guard_service__["a" /* AuthGuard */]],
        children: [
            {
                path: '',
                children: [
                    {
                        path: '',
                        canActivateChild: [__WEBPACK_IMPORTED_MODULE_2__shared_service_auth_guard_service__["a" /* AuthGuard */]],
                        component: __WEBPACK_IMPORTED_MODULE_1__components_bookDashboard_bookDashboard_component__["a" /* BookDashboardComponent */]
                    }
                ]
            }
        ]
    }
];
var BookRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(bookRoutes);
//# sourceMappingURL=book.routing.js.map

/***/ }),

/***/ "../../../../../src/app/features/book/book.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_webApiManager_service__ = __webpack_require__("../../../../../src/app/shared/service/webApiManager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookService = BookService_1 = (function () {
    function BookService(webApiService) {
        this.webApiService = webApiService;
    }
    BookService.prototype.getBookDetails = function (ISBN) {
        return this.webApiService.get(BookService_1.googleBookAPIUrl + ISBN);
    };
    BookService.prototype.AddOrUpdateSpeech = function () {
        // return this.webApiService.post(SpeechService.speechesUrl, speech);
    };
    BookService.prototype.AddSpeech = function () {
        // return this.webApiService.post(SpeechService.speechesUrl, speech);
    };
    return BookService;
}());
//TODO -- uncomment this code after Web API implementation
BookService.googleBookAPIUrl = 'https://www.googleapis.com/books/v1/volumes?q=ISBN:';
BookService = BookService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_webApiManager_service__["a" /* WebApiManager */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_webApiManager_service__["a" /* WebApiManager */]) === "function" && _a || Object])
], BookService);

var BookService_1, _a;
//# sourceMappingURL=book.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/book/components/bookDashboard/bookDashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flexbox-parent\">\r\n    <div class=\"flexbox-item header\">\r\n\r\n    </div>\r\n\r\n    <div class=\"flexbox-item fill-area content flexbox-item-grow\">\r\n        <div class=\"fill-area-content \" style=\"position:relative;padding:0;\">\r\n            <div class=\"flexbox-parent\" style=\"position:absolute;\">\r\n                <div class=\"flexbox-item\" style=\"padding:0;flex: 0 0 10%;\">\r\n                    <div>\r\n                        <form class=\"form-inline mt-2 mt-md-0\" #f=\"ngForm\" (ngSubmit)=\"Search()\">\r\n                            <input class=\"form-control mr-sm-2\" type=\"text\" name=\"isbn\" [(ngModel)]=\"isbn\" placeholder=\"Enter ISBN Number\" required>\r\n                            <button class=\"btn btn-primary my-2 my-sm-0\" type=\"submit\" [disabled]=\"!f.valid\">Search</button>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n                <div class=\"flexbox-item fill-area content flexbox-item-grow\" style=\"padding:0;\">\r\n                    <div class=\"fill-area-content flexbox-item-grow\">\r\n                        <textarea [(ngModel)]=\"bookdetails\" style=\"width:100%;height:100%\"></textarea>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"flexbox-item footer\">\r\n        Powered by Abhishek @firstcrazydeveloper.com\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/features/book/components/bookDashboard/bookDashboard.component.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".speech-dashboard-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;background:#fff;border-radius:5px;height:100%;}.dashboardContentContainer{height:95%;}#speechDashBoardContainer{padding-top:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:100vh;width:calc(100%);}#speechmenu{background:#99c;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:calc(100%);}#speechcontent{background:#9c9;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;width:calc(100%);}html,body{width:100%;height:100%;}.flexbox-parent{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column wrap;flex-flow:column wrap;width:100%;height:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:stretch;align-content:stretch;}.flexbox-item{padding:8px;}.flexbox-item-grow{-webkit-box-flex:1;-ms-flex:1;flex:1;}.fill-area{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:stretch;align-content:stretch;width:100%;height:100%;}.fill-area-content{width:100%;height:100%;}.btn-primary:not([disabled]):not(.disabled).active,.btn-primary:not([disabled]):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#2c3842;border-color:#2c3842;box-shadow:0 0 0 .2rem #1b242b;cursor:pointer;}.btn-primary,.btn-outline-success{color:#fff;background-color:#6e7a87;border-color:#2c3842;box-shadow:0 0 0 .2rem #1b242b);cursor:pointer;}.btn-primary:hover{color:#fff;background-color:#2c3842;border-color:#6e7a87;box-shadow:0 0 0 .2rem #1b242b);}.btn-primary.disabled,.btn-primary:disabled{background-color:#b1b3b5;border-color:#b1b3b5;cursor:none;}.btn-primary.disabled:hover,.btn-primary:disabled:hover{background-color:#b1b3b5;border-color:#b1b3b5;cursor:none;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/book/components/bookDashboard/bookDashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_service__ = __webpack_require__("../../../../../src/app/features/book/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_components_busyspinner_busyspinner_service__ = __webpack_require__("../../../../../src/app/shared/components/busyspinner/busyspinner.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookDashboardComponent = (function () {
    function BookDashboardComponent(modalService, bookService, busySpinnerService) {
        this.modalService = modalService;
        this.bookService = bookService;
        this.busySpinnerService = busySpinnerService;
    }
    BookDashboardComponent.prototype.ngOnInit = function () { };
    BookDashboardComponent.prototype.Search = function () {
        var _this = this;
        this.bookService.getBookDetails(this.isbn)
            .subscribe(function (bookdetails) {
            _this.bookdetails = JSON.stringify(bookdetails);
        });
    };
    return BookDashboardComponent;
}());
BookDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'book-dashboard',
        template: __webpack_require__("../../../../../src/app/features/book/components/bookDashboard/bookDashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/book/components/bookDashboard/bookDashboard.component.min.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_components_busyspinner_busyspinner_service__["a" /* BusySpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_components_busyspinner_busyspinner_service__["a" /* BusySpinnerService */]) === "function" && _c || Object])
], BookDashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=bookDashboard.component.js.map

/***/ })

});
//# sourceMappingURL=book.module.chunk.js.map