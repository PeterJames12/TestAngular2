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
import { Http, URLSearchParams } from "@angular/http";
import "rxjs/Rx";
import { AuthHttp } from "angular2-jwt";
import { CacheService } from "ionic-cache/ionic-cache";
import { ErrorService } from "./error.service";
var url = '/api/users';
var UserService = (function () {
    function UserService(http, authHttp, cache, errorService) {
        this.http = http;
        this.authHttp = authHttp;
        this.cache = cache;
        this.errorService = errorService;
        this.cache = cache;
    }
    UserService.prototype.create = function (user) {
        var _this = this;
        return this.http.post(url, user)
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    UserService.prototype.delete = function (id) {
        var _this = this;
        return this.authHttp.delete(url + "/" + id)
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    UserService.prototype.update = function (user) {
        var _this = this;
        return this.authHttp.put(url + "/" + user.id, user)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    UserService.prototype.activate = function (id) {
        var _this = this;
        return this.authHttp.get(url + "/activate/" + id)
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    UserService.prototype.getPriorityStatuses = function () {
        var _this = this;
        return this.authHttp.get("/api/priorityStatuses")
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    UserService.prototype.getProgressStatuses = function () {
        var _this = this;
        return this.authHttp.get("/api/progressStatuses")
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    UserService.prototype.get = function (id) {
        var _this = this;
        var path = url + "/" + id;
        var cacheKey = path;
        var request = this.authHttp.get(path)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
        return this.cache.loadFromObservable(cacheKey, request);
    };
    UserService.prototype.getAll = function (page, size) {
        var _this = this;
        return this.authHttp.get(url + "?page=" + page + '&size=' + size)
            .map(function (resp) { return resp.json(); }).publishReplay(1, 2000).refCount()
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    UserService.prototype.getAllDeactivated = function (page, size) {
        var _this = this;
        return this.authHttp.get(url + "/deactivated?page=" + page + '&size=' + size)
            .map(function (resp) { return resp.json(); }).publishReplay(1, 2000).refCount()
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    UserService.prototype.getDeactivatedUsersPageCount = function () {
        var _this = this;
        return this.authHttp.get(url + "/pageDeactivatedUsersCount")
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    UserService.prototype.getPageCount = function () {
        var _this = this;
        return this.authHttp.get(url + "/pageCount")
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    UserService.prototype.getPotentialRecipientForManager = function (managerId) {
        var _this = this;
        return this.authHttp.get(url + "/empByManager?managerId=" + managerId)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    UserService.prototype.getPotentialRecipientForEmployee = function (empId) {
        var _this = this;
        return this.authHttp.get(url + "/managersByEmp?empId=" + empId)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    UserService.prototype.sendMessage = function (message) {
        var _this = this;
        return this.authHttp.post('/api/sendMessage', message)
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    UserService.prototype.getMyMessages = function (recipient, page) {
        var _this = this;
        return this.authHttp.get("/api/messagesByRecipient?recipient=" + recipient + "&pageNumber=" + page)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    UserService.prototype.searchAll = function (dto) {
        var _this = this;
        var params = this.objToSearchParams(dto);
        return this.authHttp.get(url + "/search", {
            search: params
        }).map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    UserService.prototype.objToSearchParams = function (obj) {
        var params = new URLSearchParams();
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                params.set(key, obj[key]);
        }
        return params;
    };
    return UserService;
}());
UserService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        AuthHttp,
        CacheService,
        ErrorService])
], UserService);
export { UserService };
//# sourceMappingURL=/Users/igor/workspace/TestAngular2/frontend/src/app/service/user.service.js.map