import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDashboardComponent } from './components/bookDashboard/bookDashboard.component';
import { AuthGuard } from '../../shared/service/auth.guard.service';

const bookRoutes: Routes = [
    {
        path: '',
        component: BookDashboardComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                children: [
                    {
                        path: '',
                        canActivateChild: [AuthGuard],
                        component: BookDashboardComponent
                    }
                ]
            }
        ]
    }

];

export const BookRouting: ModuleWithProviders = RouterModule.forChild(bookRoutes);