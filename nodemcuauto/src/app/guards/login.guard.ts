import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private AuthService: AuthService,
    private Router: Router,
  ) { }

  canActivate(): Promise<boolean>{
    return new Promise(resolve => {
      this.AuthService.getAuth().onAuthStateChanged(user =>{
        if(user) this.Router.navigate(['/home']);
        
        resolve (!user ? true: false);
      });
    });
  }
  
}
