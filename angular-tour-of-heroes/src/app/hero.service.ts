import { Injectable } from '@angular/core'; //y el decorator @Injectable hacen que la clase se pueda inyectar por el sistema de inyeccion de dependencias

//Él servicio se va a encargar de proporcionar los heroes, en lugar de tenerlos almacenados en la clase de la componente en un atributo
import { Hero } from './hero';
import { HEROES } from './mock-heroes'; 



@Injectable({
  providedIn: 'root' //Nos permite inyectarlo
})
export class HeroService { //Proporciona un servicio inyectable que a su vez puede tener dependencias inyectadas

  constructor() { }

  /*El método retorna el array de héroes cuando se le llama*/
  getHeroes(): Hero[]{
    return HEROES;
  }



}
//La idea es que el servicio nos permite separar la parte de acceso a datos de las componentes gráficas, así conseguimos menor acoplamiento. El servicio puede coger los datos de un web service, de un local storage, de un mock...

//Creado con el comando "ng generate service hero"