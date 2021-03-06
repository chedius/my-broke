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
var PostComponent = /** @class */ (function () {
    function PostComponent() {
        this.Remove = new core_1.EventEmitter();
        this.date = new Date();
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent.prototype.removePost = function () {
        if (localStorage.getItem('username') !== null) {
            this.Remove.emit(this.post.id);
        }
        else {
            return null;
        }
    };
    PostComponent.prototype.ofuser = function () {
        if (localStorage.getItem('username') === null) {
            return;
        }
        else {
            return null;
        }
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PostComponent.prototype, "Remove", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PostComponent.prototype, "post", void 0);
    PostComponent = __decorate([
        core_1.Component({
            selector: 'app-post',
            templateUrl: './post.component.html',
            styleUrls: ['./post.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;
//# sourceMappingURL=post.component.js.map