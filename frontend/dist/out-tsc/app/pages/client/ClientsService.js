var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, } from 'rxjs/Rx';
import 'rxjs/Rx'; //get everything from Rx
import 'rxjs/add/operator/toPromise';
import { ToastsManager } from "ng2-toastr";
var ClientsService = (function () {
    function ClientsService(http, toastr) {
        this.http = http;
        this.toastr = toastr;
    }
    ClientsService.prototype.getArticles = function () {
        return this.http.get('client.json').map(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    ClientsService.prototype.handleError = function (errorResponse) {
        this.toastr.error("Wrong");
        return Observable.throw(errorResponse.json().error || "Server error");
    };
    return ClientsService;
}());
ClientsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, ToastsManager])
], ClientsService);
export { ClientsService };
//# sourceMappingURL=/Users/igor/workspace/TestAngular2/frontend/src/app/pages/client/ClientsService.js.map