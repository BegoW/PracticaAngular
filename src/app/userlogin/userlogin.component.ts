import { Component, OnInit } from '@angular/core';
import { User } from '../modelos/user';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    console.log('ha entrado en el componenteuserlogin');
  }

  public comprobarLogin(){

  }
}


