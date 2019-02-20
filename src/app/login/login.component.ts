import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public userModel = new User('','');
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  userLogin(){
    if(this.authService.login(this.userModel)){
      this.router.navigate(['/departments']);
    }else{
      console.log(false);
    }
  }

}
