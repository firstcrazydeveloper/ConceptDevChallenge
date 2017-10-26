﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { speechRouting } from './speech.routing';
import { SharedModule } from '../../shared/shared.module';
import { SpeechDashboardComponent } from './components/speechDashboard/speechDashboard.component';
import { SelfSpeechComponent } from './components/selfSpeech/selfSpeech.component';
import { NewSpeechComponent } from './components/newSpeech/newSpeech.component';
import { AllSpeechComponent } from './components/allSpeech/allSpeech.component';
import { ShareSpeechContent } from '../../common/components/sharepeech/sharespeech.component';
import { SpeechService } from './speech.service';

@NgModule({
    imports: [CommonModule, FormsModule, SharedModule, NgbModule, RouterModule, speechRouting],
    declarations: [SpeechDashboardComponent, SelfSpeechComponent, NewSpeechComponent, AllSpeechComponent, ShareSpeechContent],
    exports: [SpeechDashboardComponent, SelfSpeechComponent, NewSpeechComponent, AllSpeechComponent, ShareSpeechContent],
    entryComponents: [ShareSpeechContent],
    providers: [SpeechService]
})
export class SpeechModule { }