import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PersonasComponent} from "./personas/personas.component";
import { PersonaComponent } from './persona/persona.component';
import {FormsModule} from "@angular/forms";

//NgModule -> Decorador: para agregar características extra.
//Atributos: declarations, imports, providers, bootstrap
@NgModule({
  //componentes a usar en nuestra App
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  ],
  providers: [],
  bootstrap: [AppComponent]  // indica cómo se levanta la app
})
export class AppModule { }
