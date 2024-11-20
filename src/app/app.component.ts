// src/app/app.component.ts
import { Component } from '@angular/core';
import { VisualizadorComponent } from './components/visualizador/visualizador.component';
import { BotonModoOscuroComponent } from './components/botones/boton-modo-oscuro/boton-modo-oscuro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VisualizadorComponent, BotonModoOscuroComponent],
  template: `
    <header>
      <app-boton-modo-oscuro></app-boton-modo-oscuro>
    </header>
    <app-visualizador></app-visualizador>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email: string = '';
  password: string = '';
  texto: string = '';
}