// src/app/components/entradas/texto/texto.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-texto',
  standalone: true,
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})
export class TextoComponent {
  texto: string = '';
  
  @Output() textoChange = new EventEmitter<string>();

  onInputChange(event: Event) {
    const input = event.target as HTMLTextAreaElement; // Asegúrate de que sea un HTMLTextAreaElement
    this.texto = input.value; // Accede al valor
    this.textoChange.emit(this.texto);
  }
}