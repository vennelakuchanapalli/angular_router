import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'

})
export class RegisterComponent {
constructor (public service : ServiceService, public router:Router ){}

isshownavbar = true;

username:any;
userpassword:any;
useremail:any;
userfirst_name:any;
userlast_name:any;
useraddress:any;
usercity:any;
userstate:any;
userzip_code:any;
usercountry:any;
userphone:any;
msg:any;

register(){
 this. isshownavbar = false;
const payload:any =   {
  
    username : this.username,
    password : this.userpassword,
    email : this.useremail,
    first_name : this.userfirst_name,
    last_name : this.userlast_name,
    address : this.useraddress,
    city :this. usercity,
    state : this.userstate,
    zip_code : this.userzip_code,
    country : this.usercountry,
    phone : this.userphone
  };

  this.service.registerdata(payload).subscribe((response:any)=>{
    if(payload.username === "" || payload.email === ""){
      alert("please fill details")
    }
   else if(response.status === "success"){
    this.router.navigate(['/login'])
   }else{
    alert(this.msg = response.message)
   }
     
    
  },(error)=>{
 
  })

}

}
