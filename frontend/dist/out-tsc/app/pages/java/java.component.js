var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Injectable } from "@angular/core";
import { ClientsService } from "./ClientsService";
var JavaComponent = (function () {
    ///
    function JavaComponent(_articleService) {
        this._articleService = _articleService;
        this.clients = [
            { firstName: 'Liana',
                lastName: 'Crooks',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg' },
            { firstName: 'Deontae',
                lastName: 'Dare',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg' },
            { firstName: 'Cortez',
                lastName: 'Pacocha',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/holdenweb/128.jpg' },
        ];
        this.clientsFilter = { firstName: '' };
        this.clientFirstName = this.clients[0].firstName;
        this.clientLastName = this.clients[0].lastName;
        this.clientAvatar = this.clients[0].avatar;
        this.fullClients = [];
    }
    ///
    JavaComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        self._articleService.getArticles()
            .subscribe(function (response) { return _this.fullClients = response; }, function (error) { return _this.errorMessage = error; });
    };
    JavaComponent.prototype.change = function (client) {
        this.clientFirstName = client.firstName;
        this.clientLastName = client.lastName;
        this.clientAvatar = client.avatar;
    };
    return JavaComponent;
}());
JavaComponent = __decorate([
    Component({
        selector: 'java',
        templateUrl: 'client.component.html',
        styleUrls: ['client.components.css']
    }),
    Injectable(),
    __metadata("design:paramtypes", [ClientsService])
], JavaComponent);
export { JavaComponent };
//# sourceMappingURL=/Users/igor/workspace/TestAngular2/frontend/src/app/pages/java/java.component.js.map