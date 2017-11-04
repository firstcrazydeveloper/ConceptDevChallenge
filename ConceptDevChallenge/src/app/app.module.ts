import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './common/components/login/login.component';
import { PageNotFoundComponent } from './common/components/pagenotfound/pagenotfound.component';
import { routing } from './app.routing'



@NgModule({
    declarations: [
        AppComponent, LoginComponent, PageNotFoundComponent
    ],
    imports: [
        BrowserModule, BrowserAnimationsModule, CommonModule, FormsModule, ReactiveFormsModule, NgbModule.forRoot(), routing, SharedModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

    constructor(router: Router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
}
