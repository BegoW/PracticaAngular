import { Component, OnInit } from '@angular/core';
import { GestionesHttpService } from '../gestiones-http.service';
import { User } from '../modelos/user';


@Component({
  selector: 'app-usersinfo',
  templateUrl: './usersinfo.component.html',
  styleUrls: ['./usersinfo.component.css']
})
export class UsersinfoComponent implements OnInit{

  users: User[];
  ngOnInit(){
    console.log('ha entrado en el componenteuserlogin');
  }
  
 constructor(private listadoUsers: GestionesHttpService) {
    this.users = listadoUsers.getUsers();
  }

}
