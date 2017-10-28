import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { BusySpinnerComponent } from './components/busyspinner/busyspinner.component';
import { SideMenuComponent } from './components/sidemenu/sidemenu.component';
import { WebApiManager } from './service/webApiManager.service';
import { AuthGuard } from './service/auth.guard.service';
import { AuthService } from './service/auth.service';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { NavMenuService } from './components/navmenu/navmenu.service';
import { BusySpinnerService } from './components/busyspinner/busyspinner.service';
@NgModule({
    imports: [CommonModule, RouterModule, HttpModule, ToastModule.forRoot()],
    declarations: [NavMenuComponent, SideMenuComponent, BusySpinnerComponent],
    exports: [NavMenuComponent, SideMenuComponent, BusySpinnerComponent],
    providers: [WebApiManager, NavMenuService, BusySpinnerService]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [AuthGuard, AuthService]
        }
    }

}