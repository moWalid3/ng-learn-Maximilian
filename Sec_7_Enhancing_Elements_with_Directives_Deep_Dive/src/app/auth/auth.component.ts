import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthService } from './auth.service';
import { LogDirective } from '../directives/log.directive';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  hostDirectives: [LogDirective] // this like you set logDirective as a directive on <app-auth />
})
export class AuthComponent {
  email = signal('');
  password = signal('');
  private authService = inject(AuthService);

  onSubmit() {
    this.authService.authenticate(this.email(), this.password());
  }
}
