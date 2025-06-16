import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root', // Este es el selector que debe estar en index.html
  template: '<router-outlet></router-outlet>', // Renderiza los componentes según las rutas
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule], // Importa el módulo de enrutamiento
})
export class AppComponent {}