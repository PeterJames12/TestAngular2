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
import { Http, URLSearchParams } from "@angular/http";
import "rxjs/Rx";
import { AuthHttp } from "angular2-jwt";
var url = '/api';
var ChatService = (function () {
    function ChatService(authHttp, http) {
        this.authHttp = authHttp;
        this.http = http;
    }
    ChatService.prototype.getDialogMessages = function (senderId, recipientId) {
        var params = new URLSearchParams();
        params.set('senderId', senderId.toString());
        params.set('recipientId', recipientId.toString());
        return this.authHttp.get(url + "/messagesByDialog", { search: params })
            .map(function (resp) { return resp.json(); });
    };
    ChatService.prototype.getUnreadMessages = function (recipientId) {
        var params = new URLSearchParams();
        params.set('recipientId', recipientId.toString());
        return this.authHttp.get(url + "/unreadMessages", { search: params })
            .map(function (resp) { return resp.json(); });
    };
    ChatService.prototype.getChatFriends = function (userId) {
        var params = new URLSearchParams();
        params.set('userId', userId.toString());
        return this.authHttp.get(url + "/users/findUserChatPartners", { search: params })
            .map(function (resp) { return resp.json(); });
    };
    ChatService.prototype.getChuckJoke = function () {
        return this.http.get("https://api.chucknorris.io/jokes/random")
            .map(function (resp) { return resp.json(); });
    };
    ChatService.prototype.getUsersWithUnreadMessages = function (userId) {
        var params = new URLSearchParams();
        params.set('userId', userId.toString());
        return this.authHttp.get(url + "/users/findUsersWithUnreadMessages", { search: params })
            .map(function (resp) { return resp.json(); });
    };
    return ChatService;
}());
ChatService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AuthHttp,
        Http])
], ChatService);
export { ChatService };
//# sourceMappingURL=/Users/igor/workspace/TestAngular2/frontend/src/app/service/chat.service.js.map