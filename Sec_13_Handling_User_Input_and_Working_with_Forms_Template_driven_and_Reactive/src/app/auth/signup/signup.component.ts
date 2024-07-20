import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    passwords: new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      rePassword: new FormControl('', [Validators.required, Validators.minLength(3)]),
    }, {validators: this.equalPasswords}),
    personalData: new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      address: new FormGroup({
        street: new FormControl(''),
        number: new FormControl(''),
        code: new FormControl(''),
        city: new FormControl(''),
      }),
    }),
    role: new FormControl<'student' | 'teacher' | 'employee' | 'founder' | 'other'>('student'),
    source: new FormArray([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
    ]),
    agree: new FormControl(false)
  })

  equalPasswords(control: AbstractControl) {
    const password = control.get('password');
    const rePassword = control.get('rePassword');
    if(password?.value === rePassword?.value)
      return null;
    else {
      rePassword?.setErrors({notMathPassword: true});
      return {notMathPassword: true};
    }
  }


  onSubmit() {
    console.log(this.form.value);
  }

  onReset() {
    this.form.reset();
  }
}
