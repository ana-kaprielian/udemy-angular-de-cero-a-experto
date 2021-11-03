import {Component, Input, OnInit} from '@angular/core';
import {Persona} from "./persona.model";

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  nombre: string = "Juan";
  apellido: string = "Perez";
  private edad: number = 28;

  getEdad():number{
    return this.edad;
  }

  //se agrega "strictPropertyInitialization": false en tsconfig.json para que no se requiera inicializar los objetos.
  @Input() persona: Persona;
  @Input() i: number;

  constructor() { }

}
