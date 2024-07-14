import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
constructor (private service :ServiceService, private router : Router){}
productlist:any = [];
msg:string='';

ngOnInit(){
 
  this.service.showList().subscribe((res:any)=>{
    this.productlist = res.products;
   
  },(error)=>{
     
  })

}


addItemsToCart(product:any){
  let payload ={
    "user_id": this.service.getUserDetails().id,
      "product_id":product.id,
      "quantity": 1
  }
  this.service.addCart(payload).subscribe((response:any)=>{
   
    this.msg = response.message
    
  },(error)=>{})
}

}
