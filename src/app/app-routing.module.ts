import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersinfoComponent } from './usersinfo/usersinfo.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserinsertComponent } from './userinsert/userinsert.component';
import { UserdetalleComponent } from './userdetalle/userdetalle.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'usuarios', component: UsersinfoComponent},
  {path: 'login', component: UserloginComponent},
  {path: 'insertar', component: UserinsertComponent},
  {path: 'detalle', component: UserdetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
