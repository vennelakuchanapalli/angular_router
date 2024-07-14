import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  constructor(public service: ServiceService, public router: Router) { }

  isshownavbar = false;

  username: any;
  userpassword: any;
  msg: any;
  logIn() {
    // const storedUsername = sessionStorage.getItem('username');
    // const storedPassword = sessionStorage.getItem('password');

    // if (storedUsername && storedPassword) {
    //   this.usernames = storedUsername;
    //   this.userpassword = storedPassword;
    // }

    let payload: any = {
      username: this.username,
      password: this.userpassword
    }

    return this.service.login(payload).subscribe((response: any) => {
    
       if (response.status === "success") {
        sessionStorage.setItem("user",JSON.stringify(response.user))
        this.router.navigate(['/dashboard'])
      } 
      if(response.status === "error")  {
        alert(response.message)
      }
      
      
    }, (error) => {

    })
  }
}
