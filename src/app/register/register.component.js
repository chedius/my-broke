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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router) {
        this.router = router;
        this.message = "Password and re-password do not match";
        this.communication = "Registration completed successfully";
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.form = new forms_1.FormGroup({
            username: new forms_1.FormControl("", [
                forms_1.Validators.required,
                forms_1.Validators.minLength(6)
            ]),
            password: new forms_1.FormControl(null, [
                forms_1.Validators.required,
                forms_1.Validators.minLength(6)
            ]),
            repassword: new forms_1.FormControl(null, [
                forms_1.Validators.required,
                forms_1.Validators.minLength(6)
            ])
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "data", {
        get: function () {
            return this.form.controls;
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.submit = function () {
        if (this.form.valid &&
            this.data.password.value === this.data.repassword.value) {
            localStorage.setItem("username", this.data.username.value);
            localStorage.setItem("password", this.data.password.value);
            this.router.navigate(["/login"]);
        }
    };
    RegisterComponent.prototype.Message = function () {
        if (this.data.password.value !== this.data.repassword.value) {
            return this.message;
        }
    };
    RegisterComponent.prototype.Communication = function () {
        if (this.data.password.value !== null &&
            this.data.repassword.value !== null &&
            this.data.password.value === this.data.repassword.value) {
            return this.communication;
        }
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: "app-register",
            templateUrl: "./register.component.html",
            styleUrls: ["./register.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map