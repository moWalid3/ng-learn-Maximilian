import {
  afterNextRender,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  viewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private loginForm = viewChild.required<NgForm>('form');
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      
      if (localStorage.getItem('login-form')) {
        setTimeout(() => {
          this.loginForm().controls['email'].setValue(
            JSON.parse(localStorage.getItem('login-form')!).email
          );
        }, 1);
      }

      const subscription = this.loginForm()
        .valueChanges?.pipe(debounceTime(500))
        .subscribe({
          next: (value) => {
            localStorage.setItem(
              'login-form',
              JSON.stringify({ email: value.email })
            );
          },
        });

      this.destroyRef.onDestroy(() => subscription?.unsubscribe());
    });
  }

  onSubmit(form: NgForm) {
    const enteredEmail = form.value.email;
    const enteredPassword = form.value.password;

    console.log(enteredEmail, enteredPassword);
    form.reset();
  }
}
