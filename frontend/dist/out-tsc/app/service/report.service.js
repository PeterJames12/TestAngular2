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
import { ResponseContentType, Headers } from "@angular/http";
import "rxjs/Rx";
import { AuthHttp } from "angular2-jwt";
import { ErrorService } from "./error.service";
var url = '/api/reports';
var ReportService = (function () {
    function ReportService(authHttp, errorService) {
        this.authHttp = authHttp;
        this.errorService = errorService;
    }
    ReportService.prototype.getPDFRequest = function (requestId) {
        var _this = this;
        var headers = new Headers({ 'Accept': 'application/pdf' });
        return this.authHttp.get(url + "/request?id=" + requestId, {
            headers: headers,
            responseType: ResponseContentType.Blob
        })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    /* FOR ADMIN REPORTS */
    ReportService.prototype.getAdminPDFReport = function (beginDate, endDate, countTopManagers, encryptedEmail) {
        var _this = this;
        var headers = new Headers({ 'Accept': 'application/pdf' });
        // headers.append("Content-Type", 'application/pdf');
        return this.authHttp.get(url + "/adminPDFReport?beginDate=" + beginDate + "&endDate=" + endDate + "&countTop=" + countTopManagers + "&encryptedEmail=" + encryptedEmail, { headers: headers, responseType: ResponseContentType.Blob })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    ReportService.prototype.getAllStatisticsOfFreeRequestsByPeriod = function (beginDate, endDate) {
        var _this = this;
        return this.authHttp.get(url + "/getAllStatisticsOfFreeRequestsByPeriod?beginDate=" + beginDate + "&endDate=" + endDate)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    ReportService.prototype.getAllStatisticsOfClosedRequestsByPeriod = function (beginDate, endDate) {
        var _this = this;
        return this.authHttp.get(url + "/getAllStatisticsOfClosedRequestsByPeriod?beginDate=" + beginDate + "&endDate=" + endDate)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    ReportService.prototype.getListOfBestManagersWithClosedStatusByPeriod = function (beginDate, endDate, countTopManagers) {
        var _this = this;
        return this.authHttp.get(url + "/getBestManagersWithClosedStatusByPeriod?beginDate=" + beginDate + "&endDate=" + endDate + "&countTop=" + countTopManagers)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    /* FOR OFFICE MANAGER REPORTS */
    ReportService.prototype.getManagerPDFReport = function (beginDate, endDate, id, encryptedEmail) {
        var _this = this;
        var headers = new Headers({ 'Accept': 'application/pdf' });
        return this.authHttp.get(url + "/managerPDFReport?beginDate=" + beginDate + "&endDate=" + endDate + "&id=" + id + "&encryptedEmail=" + encryptedEmail, { headers: headers, responseType: ResponseContentType.Blob })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    ReportService.prototype.getManagerStatisticsOfClosedRequestsByPeriod = function (beginDate, endDate, id) {
        var _this = this;
        return this.authHttp.get(url + "/getManagerStatisticsOfClosedRequestsByPeriod?beginDate=" + beginDate + "&endDate=" + endDate + "&id=" + id)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) {
            _this.errorService.processError(error);
            return Observable.throw(error);
        });
    };
    return ReportService;
}());
ReportService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AuthHttp,
        ErrorService])
], ReportService);
export { ReportService };
//# sourceMappingURL=/Users/igor/workspace/TestAngular2/frontend/src/app/service/report.service.js.map