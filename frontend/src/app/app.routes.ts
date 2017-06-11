import {provideRoutes, RouterModule, Routes} from "@angular/router";
import {NoContentComponent} from "./components/no-content/no-content.component";

export const appRoutes: Routes = [

  // {
  //   path: '',
  //   component:  ClientComponent
  // },
  //   {
    // path: 'error',
    // loadChildren: './pages/error/error.module#ErrorModule',
  // },
  // If route does not match any previous ones
  // {
  //   path: '**',
  //   component: NoContentComponent
  // }
];

export const provider = [
    provideRoutes(appRoutes)
];

