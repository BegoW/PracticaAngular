import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConexionHttpService {
/*el objeto/clase HttpClient tiene un método get que nos permite hacer peticiones a un servidor y que usaremos para llamar a la API (https://reqres.in) que vamos a usar*/
//constructor del servicio que recibe un objeto HttpClient
  constructor(private conexionApi: HttpClient) {
    /*conexionApi es de tipo HttpClient - conecta con la Api a través del (get), esta es una llamada normal usando "subscribe" (se puede hacer con promesas (mirar))*/
    this.conexionApi.get('https://reqres.in').subscribe(datos => {console.log (datos); });
  }
}




