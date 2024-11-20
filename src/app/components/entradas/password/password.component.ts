// src/app/components/entradas/password/password.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-password',
  standalone: true,
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  password: string = '';
  
  @Output() passwordChange = new EventEmitter<string>();

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement; // Asegúrate de que sea un HTMLInputElement
    this.password = input.value; // Accede al valor
    this.passwordChange.emit(this.password);
  }
}