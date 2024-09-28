import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseButtonComponent } from 'app/components/base-button/base-button.component';

@Component({
  selector: 'app-submit-button',
  standalone: true,
  imports: [BaseButtonComponent],
  templateUrl: './submit-button.component.html',
  styleUrl: './submit-button.component.css',
})
export class SubmitButtonComponent {
  @Input() labelText: string;
  @Output() handleSubmit = new EventEmitter();

  emitSubmit() {
    this.handleSubmit.emit();
  }
}
