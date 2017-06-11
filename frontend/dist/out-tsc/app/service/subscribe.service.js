var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { ErrorService } from "./error.service";
import { AuthHttp } from "angular2-jwt";
import { Observable } from "rxjs";
import { URLSearchParams } from "@angular/http";
var url = 'api/subscribe';
var SuscribeService = (function () {
    function SuscribeService(authHttp, errorService) {
        this.authHttp = authHttp;
        this.errorService = errorService;
    }
    SuscribeService.prototype.toggleSubscribe = function (requestId, subscriberId) {
        var _this = this;
        var requestSubscriber = {
            "requestId": requestId,
            "subscriberId": subscriberId
        };
        return this.authHttp.post(url, requestSubscriber).map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    SuscribeService.prototype.check = function (requestId, subscriberId) {
        var _this = this;
        var requestSubscriber = {
            "requestId": requestId,
            "subscriberId": subscriberId
        };
        return this.authHttp.post(url + "/check", requestSubscriber).map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    SuscribeService.prototype.getFollowers = function (requestId) {
        var _this = this;
        var params = new URLSearchParams();
        params.set('requestId', requestId.toString());
        return this.authHttp.get(url, { search: params }).map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    return SuscribeService;
}());
SuscribeService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AuthHttp,
        ErrorService])
], SuscribeService);
export { SuscribeService };
//# sourceMappingURL=/Users/igor/workspace/TestAngular2/frontend/src/app/service/subscribe.service.js.map