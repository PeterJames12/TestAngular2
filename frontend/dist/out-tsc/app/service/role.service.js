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
import { Observable } from "rxjs";
import { Http } from "@angular/http";
import "rxjs/Rx";
import { AuthHttp } from "angular2-jwt";
import { ErrorService } from "./error.service";
var url = '/api/roles';
var RoleService = (function () {
    function RoleService(http, authHttp, errorService) {
        this.http = http;
        this.authHttp = authHttp;
        this.errorService = errorService;
    }
    RoleService.prototype.create = function (role) {
        var _this = this;
        return this.http.post(url, role)
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    RoleService.prototype.delete = function (id) {
        var _this = this;
        return this.authHttp.delete(url + "/" + id)
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    RoleService.prototype.update = function (role) {
        var _this = this;
        return this.authHttp.put(url + "/" + role.id, role).map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    RoleService.prototype.getAll = function () {
        var _this = this;
        return this.authHttp.get("" + url).map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    return RoleService;
}());
RoleService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        AuthHttp,
        ErrorService])
], RoleService);
export { RoleService };
//# sourceMappingURL=/Users/igor/workspace/TestAngular2/frontend/src/app/service/role.service.js.map