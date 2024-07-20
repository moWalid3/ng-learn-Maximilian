import { Component } from '@angular/core';

import { LoginComponent } from './auth/login/login.component';
import { LoginWithReactiveFormComponent } from "./auth/login-with-reactive-form/login-with-reactive-form.component";
import { SignupComponent } from "./auth/signup/signup.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [LoginComponent, LoginWithReactiveFormComponent, SignupComponent],
})
export class AppComponent {}
