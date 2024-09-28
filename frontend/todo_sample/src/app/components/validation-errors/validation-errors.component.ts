import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-validation-errors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './validation-errors.component.html',
  styleUrl: './validation-errors.component.css',
})
export class ValidationErrorsComponent {
  @Input() messages: string[];
}
