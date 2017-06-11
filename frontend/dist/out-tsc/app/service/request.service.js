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
import { URLSearchParams } from "@angular/http";
import "rxjs/Rx";
import { AuthHttp } from "angular2-jwt";
import { ErrorService } from "./error.service";
var url = '/api/requests';
var RequestService = (function () {
    function RequestService(authHttp, errorService) {
        this.authHttp = authHttp;
        this.errorService = errorService;
    }
    RequestService.prototype.create = function (request) {
        var _this = this;
        return this.authHttp.post(url, request)
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    RequestService.prototype.createSubRequest = function (subRequest) {
        var _this = this;
        return this.authHttp.post(url + "/createSubRequest", subRequest)
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    RequestService.prototype.update = function (request) {
        var _this = this;
        return this.authHttp.put(url, request)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    RequestService.prototype.delete = function (id) {
        var _this = this;
        return this.authHttp.delete(url + "/" + id)
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    RequestService.prototype.get = function (id) {
        var _this = this;
        return this.authHttp.get(url + "/" + id)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    RequestService.prototype.getCountRequestsByPeriod = function (beginDate, endDate) {
        var _this = this;
        return this.authHttp.get(url + "/getCountRequestsByPeriod?beginDate=" + beginDate + "&endDate=" + endDate)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    RequestService.prototype.getCountRequestsByStartDate = function (beginDate, months) {
        var _this = this;
        return this.authHttp.get(url + "/getCountRequestsByStartDate?beginDate=" + beginDate + "&months=" + months)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    RequestService.prototype.getAll = function (page, size) {
        var _this = this;
        return this.authHttp.get(url + "/fetch?page=" + page + '&size=' + size)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    RequestService.prototype.searchAll = function (dto) {
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
    RequestService.prototype.objToSearchParams = function (obj) {
        var params = new URLSearchParams();
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                params.set(key, obj[key]);
        }
        return params;
    };
    RequestService.prototype.getPageCount = function () {
        var _this = this;
        return this.authHttp.get(url + "/pageCount")
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    RequestService.prototype.getPageCountFree = function () {
        var _this = this;
        return this.authHttp.get(url + "/pageCountFree")
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    RequestService.prototype.getQuantityRequest = function () {
        return this.authHttp.get(url + "/countRequestByProgressStatus").map(function (resp) { return resp.json(); });
    };
    RequestService.prototype.getFree = function (page, size) {
        var _this = this;
        return this.authHttp.get(url + "/fetchFree?page=" + page + '&size=' + size)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    RequestService.prototype.getRequestCountByAssignee = function (assigneeId) {
        var _this = this;
        return this.authHttp.get(url + "/pageCountByAssignee?assigneeId=" + assigneeId)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    RequestService.prototype.getAllByAssignee = function (assigneeId, page) {
        var _this = this;
        return this.authHttp.get(url + "/fetchByAssignee?assigneeId=" + assigneeId + "&pageNumber=" + page)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    RequestService.prototype.getInProgressAssigned = function (page, size, user_id) {
        var _this = this;
        return this.authHttp.get(url + "/inProgressRequestsByAssignee?page=" + page + '&size=' + size + "&manager=" + user_id)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    RequestService.prototype.getInProgressAssignedPageCount = function (managerId) {
        var _this = this;
        return this.authHttp.get(url + "/countInProgressRequestsByAssignee?manager=" + managerId)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    RequestService.prototype.getClosedAssigned = function (page, size, user_id) {
        var _this = this;
        return this.authHttp.get(url + "/closedRequestsByAssignee?page=" + page + '&size=' + size + "&manager=" + user_id)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    RequestService.prototype.getClosedAssignedPageCount = function (managerId) {
        var _this = this;
        return this.authHttp.get(url + "/countClosedRequestsByAssignee?manager=" + managerId)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    RequestService.prototype.assign = function (request) {
        var _this = this;
        return this.authHttp.put(url + '/assignRequest', request)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    RequestService.prototype.close = function (request) {
        var _this = this;
        return this.authHttp.put(url + "/closeRequest", request)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    RequestService.prototype.reopen = function (request) {
        var _this = this;
        return this.authHttp.put(url + "/reopenRequest", request)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    RequestService.prototype.join = function (request, checked) {
        var _this = this;
        return this.authHttp.post(url + "/join/" + checked.join(), request)
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    RequestService.prototype.getQuantityForUserByProgressStatus = function (userId) {
        return this.authHttp.get(url + "/getStatisticByProgressStatusForUser?userId=" + userId).map(function (resp) { return resp.json(); });
    };
    RequestService.prototype.getStatisticForAdminDashBoard = function (howLong) {
        return this.authHttp.get(url + "/getStatisticForAdminDashBoard?howLong=" + howLong).map(function (resp) { return resp.json(); });
    };
    RequestService.prototype.getOpenClosedRequestForUser = function (userId, howLong) {
        return this.authHttp.get(url + "/getOpenClosedRequestForUser?userId=" + userId + "&howLong=" + howLong)
            .map(function (resp) { return resp.json(); });
    };
    RequestService.prototype.getSubRequests = function (id) {
        var _this = this;
        return this.authHttp.get(url + "/getSubRequests/" + id)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    RequestService.prototype.getJoinedRequests = function (id) {
        var _this = this;
        return this.authHttp.get(url + "/getJoinedGroupRequests/" + id)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    RequestService.prototype.getDeadlines = function (id) {
        var _this = this;
        return this.authHttp.get(url + "/getDeadlines?managerID=" + id)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    RequestService.prototype.getTotalUsers = function () {
        return this.authHttp.get(url + "/getTotalUsers").map(function (resp) { return resp.json(); });
    };
    RequestService.prototype.getTotalRequests = function () {
        return this.authHttp.get(url + "/getTotalRequests").map(function (resp) { return resp.json(); });
    };
    RequestService.prototype.getRequestToday = function () {
        return this.authHttp.get(url + "/getRequestToday").map(function (resp) { return resp.json(); });
    };
    RequestService.prototype.getRunningToday = function () {
        return this.authHttp.get(url + "/getRunningToday").map(function (resp) { return resp.json(); });
    };
    return RequestService;
}());
RequestService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AuthHttp,
        ErrorService])
], RequestService);
export { RequestService };
//# sourceMappingURL=/Users/igor/workspace/TestAngular2/frontend/src/app/service/request.service.js.map