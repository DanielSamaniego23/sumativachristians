// src/app/components/botones/boton-primario/boton-primario.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boton-primario',
  standalone: true,
  templateUrl: './boton-primario.component.html',
  styleUrls: ['./boton-primario.component.css']
})
export class BotonPrimarioComponent {
  @Output() fontSizeChange = new EventEmitter<number>(); // Evento para cambiar el tamaño de fuente

  // Método que se llama al hacer clic en el botón
  onClick() {
    this.fontSizeChange.emit(20); // Emitir un tamaño de fuente de 20px (puedes cambiarlo a lo que desees)
  }
}