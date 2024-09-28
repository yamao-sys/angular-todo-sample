import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-form-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-form-box.component.html',
  styleUrl: './base-form-box.component.css',
})
export class BaseFormBoxComponent {
  @Input() needsMargin = true;
}
