import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isLogged();
  }
  isLogged():boolean{
    let loggedIn:true;//tenemos que inicializar al valor que le pasemos si es correcto entre si no se queda en el inicio
    if (!loggedIn){
      this.router.navigate(['/']);
    }
    return loggedIn;
  }
}
