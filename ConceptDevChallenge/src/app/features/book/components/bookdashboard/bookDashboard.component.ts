import { Component } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ShareSpeechContent } from '../../../../common/components/sharepeech/sharespeech.component';
import { BookService } from '../../book.service';
import { BusySpinnerService } from '../../../../shared/components/busyspinner/busyspinner.service';
@Component({
    selector: 'book-dashboard',
    templateUrl: `./bookDashboard.component.html`,
    styleUrls: ['./bookDashboard.component.min.css']
})
export class BookDashboardComponent {
    bookdetails: string;
    isbn: string;

    constructor(private modalService: NgbModal, public bookService: BookService, public busySpinnerService: BusySpinnerService) { }

    ngOnInit() { }

    Search() {
        this.bookService.getBookDetails(this.isbn)
            .subscribe((bookdetails: any) => {
                this.bookdetails = JSON.stringify(bookdetails);
            });
    }
}