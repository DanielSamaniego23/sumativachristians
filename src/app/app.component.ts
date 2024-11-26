// src/app/app.component.ts
import { Component } from '@angular/core';
import { VisualizadorComponent } from './components/visualizador/visualizador.component';
import { BotonModoOscuroComponent } from './components/botones/boton-modo-oscuro/boton-modo-oscuro.component';
import { BotonAceptarComponent } from './components/botones/boton-aceptar/boton-aceptar.component';
import { BotonCancelarComponent } from './components/botones/boton-cancelar/boton-cancelar.component';
import { BotonPrimarioComponent } from './components/botones/boton-primario/boton-primario.component';
import { BotonSecundarioComponent } from './components/botones/boton-secundario/boton-secundario.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VisualizadorComponent, BotonModoOscuroComponent, BotonAceptarComponent, BotonCancelarComponent,BotonPrimarioComponent,BotonSecundarioComponent],
  template: `
  
      
    <app-visualizador></app-visualizador>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email: string = '';
  password: string = '';
  texto: string = '';
}