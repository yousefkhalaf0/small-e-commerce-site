import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fg: FormBuilder) {
    // this.registerForm = new FormGroup({
    //   name: new FormControl('', [
    //     Validators.required,
    //     Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/),
    //   ]),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   userName: new FormControl('', [
    //     Validators.required,
    //     Validators.pattern(/^[a-z0-9_-]{3,15}$/),
    //   ]),
    //   password: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(8),
    //     Validators.pattern(
    //       /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
    //     ),
    //   ]),
    //   confirmPassword: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(8),
    //     Validators.pattern(
    //       /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
    //     ),
    //   ]),
    // });

    //------------------------------------------------------------

    this.registerForm = this.fg.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        userName: [
          '',
          [Validators.required, Validators.pattern(/^[a-z0-9_-]{3,15}$/)],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
            ),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password &&
      confirmPassword &&
      password.value !== confirmPassword.value
      ? { passwordMismatch: true }
      : null;
  };

  get formControls() {
    return this.registerForm.controls;
  }

  handleSubmitForm() {
    console.log(this.registerForm);
    console.log(this.registerForm.value);
  }
}
