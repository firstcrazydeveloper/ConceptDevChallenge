import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebApiManager {
    // TODO - Implementing proper logging
    requestOptions: RequestOptions;
    constructor(private http: Http) {
        let headerObj = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        let headers = new Headers(headerObj);
        this.requestOptions = new RequestOptions({ headers: headers });
    }

    post(url: string, dataToPost: any) {
        console.log(`Angular2 - Making HTTP POST -> URL: ${url}, with DATA: ${JSON.stringify(dataToPost)}`);
        return this.http.post(url, dataToPost)
            .map(this.extractData)
            .catch(this.handleError);
    }

    get(url: string, getParameters: any = undefined) {

        console.log(`Angular2 - Making HTTP GET -> URL: ${url}`);
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
