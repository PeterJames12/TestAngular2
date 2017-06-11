var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Observable } from "rxjs";
import "rxjs/Rx";
import { AuthHttp } from "angular2-jwt";
import { ErrorService } from "./error.service";
import { Injectable } from "@angular/core";
var url = '/api/histories';
var HistoryService = (function () {
    function HistoryService(authHttp, errorService) {
        this.authHttp = authHttp;
        this.errorService = errorService;
    }
    HistoryService.prototype.getHistory = function (entityId) {
        var _this = this;
        return this.authHttp.get(url + "/" + entityId)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    HistoryService.prototype.getHistoryDTOs = function (entityId) {
        var _this = this;
        return this.authHttp.get(url + "/dto/" + entityId)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    return HistoryService;
}());
HistoryService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AuthHttp,
        ErrorService])
], HistoryService);
export { HistoryService };
//# sourceMappingURL=/Users/igor/workspace/TestAngular2/frontend/src/app/service/history.service.js.map