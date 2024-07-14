import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { link } from 'node:fs';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'router';

  constructor(private service: ServiceService, private router: Router) { }
  name: any;
  ngOnInit(): void {
    this.fun()
  }

  fun(){
    
    if (typeof window !== 'undefined' && window.sessionStorage) {
      var user = window.sessionStorage.getItem("user");
      if (user) {
        this.name = JSON.parse(user).username
        console.log(this.name)
      }else{
        console.log("No user in session storage")
      }
    } 
  }
  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login'])
  }
}


