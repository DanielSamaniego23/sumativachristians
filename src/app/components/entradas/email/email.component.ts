// src/app/components/entradas/email/email.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-email',
  standalone: true,
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  email: string = '';
  
  @Output() emailChange = new EventEmitter<string>();

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement; // Asegúrate de que sea un HTMLInputElement
    this.email = input.value; // Accede al valor
    this.emailChange.emit(this.email);
  }
}