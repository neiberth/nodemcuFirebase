import { User } from './../inferfaces/user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  login(user: User){

  }

  registro(user: User){
    return this.afa.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  logout(){

  }

  getLogin(){

  }
}
