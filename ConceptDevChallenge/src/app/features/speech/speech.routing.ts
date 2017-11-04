import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeechDashboardComponent } from './components/speechDashboard/speechDashboard.component';
import { SelfSpeechComponent } from './components/selfSpeech/selfSpeech.component';
import { NewSpeechComponent } from './components/newSpeech/newSpeech.component';
import { AllSpeechComponent } from './components/allSpeech/allSpeech.component';
import { SearchResultSpeechComponent } from './components/searchResultSpeech/searchResultSpeech.component';
import { AuthGuard } from '../../shared/service/auth.guard.service';
import { CanDeactivateService } from './canDeactivateGuard.service';

const speechRoutes: Routes = [
    {
        path: '',
        component: SpeechDashboardComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                children: [
                    {
                        path: '',
                        canActivateChild: [AuthGuard],
                        component: SelfSpeechComponent
                    },
                    { path: 'allspeech', component: AllSpeechComponent },
                    { path: 'filterspeech', component: SearchResultSpeechComponent },
                    { path: 'newspeech', component: NewSpeechComponent, canDeactivate: [CanDeactivateService] },
                    { path: 'userspeech', component: SelfSpeechComponent }
                ]
            }
        ]
    }

];

export const speechRouting: ModuleWithProviders = RouterModule.forChild(speechRoutes);