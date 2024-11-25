// src/app/components/botones/boton-cancelar/boton-cancelar.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boton-cancelar',
  standalone: true,
  templateUrl: './boton-cancelar.component.html',
  styleUrls: ['./boton-cancelar.component.css']
})
export class BotonCancelarComponent {
  @Output() cancelClick = new EventEmitter<void>(); // Evento para el clic en cancelar

  // Método que se llama al hacer clic en el botón
  onClick() {
    this.cancelClick.emit(); // Emitir el evento sin parámetros
  }
}