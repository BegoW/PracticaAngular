import { Component, OnInit } from '@angular/core';
import { User } from '../modelos/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetalle',
  templateUrl: './userdetalle.component.html',
  styleUrls: ['./userdetalle.component.css']
})
export class UserdetalleComponent {
 
  user: User;
  /*HAY QUE CONVERTIR LA VARIABLE */
  constructor(route: ActivatedRoute) {
   // this.user.id = route.snapshot.paramMap.get('id');
    this.user.email = route.snapshot.paramMap.get('email');
    this.user.first_name = route.snapshot.paramMap.get('first_name');
    this.user.last_name = route.snapshot.paramMap.get('last_name');
    this.user.avatar = route.snapshot.paramMap.get('avatar');
    this.user.job = route.snapshot.paramMap.get('job');
  }
}
