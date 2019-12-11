import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public forms: FormGroup;
  submitted = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.forms = new FormGroup({
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  get data() {
    return this.forms.controls;
  }

  onSubmit() {
    if (this.forms.invalid) {
      return;
    } else if (
      this.data.username.value === localStorage.getItem("username") &&
      this.data.password.value === localStorage.getItem("password")
    ) {
      this.router.navigate(["/"]);
    } else {
      this.submitted = true;
    }
  }
}
