import { Injectable, Output, EventEmitter } from '@angular/core';
import { WebApiManager } from '../../shared/service/webApiManager.service';
import { AppSettings } from '../../../app/appSettings.setting';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BookService {

    constructor(private webApiService: WebApiManager) {
    }

    //TODO -- uncomment this code after Web API implementation
    public static googleBookAPIUrl = 'https://www.googleapis.com/books/v1/volumes?q=ISBN:';

    getBookDetails(ISBN: string): any {
        return this.webApiService.get(BookService.googleBookAPIUrl + ISBN, undefined);
    }

    AddOrUpdateSpeech() {
        // return this.webApiService.post(SpeechService.speechesUrl, speech);
    }

    AddSpeech() {
        // return this.webApiService.post(SpeechService.speechesUrl, speech);

    }
}