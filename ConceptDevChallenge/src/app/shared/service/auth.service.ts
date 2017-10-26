import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { User } from '../model/user.model';

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;
    currentUser: User;
    redirectUrl: string;

    //TODO -- remove this Test Data Section after Web API implementation
    // Start TestData Section  
    testUserData: Array<User> = [{ id: 1, userid: 'abhishek', password: 'sahil', email: 'abhishek.job@hotmail.com' },
    { id: 2, userid: 'josh', password: 'rosman', email: 'sample@hotmail.com' }];

    // End TestData Section  

    constructor() {
        console.log('start AuthService');
    }

    //TODO -- remove this code after Web API implementation
    public static navMenuUrl = 'src/assets/userdata.json';
    // public static navMenuUrl = 'assets/userdata.json';

    login(id: string, password: string): Observable<boolean> {
        //TODO: Need to implement Actual login logic
        return Observable.of(true).delay(1000).do(val => this.verifuser(id, password));
    }

    logout(): void {
        this.isLoggedIn = false;
    }

    verifuser(id: string, password: string) {

        let userList = this.testUserData.filter(user => user.userid === id && user.password === password);

        if (userList != undefined && userList.length > 0) {
            this.currentUser = userList[0];
            this.isLoggedIn = true;
        }

        else {
            this.isLoggedIn = false;
        }
    }
}
