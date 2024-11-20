import { Component } from '@angular/core';
import { EmailComponent } from '../entradas/email/email.component';
import { PasswordComponent } from '../entradas/password/password.component';
import { TextoComponent } from '../entradas/texto/texto.component';

@Component({
  selector: 'app-visualizador',
  standalone: true,
  imports: [EmailComponent, PasswordComponent, TextoComponent], 
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.css']
})
export class VisualizadorComponent {
  // Variables temporales para el formulario
  tempEmail: string = '';
  tempPassword: string = '';
  tempTexto: string = '';

  // Variables que se actualizan al hacer clic en el botón
  email: string = '';
  password: string = '';
  texto: string = '';

  // Métodos para capturar los cambios del formulario
  onEmailChange(value: string) {
    this.tempEmail = value;
  }

  onPasswordChange(value: string) {
    this.tempPassword = value;
  }

  onTextoChange(value: string) {
    this.tempTexto = value;
  }

  // Método para actualizar los resultados al presionar el botón
  subirResultados() {
    this.email = this.tempEmail;
    this.password = this.tempPassword;
    this.texto = this.tempTexto;
  }
}
