import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrl: './edituser.component.scss'
})
export class EdituserComponent {
userdetails:any = []
constructor(private service: ServiceService, private activatedroutes : ActivatedRoute){}

ngOnInit(){
let id:any = this.activatedroutes.snapshot.paramMap.get('id');

this.service.getAllusers().subscribe((response:any)=>{

 this.userdetails= response.users.filter((item:any) => item . id == id)
 
},(error)=>{

})
}
}
