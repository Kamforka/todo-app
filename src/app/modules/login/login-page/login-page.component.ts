import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required, ],
    });
  }

  onLogin() {
    console.log('onLogin');
    console.log(this.loginForm.valid);
    if (this.loginForm.valid) {
      this.loginService.logIn();
    }
  }

}
