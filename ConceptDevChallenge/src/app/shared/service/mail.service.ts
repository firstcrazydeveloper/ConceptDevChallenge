import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { Mail } from '../model/mail.model';
import { WebApiManager } from './webApiManager.service';
import { AppSettings } from '../../appSettings.setting';

@Injectable()
export class MailService {

    //TODO -- remove this Test Data Section after Web API implementation
    // Start TestData Section  
    // testUserData: Array<User> = [{ id: 1, userid: 'abhishek', password: 'sahil', email: 'abhishek.job@hotmail.com' },
    // { id: 2, userid: 'josh', password: 'rosman', email: 'sample@hotmail.com' }];

    // End TestData Section  

    constructor(public webApiService: WebApiManager) {
        console.log('start Mail Service');
    }

    public static mailUrl = AppSettings.BaseAPIUrl + 'mail';

    sendMail(mail: Mail) {
        return this.webApiService.post(MailService.mailUrl, mail);
    }
}
