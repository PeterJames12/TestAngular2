var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { ErrorService } from "../../service/error.service";
var ErrorComponent = (function () {
    function ErrorComponent(errorService) {
        var _this = this;
        this.errorService = errorService;
        this.subscription = this.errorService.update$.subscribe(function (error) {
            _this.error = error;
        });
    }
    ErrorComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    Component({
        selector: 'error',
        styleUrls: ['error.component.css'],
        templateUrl: 'error.component.html'
    }),
    __metadata("design:paramtypes", [ErrorService])
], ErrorComponent);
export { ErrorComponent };
//# sourceMappingURL=/Users/igor/workspace/TestAngular2/frontend/src/app/pages/error/error.component.js.map