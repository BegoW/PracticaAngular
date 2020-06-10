import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { PieComponent } from './pie/pie.component';
import { HomeComponent } from './home/home.component';
import { UserdetalleComponent } from './userdetalle/userdetalle.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserinsertComponent } from './userinsert/userinsert.component';
import { UsersinfoComponent } from './usersinfo/usersinfo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CuerpoComponent,
    PieComponent,
    HomeComponent,
    UserdetalleComponent,
    UserloginComponent,
    UserinsertComponent,
    UsersinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
