import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-base-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-button.component.html',
  styleUrl: './base-button.component.css',
})
export class BaseButtonComponent {
  @Input() labelText: string;
  @Input() additionalStyle = '';
  @Output() emit = new EventEmitter();

  emitEvent() {
    this.emit.emit();
  }
}
