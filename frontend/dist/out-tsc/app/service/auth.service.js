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
import { Http } from "@angular/http";
import { Subject } from "rxjs";
import "rxjs/Rx";
import { tokenNotExpired, JwtHelper } from "angular2-jwt";
var url = '/api/auth';
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.JwtHelper = new JwtHelper();
        this.authEvents = new Subject();
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        var authParams = {
            email: email,
            password: password
        };
        return this.http.post(url, authParams).do(function (resp) {
            localStorage.setItem('id_token', resp.json().token);
            _this.authEvents.next(new DidLogin());
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('id_token');
        this.authEvents.next(new DidLogout());
    };
    AuthService.prototype.isSignedIn = function () {
        return tokenNotExpired();
    };
    Object.defineProperty(AuthService.prototype, "role", {
        get: function () {
            var token = localStorage.getItem('id_token');
            if (!!token) {
                return this.JwtHelper.decodeToken(token).role;
            }
            return 'unauthorized';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "events", {
        get: function () {
            return this.authEvents;
        },
        enumerable: true,
        configurable: true
    });
    return AuthService;
}());
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], AuthService);
export { AuthService };
var DidLogin = (function () {
    function DidLogin() {
    }
    return DidLogin;
}());
export { DidLogin };
var DidLogout = (function () {
    function DidLogout() {
    }
    return DidLogout;
}());
export { DidLogout };
//# sourceMappingURL=/Users/igor/workspace/TestAngular2/frontend/src/app/service/auth.service.js.map