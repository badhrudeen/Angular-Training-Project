import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor() { }

  login(data){
    if(data.username=='admin' && data.password=='admin')
      return true;
    else
      return false;
  }

  register(){

  }

  logout(){

  }
}
