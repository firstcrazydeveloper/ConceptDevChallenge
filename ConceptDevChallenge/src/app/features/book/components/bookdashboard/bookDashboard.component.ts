import { Component } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ShareSpeechContent } from '../../../../common/components/sharepeech/sharespeech.component';
import { BookService } from '../../book.service';
import { BusySpinnerService } from '../../../../shared/components/busyspinner/busyspinner.service';
import { BookDetail } from '../../model/bookDetail.model';
import { BookItem } from '../../model/bookItem.model';
@Component({
    selector: 'book-dashboard',
    templateUrl: `./bookDashboard.component.html`,
    styleUrls: ['./bookDashboard.component.min.css']
})
export class BookDashboardComponent {
    bookdetail: BookDetail;
    bookItem: BookItem;
    isbn: string;
    isBookDataLoading: Boolean = false;

    constructor(private modalService: NgbModal, public bookService: BookService, public busySpinnerService: BusySpinnerService) { }

    ngOnInit() { }

    Search() {
        this.isBookDataLoading = true;
        this.bookService.getBookDetails(this.isbn)
            .subscribe((bookdetail: BookDetail) => {
                this.bookdetail = bookdetail;
                this.bookItem = this.bookdetail.items[0];
                this.isBookDataLoading = false;
                console.log(this.bookdetail);
            });
    }
}