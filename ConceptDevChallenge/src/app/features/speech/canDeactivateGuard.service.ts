import { Injectable } from '@angular/core';
import { SpeechComponent } from './components/speech/speech.component';
import {
    CanDeactivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    NavigationExtras,
    CanLoad, Route
} from '@angular/router';

@Injectable()
export class CanDeactivateService implements CanDeactivate<SpeechComponent> {
    canDeactivate(
        component: SpeechComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot
    ): boolean {
        //TODO -- Need to get form state so  we can disply alert message to user if state is dirty.
        return true;
    }
}