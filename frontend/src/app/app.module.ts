import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Importa el componente raíz

@NgModule({
  declarations: [AppComponent], // Declara el componente raíz
  imports: [BrowserModule], // Importa los módulos necesarios
  bootstrap: [AppComponent], // Especifica el componente raíz para inicializar la aplicación
})
export class AppModule {}