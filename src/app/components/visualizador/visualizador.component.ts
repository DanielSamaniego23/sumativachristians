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

@Component({
  selector: 'app-visualizador',
  standalone: true,
  imports: [EmailComponent, PasswordComponent, TextoComponent, BotonPrimarioComponent, BotonSecundarioComponent, BotonAceptarComponent, BotonCancelarComponent, BotonModoOscuroComponent],
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
  fontSize: number = 16; // Tamaño de fuente por defecto
  boxColor: string = 'lightgray'; // Color inicial del cuadro
  colors: string[] = ['red', 'blue', 'green', 'yellow', 'orange', 'purple']; // Colores en secuencia
  currentIndex: number = 0; // Índice del color actual

  onEmailChange(value: string) {
    this.tempEmail = value;
  }

  onPasswordChange(value: string) {
    this.tempPassword = value;
  }

  onTextoChange(value: string) {
    this.tempTexto = value;
  }

  subirResultados() {
    this.email = this.tempEmail;
    this.password = this.tempPassword;
    this.texto = this.tempTexto;
  }

  onFontSizeChange() {
    this.fontSize += 2; // Incrementar el tamaño de fuente en 2px
    document.documentElement.style.fontSize = `${this.fontSize}px`; // Cambia el tamaño de fuente de la página
  }

  onFontSizeDecrease() {
    this.fontSize -= 2; // Disminuir el tamaño de fuente en 2px
    if (this.fontSize < 10) this.fontSize = 10; // Limitar el tamaño mínimo
    document.documentElement.style.fontSize = `${this.fontSize}px`; // Cambia el tamaño de fuente de la página
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