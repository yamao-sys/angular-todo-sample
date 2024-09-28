import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaseFormBoxComponent } from 'app/components/base-form-box/base-form-box.component';
import { SignUpDto, ValidateSignUpResponseDto } from 'generated/auth/@types';

@Component({
  selector: 'app-sign-up-input',
  standalone: true,
  imports: [FormsModule, CommonModule, BaseFormBoxComponent],
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
