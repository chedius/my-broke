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
var PostFormComponent = /** @class */ (function () {
    function PostFormComponent() {
        this.mess = 'You not register!';
        this.onAdd = new core_1.EventEmitter();
        this.title = '';
        this.text = '';
        this.img = '';
    }
    PostFormComponent.prototype.ngOnInit = function () {
    };
    PostFormComponent.prototype.addPost = function () {
        if (localStorage.getItem('username') === null) {
            console.log(this.mess);
            return this.mess;
        }
        else {
            if (this.text.trim() && this.title.trim() && this.img.trim()) {
                var post = {
                    title: this.title,
                    text: this.text,
                    img: this.img
                };
                this.onAdd.emit(post);
                this.title = this.text = this.img = '';
            }
        }
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], PostFormComponent.prototype, "onAdd", void 0);
    PostFormComponent = __decorate([
        core_1.Component({
            selector: 'app-post-form',
            templateUrl: './post-form.component.html',
            styleUrls: ['./post-form.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], PostFormComponent);
    return PostFormComponent;
}());
exports.PostFormComponent = PostFormComponent;
//# sourceMappingURL=post-form.component.js.map