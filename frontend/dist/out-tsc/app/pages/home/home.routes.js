import { AdminComponent } from "./admin/admin.component";
import { AdminPageGuard } from "../../service/guard/admin-page.guard";
export var homeRoutes = [
    {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AdminPageGuard]
    }
];
//# sourceMappingURL=/Users/igor/workspace/TestAngular2/frontend/src/app/pages/home/home.routes.js.map