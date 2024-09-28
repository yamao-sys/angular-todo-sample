import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaseFormBoxComponent } from 'app/components/base-form-box/base-form-box.component';
import { InputFormComponent } from 'app/components/input-form/input-form.component';
import { SubmitButtonComponent } from 'app/components/molecules/submit-button/submit-button.component';
import { ValidationErrorsComponent } from 'app/components/validation-errors/validation-errors.component';
import { SignUpDto, ValidateSignUpResponseDto } from 'generated/auth/@types';

@Component({
  selector: 'app-sign-up-input',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    BaseFormBoxComponent,
    InputFormComponent,
    ValidationErrorsComponent,
    SubmitButtonComponent,
  ],
  templateUrl: './sign-up-input.component.html',
  styleUrl: './sign-up-input.component.css',
})
export class SignUpInputComponent {
  @Input() signUpInputs: SignUpDto;
  @Input() validationErrors: ValidateSignUpResponseDto;

  @Output() handleValidateSignUp = new EventEmitter();

  emitHandleValidateSignUp() {
    this.handleValidateSignUp.emit();
  }
}
