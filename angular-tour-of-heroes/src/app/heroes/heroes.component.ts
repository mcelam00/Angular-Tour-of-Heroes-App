import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //importo la interfaz creada que define a un objeto de ésta clase héroe

@Component({
  selector: 'app-heroes', //selector de esta componente para hacer referencia a ella desde el css o desde el html
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

//siempre exportar la clase de la componente para poder importarla en otros sitios como en app.module
export class HeroesComponent implements OnInit {

  //hero = 'Windstorm' //añado un atributo a la componente que es nombre de un héroe
  
  //Refactorizo la propiedad para que sea un objeto de la interfaz definida, ya no solo un atributo nombre como antes
  hero: Hero ={
    id: 1,
    name: 'Windstorm'
  };
     

  constructor() { }
    //Es un Lifecycle Hook; Método que solo se llama una vez justamente despues de cargar la componente, se encarga de hacer tareas de inicializacion complejas que no se deben hacer en el constructor.
  ngOnInit(): void {
  }

}
