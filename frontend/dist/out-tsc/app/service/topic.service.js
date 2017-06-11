var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from "@angular/core";
import "rxjs/Rx";
var url = '/api/topics';
var TopicService = (function () {
    function TopicService() {
    }
    return TopicService;
}());
TopicService = __decorate([
    Injectable()
], TopicService);
export { TopicService };
//# sourceMappingURL=/Users/igor/workspace/TestAngular2/frontend/src/app/service/topic.service.js.map