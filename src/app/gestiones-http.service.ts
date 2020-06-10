import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './modelos/user';

@Injectable({
  providedIn: 'root'
})
export class GestionesHttpService {
  //constructor del servicio que recibe un objeto HttpClient
  constructor(private http: HttpClient) {
  }
  /*1º debe conectar con la Api - método conexionApi - LO HE PUESTO EN UN SERVICIO APARTE (conexionHTTP)
  conexionApi(){
    this.http.get('https://reqres.in').subscribe(datos => {console.log (datos); } );
  }*/
  /*método para obtener el listado de todos los User
  PENDIENTE - PRIMERO DEBERA COMPROBAR QUE ESTÁ CONECTADO A LA API*/
  getUsers(){
    this.http.get('https://reqres.in/api/users').subscribe(datos => {console.log (datos); } );
    }
  //firstname: string, job: string  
  /*public addUser(u: User){
    let user = new User;
    
    user.push(u);
    return user;
  }*/

}
