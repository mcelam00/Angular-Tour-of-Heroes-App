import { Component, OnInit, Input } from '@angular/core'; //importo el input
import { Hero } from '../hero'; //importamos el tipo del objeto heroe que nos va a venir

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

//como se trata de una componente hija de la componente padre, tenemos que conseguir la forma de comunicacion entre ambas, para ello importmos el input.
//La comunicacion va a consistir en que la componente padre le va a pasar a la componente hija el héroe que se está picando (el hero de la iteracion del for)
//Ëse héroe que llega del padre será por supuesto de tipo Hero y llegará por mediación del Input, así que hay que crear un aptributo de la clase que sea el que reciba lo que llegue con el input.
//una vez lo hemos importado la componente padre ya puede generar eventos como querea que la componenete hina los va a receibir conforme la anterior los mande sin necesida dmayor de comunicacion entre ambas.






export class HeroDetailComponent implements OnInit {

    @Input() hero?: Hero; //aquí será lo que en la anterior era el heroeSeleccionado que podia o no tomar valor segun si se picaba algo o nada

  constructor() { }

  ngOnInit(): void {
  }

}
