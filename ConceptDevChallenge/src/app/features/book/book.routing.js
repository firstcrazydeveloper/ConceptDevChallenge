"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var bookDashboard_component_1 = require("./components/bookDashboard/bookDashboard.component");
var auth_guard_service_1 = require("../../shared/service/auth.guard.service");
var bookRoutes = [
    {
        path: '',
        component: bookDashboard_component_1.BookDashboardComponent,
        canActivate: [auth_guard_service_1.AuthGuard],
        children: [
            {
                path: '',
                children: [
                    {
                        path: '',
                        canActivateChild: [auth_guard_service_1.AuthGuard],
                        component: bookDashboard_component_1.BookDashboardComponent
                    }
                ]
            }
        ]
    }
];
exports.BookRouting = router_1.RouterModule.forChild(bookRoutes);
//# sourceMappingURL=book.routing.js.map