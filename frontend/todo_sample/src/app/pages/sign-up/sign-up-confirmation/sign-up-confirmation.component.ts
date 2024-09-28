import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseButtonComponent } from 'app/components/base-button/base-button.component';
import { SignUpDto } from 'generated/auth/@types';

@Component({
  selector: 'app-sign-up-confirmation',
  standalone: true,
  imports: [BaseButtonComponent],
  templateUrl: './sign-up-confirmation.component.html',
  styleUrl: './sign-up-confirmation.component.css',
})
export class SignUpConfirmationComponent {
  @Input() signUpInputs: SignUpDto;

  @Output() backToInput = new EventEmitter();
  @Output() handleSignUp = new EventEmitter();

  emitBackToInput() {
    this.backToInput.emit();
  }

  emitHandleSignUp() {
    this.handleSignUp.emit();
  }
}
