import { Component } from '@angular/core';

//Component -> Decorador
//Atributos: selector, teplateUrl, styleUrls
@Component({
  selector: 'app-root',  //nombre del componente q se va a usar en index.HTML
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Mi primera app en angular';    //atributo de la clase, definidos en app.component.html
}
