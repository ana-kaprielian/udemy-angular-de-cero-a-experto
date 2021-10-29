import {Component} from "@angular/core";
import {registerLocaleData} from "@angular/common";

@Component({
  selector: 'app-personas',  //nombre que vamos a usar cuando incluyamos este componente en otra página HTML
  templateUrl: './personas.component.html',  // ./ -> Ruta relativa
  // template: '<h1>Listado de personas</h1>\n' +
  //   '<app-persona></app-persona>\n' +
  //   '<app-persona></app-persona>'
  //styleUrls: ['./personas.component.css']
  styles: [`h1{
    color: red;
  }`]
})

//hay que declararlo en app.module.ts
export class PersonasComponent{

}
