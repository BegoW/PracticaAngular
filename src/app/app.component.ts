import { Component } from '@angular/core';
import { GestionesHttpService } from './gestiones-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PracticaAngularREDES';

  constructor(conectaApi: GestionesHttpService){
    //conectaApi.conexionApi();
    //conectaApi.getUsers(); - lo llamo en el componente
  }



}
