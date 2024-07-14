import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private service: ServiceService, private router: Router) { }
  name: any;
  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      var user = window.sessionStorage.getItem("user");
      if (user) {
        this.name = JSON.parse(user).username
        console.log(this.name)
      }
    } 
  }
  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login'])
  }
}

