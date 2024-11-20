// src/app/components/visualizador/visualizador.component.ts
import { Component } from '@angular/core';
import { EmailComponent } from '../entradas/email/email.component';
import { PasswordComponent } from '../entradas/password/password.component';
import { TextoComponent } from '../entradas/texto/texto.component';

@Component({
  selector: 'app-visualizador',
  standalone: true,
  imports: [EmailComponent, PasswordComponent, TextoComponent], // Importa los componentes aquí
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.css']
})
export class VisualizadorComponent {
  email: string = '';
  password: string = '';
  texto: string = '';

  onEmailChange(value: string) {
    this.email = value;
  }

  onPasswordChange(value: string) {
    this.password = value;
  }

  onTextoChange(value: string) {
    this.texto = value;
  }
}