import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css',
})
export class InputFormComponent {
  @Input() labelId: string;
  @Input() labelText: string;
  @Input() type = 'text';
  @Input() inputValue: string;

  @Output() emitInput = new EventEmitter<string>();

  emitInputValue(event: KeyboardEvent) {
    this.emitInput.emit((event.target as HTMLInputElement).value);
  }
}
