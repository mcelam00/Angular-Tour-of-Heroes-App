import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';//TAmbien vemos que el angular cli nos la importo aqui arriba

import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; //importo el FormsModule

//Añado el FormsModule al array de metadata a importar dentro de @NgModule que contiene la lista de módulos externos que la aplicación puede usar
@NgModule({ //decorator que anota la super clase AppModule, para importar el FormsModule u otros componentes externos que queramos incluir como el matherial design tenemos que hacerlo aqui
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent //como vemos, el angular cli nos declaro la componente que creamos ya aqui para que no lo tengamos que hacer nosostros
  ],
  imports: [
    BrowserModule,
    FormsModule //Aquí lo pongo y ahora debería funcionar el binding de dos vías
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
