import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginFormInterface } from 'src/app/models/common.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormData: LoginFormInterface = {
    username: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {
    // TODO: Remove this code and Add to home page component
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function () {
      window.history.pushState(null, '', window.location.href);
    };
  }

  onSubmitLoginForm(form: NgForm) {
    if (form.invalid) {
      // Customized console log
      console.log(
        '%cLogin Form is not valid!',
        'color: red; font-weight: 800; font-size: larger'
      );
    } else {
      console.log(this.loginFormData);
      // TODO: Call API to login with form data
    }
  }
}
