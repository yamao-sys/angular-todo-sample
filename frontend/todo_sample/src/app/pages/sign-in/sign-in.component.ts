import { Component } from '@angular/core';
import { AuthBaseLayoutComponent } from '../auth/components/auth-base-layout/auth-base-layout.component';
import { SignInDto, SignInResponseDto } from 'generated/auth/@types';
import { ValidationErrorsComponent } from 'app/components/validation-errors/validation-errors.component';
import { CommonModule } from '@angular/common';
import { postSignIn } from 'apis/authApi';
import { Router } from '@angular/router';
import { BaseFormBoxComponent } from 'app/components/base-form-box/base-form-box.component';
import { InputFormComponent } from 'app/components/input-form/input-form.component';
import { SubmitButtonComponent } from 'app/components/molecules/submit-button/submit-button.component';

const INITIAL_VALIDATION_ERRORS = {
  errors: [],
};

type signInInputsType = Omit<SignInDto, 'errors'>;

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    CommonModule,
    AuthBaseLayoutComponent,
    ValidationErrorsComponent,
    BaseFormBoxComponent,
    InputFormComponent,
    SubmitButtonComponent,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  constructor(private router: Router) {}

  validationErrors: SignInResponseDto = INITIAL_VALIDATION_ERRORS;

  signInInputs: signInInputsType = {
    email: '',
    password: '',
  };

  async handleSignIn() {
    this.validationErrors = INITIAL_VALIDATION_ERRORS;

    try {
      const response = await postSignIn(this.signInInputs);

      if (response?.errors.length) {
        this.validationErrors = response;
        this.signInInputs.password = '';
      } else {
        window.alert('ログインに成功しました！');
        this.router.navigate(['/']);
      }
    } catch (error) {
      // TODO: エラーハンドリング
      console.log(error);
    }
  }

  updateSignInInputs(key: keyof signInInputsType, value: string) {
    this.signInInputs[key] = value;
  }
}
