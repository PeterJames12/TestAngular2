var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AdminComponent } from "./admin/admin.component";
import { homeRoutes } from "./home.routes";
import { Ng2Bs3ModalModule } from "ng2-bs3-modal/ng2-bs3-modal";
import { Ng2GoogleChartsModule } from "ng2-google-charts";
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule.forChild(homeRoutes),
            ReactiveFormsModule,
            Ng2Bs3ModalModule,
            Ng2GoogleChartsModule,
            FormsModule,
        ],
        declarations: [
            AdminComponent,
        ],
        exports: [
            AdminComponent,
        ]
    })
], HomeModule);
export { HomeModule };
//# sourceMappingURL=/Users/igor/workspace/TestAngular2/frontend/src/app/pages/home/home.module.js.map