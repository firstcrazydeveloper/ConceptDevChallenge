import { Injectable, Output, EventEmitter } from '@angular/core';
import { WebApiManager } from '../../shared/service/webApiManager.service';
import { AppSettings } from '../../../app/appSettings.setting';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Speech } from './model/speech.model';

import { Navigation } from './model/navMenu.model';

@Injectable()
export class SpeechService {

    speechCollection: Observable<any> = null;
    speech: Observable<any> = null;
    navigationMenu: Observable<any> = null;
    currentSpeech: Speech;
    dispatcher = new Subject();

    //TODO -- remove this Test Data Section after Web API implementation
    // Start TestData Section  


    // End TestData Section

    constructor(private webApiService: WebApiManager) {
    }

    //TODO -- uncomment this code after Web API implementation
    public static speechesUrl = AppSettings.BaseAPIUrl + 'speech';
    public static navMenuUrl = AppSettings.BaseAPIUrl + 'speechMenu';


    //TODO -- remove this code after Web API implementation
    //public static speechesUrl = 'src/assets/speechdata.json';
    //public static navMenuUrl = 'src/assets/navigationdata.json';
    //public static speechesUrl = 'assets/speechdata.json';
    //public static navMenuUrl = 'assets/navigationdata.json';

    getSpeechCollection() {
        //TODO -- remove this code after Web API implementation
        // return Observable.of(this.testDataSpeechList).delay(10);

        // TODO -- uncomment this code after Web API implementation
        this.speechCollection = this.webApiService.get(SpeechService.speechesUrl);
        return this.speechCollection;
    }



    getSpeech(speechId: number) {
        let modifiedUrl = SpeechService.speechesUrl + '/' + speechId;
        this.speech = this.webApiService.get(modifiedUrl);
        return modifiedUrl;
    }

    AddOrUpdateSpeech(speech: Speech) {

        //TODO -- remove this code after Web API implementation
        //if (speech.id === undefined) {
        //    speech.id = this.generateUniqueId();
        //}
        //else {
        //    this.testDataSpeechList = this.testDataSpeechList.filter(item => item.id !== speech.id);
        //}

        //this.testDataSpeechList.push(speech);
        //return Observable.of(true).delay(10);

        //TODO -- uncomment this code after Web API implementation
        return this.webApiService.post(SpeechService.speechesUrl, speech);
    }

    AddSpeech(speech: Speech) {
        return this.webApiService.post(SpeechService.speechesUrl, speech);

    }

    DeleteSpeech(speech: Speech) {
        // this.testDataSpeechList = this.testDataSpeechList.filter(item => item.id !== speech.id);
        return Observable.of(true).delay(10);
    }

    clearCache() {
        this.speechCollection = null;
        this.speech = null;
    }

    shareSpeech(userEmail: string, subject: string, content: string) {
        return Observable.of(true).delay(100);
    }

    getSpeechDashBoardNavigationMenu() {

        this.navigationMenu = this.webApiService.get(SpeechService.navMenuUrl);
        return this.navigationMenu;
    }

    //TODO -- remove this method after Web API implementation
    generateUniqueId() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}