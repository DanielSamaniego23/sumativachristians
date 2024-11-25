// src/app/components/botones/boton-secundario/boton-secundario.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boton-secundario',
  standalone: true,
  templateUrl: './boton-secundario.component.html',
  styleUrls: ['./boton-secundario.component.css']
})
export class BotonSecundarioComponent {
  @Output() fontSizeDecrease = new EventEmitter<void>(); // Evento para disminuir el tamaño de fuente

  // Método que se llama al hacer clic en el botón
  onClick() {
    this.fontSizeDecrease.emit(); // Emitir el evento sin parámetros
  }
}