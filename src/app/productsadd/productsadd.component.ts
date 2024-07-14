import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productsadd',
  templateUrl: './productsadd.component.html',
  styleUrl: './productsadd.component.scss'
})
export class ProductsaddComponent {
  constructor(private service: ServiceService, private router: Router) { }
  
  pdtname: any;
  pdtdescription: any;
  pdtprice: any;
  pdtsku: any;
  pdtcategory: any;
  pdtstock: any;
  image_url: any

  addProduct(){
    
    const payload = {
      name: this.pdtname,
      description: this.pdtdescription,
      price: this.pdtprice,
      sku: this.pdtsku,
      category: this.pdtcategory,
      stock: this.pdtstock

    }

    this.service.addProductToCartList(payload).subscribe((response: any) => {
      //  console.log("dtaaaa" , payload)
      //  console.log(response)
    }, (error) => {
       console.log(error)
    })
  
  }





}
