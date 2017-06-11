var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { CacheService } from "ionic-cache";
import { Http, URLSearchParams } from "@angular/http";
import { AuthHttp } from "angular2-jwt";
import "rxjs/Rx";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ErrorService } from "./error.service";
var url = '/api/requests';
var EmployeeService = (function () {
    function EmployeeService(http, authHttp, cache, errorService) {
        this.http = http;
        this.authHttp = authHttp;
        this.cache = cache;
        this.errorService = errorService;
        this.cache = cache;
    }
    EmployeeService.prototype.getRequestsByReporter = function (reporterId, page, size) {
        var _this = this;
        var params = new URLSearchParams();
        params.set('userId', reporterId.toString());
        params.set('pageNumber', page.toString());
        params.set('size', size.toString());
        return this.authHttp.get(url + "/requestsByReporter", { search: params })
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    EmployeeService.prototype.getClosedRequestsByReporter = function (reporterId, page, size) {
        var _this = this;
        var params = new URLSearchParams();
        params.set('userId', reporterId.toString());
        params.set('pageNumber', page.toString());
        params.set('size', size.toString());
        return this.authHttp.get(url + "/closedRequestsByReporter", { search: params })
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    EmployeeService.prototype.countRequestsByReporter = function (reporterId) {
        var _this = this;
        var params = new URLSearchParams();
        params.set('reporterId', reporterId.toString());
        return this.authHttp.get(url + "/countRequestsByReporter", { search: params })
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    EmployeeService.prototype.countClosedRequestsByReporter = function (reporterId) {
        var _this = this;
        var params = new URLSearchParams();
        params.set('reporterId', reporterId.toString());
        return this.authHttp.get(url + "/countClosedRequestsByReporter", { search: params })
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    EmployeeService.prototype.createEmployeeRequest = function (request) {
        return this.authHttp.post(url + "/employeeRequest", request);
    };
    EmployeeService.prototype.reopenRequests = function (requestId) {
        return this.authHttp.post(url + "/reopen", requestId);
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        AuthHttp,
        CacheService,
        ErrorService])
], EmployeeService);
export { EmployeeService };
//# sourceMappingURL=/Users/igor/workspace/TestAngular2/frontend/src/app/service/employee.service.js.map