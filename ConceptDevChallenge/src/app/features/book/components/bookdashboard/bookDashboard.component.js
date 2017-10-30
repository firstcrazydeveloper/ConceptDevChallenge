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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var book_service_1 = require("../../book.service");
var busyspinner_service_1 = require("../../../../shared/components/busyspinner/busyspinner.service");
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
    BookDashboardComponent = __decorate([
        core_1.Component({
            selector: 'book-dashboard',
            templateUrl: "./bookDashboard.component.html",
            styleUrls: ['./bookDashboard.component.min.css']
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal, book_service_1.BookService, busyspinner_service_1.BusySpinnerService])
    ], BookDashboardComponent);
    return BookDashboardComponent;
}());
exports.BookDashboardComponent = BookDashboardComponent;
//# sourceMappingURL=bookDashboard.component.js.map