import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebApiManager {
    headerObj: any;
    // TODO - Implementing proper logging
    requestOptions: RequestOptions;
    constructor(private http: Http) {

    }

    post(url: string, dataToPost: any, token: string) {
        console.log(`Angular2 - Making HTTP POST -> URL: ${url}, with DATA: ${JSON.stringify(dataToPost)}`);
        this.headerObj = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9',
            'Authorization': 'Bearer ' + token
        });

        let headers = new Headers(this.headerObj);
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, dataToPost, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    get(url: string, token: string) {

        console.log(`Angular2 - Making HTTP GET -> URL: ${url}`);
        if (token !== undefined) {
            return this.httpGetWithParameters(url, token);
        }
        else {
            return this.httpGet(url);
        }
    }

    private httpGetWithParameters(url: string, token: any = undefined) {
        this.headerObj = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9',
            'Authorization': 'Bearer ' + token
        });

        let headers = new Headers(this.headerObj);
        let options = new RequestOptions({ headers: headers });
        return this.http.get(url, options)
            .map((res: Response) => res.json())
            .do(response => console.log('fetched ' + url))
            .publishReplay(1)
            .refCount()
            .catch(this.handleError);

    }

    private httpGet(url: string) {
        return this.http.get(url)
            .map((res: Response) => res.json())
            .do(response => console.log('fetched ' + url))
            .publishReplay(1)
            .refCount()
            .catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
        // TODO - Do proper logging
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
}
