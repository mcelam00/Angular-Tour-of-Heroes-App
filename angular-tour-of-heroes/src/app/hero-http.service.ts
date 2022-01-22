import { Injectable } from '@angular/core';

//importo el HttpClient y los headers
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { catchError, map, tap } from 'rxjs/operators'; //catchError permite empipar los errores



@Injectable({
  providedIn: 'root'
})



export class HeroHTTPService {

  private URL = "";

  //inyecto el cliente en constructor con una propiedad privada para poder usarlo mas adelante dentro del servicio e instanciar los metodos del HTTPClient
  constructor(private http: HttpClient) { }


    getData(): Observable<Hero[]>{
      return this.http.get<Hero[]>(this.URL) //usamos el http del constructor para llamar al metodo .get de HttpClient que retorna siempre un Observable. Si no ponemos get<> retorna un JSON pero si lo ponemos el observable tiene un tipo y podemos aprovechar mejor typescript
      .pipe(
        catchError(this.handleError<Hero[]>('getData', []))
      );
      }
      //el catchError intercepta un Observable que ha fallado y los pasa por un manejador que es en éste caso el handleError()
      private handleError<T>(operation = 'operation', result?: T) {//toma un tipo generico para que la podamos llamar desde los distintos catchError de las distintas peticiones que hagamos

        return (error: any): Observable<T> => {

          //send the error to console log
          console.error(error); 
        
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }

      
      getDataID(identificador: number): Observable<Hero>{

          var URLNueva = "${this.URL}/${identificador}"; 

          return this.http.get<Hero>(URLNueva);

      }

    getData2(): Observable<Object>{
      return this.http.get(this.URL)
    }

}
