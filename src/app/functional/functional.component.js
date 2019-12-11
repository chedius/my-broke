"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FunctionalComponent = /** @class */ (function () {
    function FunctionalComponent() {
        this.posts = [
            { title: 'Hi', text: 'This is a form of post that you can use good luck.', img: 'https://sun9-46.userapi.com/c855124/v855124487/15c1ab/KJJzTgEdKtQ.jpg', id: 1 }
        ];
    }
    FunctionalComponent.prototype.ngOnInit = function () {
    };
    FunctionalComponent.prototype.updatePosts = function (post) {
        this.posts.unshift(post);
        console.log('Post:', post);
    };
    FunctionalComponent.prototype.removePost = function (id) {
        this.posts = this.posts.filter(function (p) { return p.id !== id; });
    };
    FunctionalComponent = __decorate([
        core_1.Component({
            selector: 'app-functional',
            templateUrl: './functional.component.html',
            styleUrls: ['./functional.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], FunctionalComponent);
    return FunctionalComponent;
}());
exports.FunctionalComponent = FunctionalComponent;
//# sourceMappingURL=functional.component.js.map