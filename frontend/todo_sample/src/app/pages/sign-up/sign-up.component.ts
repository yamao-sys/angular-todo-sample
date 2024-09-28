import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignUpDto, ValidateSignUpResponseDto } from '../../../generated/auth/@types';
import { postSignUp, postValidateSignUp } from 'apis/authApi';
import { CommonModule } from '@angular/common';
import { SignUpInputComponent } from './sign-up-input/sign-up-input.component';
import { SignUpConfirmationComponent } from './sign-up-confirmation/sign-up-confirmation.component';

type PhaseType = 'input' | 'confirmation' | 'thanks';

const INITIAL_VALIDATION_ERRORS = {
  errors: {
    name: [],
    email: [],
    password: [],
    passwordConfirm: [],
  },
};

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule, SignUpInputComponent, SignUpConfirmationComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  // 画面のフェーズ
  phase: PhaseType = 'input';

  signUpInputs: SignUpDto = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };

  validationErrors: ValidateSignUpResponseDto = INITIAL_VALIDATION_ERRORS;

  togglePhase(toPhase: PhaseType) {
    this.phase = toPhase;
  }

  async handleValidateSignUp() {
    // NOTE: バリデーションエラーをリセット
    this.validationErrors = INITIAL_VALIDATION_ERRORS;

    try {
      const response = await postValidateSignUp(this.signUpInputs);

      // NOTE: バリデーションエラーがなければ、確認画面へ遷移
      if (Object.keys(response.errors).length === 0) {
        this.togglePhase('confirmation');
        return;
      }

      // NOTE: バリデーションエラーの格納と入力パスワードのリセット
      this.validationErrors = response;

      this.signUpInputs.password = '';
      this.signUpInputs.passwordConfirm = '';
    } catch (error) {
      // TODO: エラーハンドリング
      console.log(error);
    }
  }

  async handleSignUp() {
    try {
      await postSignUp(this.signUpInputs);
      this.togglePhase('thanks');
    } catch (error) {
      // TODO: エラーハンドリング
      console.log(error);
    }
  }
}
