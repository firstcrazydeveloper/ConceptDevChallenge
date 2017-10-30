import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { BookRouting } from './book.routing';
import { SharedModule } from '../../shared/shared.module';
import { BookDashboardComponent } from './components/bookDashboard/bookDashboard.component';
import { BookService } from './book.service';

@NgModule({
    imports: [CommonModule, FormsModule, SharedModule, NgbModule, RouterModule, BookRouting],
    declarations: [BookDashboardComponent],
    exports: [BookDashboardComponent],
    providers: [BookService]
})
export class BookModule { }