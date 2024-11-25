// src/app/components/visualizador/visualizador.component.ts
import { Component } from '@angular/core';
import { EmailComponent } from '../entradas/email/email.component';
import { PasswordComponent } from '../entradas/password/password.component';
import { TextoComponent } from '../entradas/texto/texto.component';
import { BotonPrimarioComponent } from '../botones/boton-primario/boton-primario.component';
import { BotonSecundarioComponent } from '../botones/boton-secundario/boton-secundario.component';
import { BotonAceptarComponent } from '../botones/boton-aceptar/boton-aceptar.component'; // Importar el botón aceptar

@Component({
  selector: 'app-visualizador',
  standalone: true,
  imports: [EmailComponent, PasswordComponent, TextoComponent, BotonPrimarioComponent, BotonSecundarioComponent, BotonAceptarComponent],
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
    // Cambiar el color del cuadro a un color aleatorio
    this.boxColor = `#${Math.floor(Math.random()*16777215).toString(16)}`; // Generar un color aleatorio
  }
}