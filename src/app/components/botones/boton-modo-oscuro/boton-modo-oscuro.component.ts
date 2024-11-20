// src/app/components/botones/boton-modo-oscuro/boton-modo-oscuro.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-boton-modo-oscuro',
  standalone: true,
  template: `<button (click)="toggleDarkMode()">
               {{ isDarkMode ? 'Modo Claro' : 'Modo Oscuro' }}
             </button>`,
  styles: ['./boton-modo-oscuro.component.css']
})
export class BotonModoOscuroComponent {
  isDarkMode: boolean = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }
}