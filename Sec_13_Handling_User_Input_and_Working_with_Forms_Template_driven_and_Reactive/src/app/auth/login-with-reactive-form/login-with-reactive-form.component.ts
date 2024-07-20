import { Component, DestroyRef, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime, of } from 'rxjs';

function mustContainQuestionMark(control: AbstractControl) {
  if (control.value.includes('?')) return null;

  return { doesNotContainQuestionMark: true };
}

// this is a custom asyncValidators ==> an dummy example
// but you can use it with with Http or async status
// it must return observable
function emailIsUnique(control: AbstractControl) {
  if (control.value !== 'test@example.com') {
    return of(null); // of() => rxjs operator transform value to observable return it
  }

  return of({ notUnique: true });
}

@Component({
  selector: 'app-login-with-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-with-reactive-form.component.html',
  styleUrl: './login-with-reactive-form.component.css',
})
export class LoginWithReactiveFormComponent {
  private destroyRef = inject(DestroyRef);

  form = new FormGroup({
    email: new FormControl('', {
      validators: [
        Validators.required,
        Validators.email,
        // (control) => { // custom validator and put it in a func is better
        //   if (control.value.includes('A')) return null;
        //   return { noAChar: 'it must has A char' };
        // },
      ],
      asyncValidators: [emailIsUnique],
    }),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      mustContainQuestionMark,
    ]),
  });

  ngOnInit(): void {
    if(localStorage.getItem('login-form')) {
      this.form.patchValue({email: JSON.parse(localStorage.getItem('login-form')!).email});
    }

    const subscription = this.form.valueChanges.pipe(debounceTime(500)).subscribe({
      next: value => {
        localStorage.setItem('login-form', JSON.stringify({email: value.email}))
      }
    })

    this.destroyRef.onDestroy(() => subscription.unsubscribe);
  }

  get emailIsInvalid() {
    return (
      this.form.controls.email.touched &&
      this.form.controls.email.dirty &&
      this.form.controls.email.invalid
    );
  }

  get passwordIsInvalid() {
    return (
      this.form.controls.password.touched &&
      this.form.controls.password.dirty &&
      this.form.controls.password.invalid
    );
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
