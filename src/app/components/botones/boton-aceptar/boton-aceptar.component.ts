// src/app/components/botones/boton-aceptar/boton-aceptar.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boton-aceptar',
  standalone: true,
  templateUrl: './boton-aceptar.component.html',
  styleUrls: ['./boton-aceptar.component.css']
})
export class BotonAceptarComponent {
  @Output() acceptClick = new EventEmitter<void>(); // Evento para el clic en aceptar

  // Método que se llama al hacer clic en el botón
  onClick() {
    this.acceptClick.emit(); // Emitir el evento sin parámetros
  }
}