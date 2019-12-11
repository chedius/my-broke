import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  message = "Password and re-password do not match";
  communication = "Registration completed successfully";
  form: FormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      repassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  get data() {
    return this.form.controls;
  }

  submit() {
    if (
      this.form.valid &&
      this.data.password.value === this.data.repassword.value
    ) {
      localStorage.setItem("username", this.data.username.value);
      localStorage.setItem("password", this.data.password.value);
      this.router.navigate(["/login"]);
    }
  }

  Message() {
    if (this.data.password.value !== this.data.repassword.value) {
      return this.message;
    }
  }

  Communication() {
    if (
      this.data.password.value !== null &&
      this.data.repassword.value !== null &&
      this.data.password.value === this.data.repassword.value
    ) {
      return this.communication;
    }
  }
}
