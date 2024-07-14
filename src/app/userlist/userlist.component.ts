import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.scss'
})
export class UserlistComponent {
userlist:any = [];
 tableheader:any = ["Names","Email","First_name","Last_name",
 "Address","City","State","Zip_code","Country","Phone","Active"]
 
 constructor(private service: ServiceService, private router:Router){}
 ngOnInit(){
  this.service.getAllusers().subscribe((response:any)=>{
this.userlist = response.users

  },
  (error)=>{

  })
 }
 edit(id:any){
this.router.navigate(['/userlist', id])
 }
}
