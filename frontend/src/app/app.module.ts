import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule, Http, RequestOptions} from "@angular/http";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "ng2-toastr";
import {appRoutes} from "./app.routes";
import {AppComponent} from "./app.component";
import {AuthHttp, AuthConfig} from "angular2-jwt";
import {CacheService} from "ionic-cache/ionic-cache";
import {
  PublicPageGuard,
  AdminPageGuard,
  AuthService,
  UserPageGuard,
  ManagerPageGuard,
} from "./service/barrel";
import {ChartsModule} from "ng2-charts";
import {ClientComponent} from "./pages/client/client.component";
import {ClientsService} from "./pages/client/ClientsService";
import {Ng2FilterPipeModule} from "ng2-filter-pipe";

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
  ],
  imports: [
    Ng2FilterPipeModule,
    ChartsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ToastModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AuthService,
    CacheService,
    PublicPageGuard,
    AdminPageGuard,
    ManagerPageGuard,
    UserPageGuard,
    ClientComponent,
    ClientsService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}
