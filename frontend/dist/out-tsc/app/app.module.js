var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule, Http, RequestOptions } from "@angular/http";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastModule } from "ng2-toastr";
import { appRoutes } from "./app.routes";
import { AppComponent } from "./app.component";
import { AuthHttp, AuthConfig } from "angular2-jwt";
import { CacheService } from "ionic-cache/ionic-cache";
import { PublicPageGuard, AdminPageGuard, AuthService, UserPageGuard, ManagerPageGuard, } from "./service/barrel";
import { ChartsModule } from "ng2-charts";
import { ClientComponent } from "./pages/client/client.component";
import { ClientsService } from "./pages/client/ClientsService";
import { Ng2FilterPipeModule } from "ng2-filter-pipe";
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
], AppModule);
export { AppModule };
export function authHttpServiceFactory(http, options) {
    return new AuthHttp(new AuthConfig(), http, options);
}
//# sourceMappingURL=/Users/igor/workspace/TestAngular2/frontend/src/app/app.module.js.map