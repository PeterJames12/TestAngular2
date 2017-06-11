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
import "rxjs/Rx";
import { AuthHttp } from "angular2-jwt";
var url = '/api';
var CommentService = (function () {
    function CommentService(authHttp) {
        this.authHttp = authHttp;
    }
    CommentService.prototype.create = function (comment) {
        return this.authHttp.post(url + "/sendComment", comment);
    };
    CommentService.prototype.delete = function (id) {
        return this.authHttp.delete(url + "/comments/" + id);
    };
    CommentService.prototype.getByRequest = function (requestId) {
        return this.authHttp.get(url + "/commentsByRequest?requestId=" + requestId).map(function (resp) { return resp.json(); });
    };
    return CommentService;
}());
CommentService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AuthHttp])
], CommentService);
export { CommentService };
//# sourceMappingURL=/Users/igor/workspace/TestAngular2/frontend/src/app/service/comment.service.js.map