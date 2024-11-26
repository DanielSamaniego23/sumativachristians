// src/app/components/visualizador/visualizador.component.ts
import { Component } from '@angular/core';
import { EmailComponent } from '../entradas/email/email.component';
import { PasswordComponent } from '../entradas/password/password.component';
import { TextoComponent } from '../entradas/texto/texto.component';
import { BotonPrimarioComponent } from '../botones/boton-primario/boton-primario.component';
import { BotonSecundarioComponent } from '../botones/boton-secundario/boton-secundario.component';
import { BotonAceptarComponent } from '../botones/boton-aceptar/boton-aceptar.component';
import { BotonCancelarComponent } from '../botones/boton-cancelar/boton-cancelar.component'; // Importar el botón cancelar
import { BotonModoOscuroComponent } from '../botones/boton-modo-oscuro/boton-modo-oscuro.component';
import { CommonModule } from '@angular/common'; // Importar CommonModule
@Component({
  selector: 'app-visualizador',
  standalone: true,
  imports: [CommonModule, EmailComponent, PasswordComponent, TextoComponent, BotonPrimarioComponent, BotonSecundarioComponent, BotonAceptarComponent, BotonCancelarComponent, BotonModoOscuroComponent],
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.css']
})
export class VisualizadorComponent {
  tempEmail: string = '';
  tempPassword: string = '';
  tempTexto: string = '';
  email: string = '';
  password: string = '';
  texto: string = '';
   // Tamaño de fuente por defecto
  boxColor: string = 'lightgray'; // Color inicial del cuadro
  colors: string[] = ['red', 'blue', 'green', 'yellow', 'orange', 'purple']; // Colores en secuencia
  currentIndex: number = 0; // Índice del color actual
  emailError: string = '';
  passwordError: string = '';
  onEmailChange(value: string) {
    this.tempEmail = value;
    this.validateEmail();
  }

  onPasswordChange(value: string) {
    this.tempPassword = value;
    this.validatePassword();
  }

  onTextoChange(value: string) {
    this.tempTexto = value;
  }

  validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex para validar el email
    if (!emailPattern.test(this.tempEmail)) {
      this.emailError = 'El email debe contener "@" y terminar en ".com".';
    } else {
      this.emailError = '';
    }
  }

  validatePassword() {
    const passwordPattern = /^(?=.*[!@#$%^&*])(?=.{9,})/; // Regex para validar password
    if (!passwordPattern.test(this.tempPassword)) {
      this.passwordError = 'La contraseña debe contener más de 8 caracteres y al menos un carácter especial.';
    } else {
      this.passwordError = '';
    }
  }

  subirResultados() {
    this.validateEmail();
    this.validatePassword();
    
    if (!this.emailError && !this.passwordError) {
      this.email = this.tempEmail;
      this.password = this.tempPassword;
      this.texto = this.tempTexto;
    }
  }

  fontSize: number = 16; // Tamaño inicial

  // Cambiar tamaño de fuente (incrementar)
  onFontSizeChange() {
    this.fontSize += 2; // Incrementar tamaño de fuente
  }

  // Cambiar tamaño de fuente (decrementar)
  onFontSizeDecrease() {
    this.fontSize = this.fontSize - 2 < 10 ? 10 : this.fontSize - 2; // Evitar que el tamaño sea menor a 10px
  }
  

  

  // Método para cambiar el color del cuadro al hacer clic en aceptar
  onAcceptClick() {
    this.boxColor = this.colors[this.currentIndex]; // Cambiar el color al color actual
    this.currentIndex = (this.currentIndex + 1) % this.colors.length; // Avanzar al siguiente color
  }

  // Método para restablecer el color del cuadro al hacer clic en cancelar
  onCancelClick() {
    // Cambiar el color al anterior en la secuencia
    if (this.currentIndex === 0) {
      this.currentIndex = this.colors.length; // Si estamos en el primer color, ir al último
    }
    this.currentIndex = (this.currentIndex - 1) % this.colors.length; // Retroceder al color anterior
    this.boxColor = this.currentIndex === -1 ? 'white' : this.colors[this.currentIndex]; // Cambiar al color anterior o blanco si es el primero
  }
  isDarkMode: boolean = false;
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }
}