import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  msg:string = ""
  cartlist: any[] = [];
  totalAmount: number = 0;

  constructor(private service: ServiceService) {}

  ngOnInit() {
    this.getCartList();
  }

  getCartList() {
    let payload = {
      user_id: this.service.getUserDetails().id
    };    this.service.getAllCartItems(payload).subscribe((response: any) => {
      this.cartlist = response.cart_list;
      this.calculateTotalAmount();
    }, (error) => {
      // Handle error
    });
  }

  calculateTotalAmount() {
    this.totalAmount = this.cartlist.reduce((total, cartitem) => {
      return total + (cartitem.price * cartitem.quantity);
    }, 0).toFixed(2);
  }

  deleteProduct(item: any) {
    let payload = {
      user_id: this.service.getUserDetails().id,
      product_id: item.product_id
    };
    this.service.deleteCartItems(payload).subscribe((response: any) => {
      this.getCartList();
      this.msg = response.message;
    }, (error) => {
      // Handle error
    });
  }

  decrementQuantity(item: any) {
    if (item.quantity > 1) {
      let payload = {
        user_id: this.service.getUserDetails().id,
        product_id: item.product_id,
        quantity: item.quantity - 1
      };
      this.service.upadateQuantity(payload).subscribe((response: any) => {
        this.getCartList();
        this.msg = response.message;
      }, (error) => {
        // Handle error
      });
    }
  }

  incrementQuantity(item: any) {
    let payload = {
      user_id: this.service.getUserDetails().id,
      product_id: item.product_id,
      quantity: item.quantity + 1
    };
    this.service.upadateQuantity(payload).subscribe((response: any) => {
      this.getCartList();
      this.msg = response.message;
    }, (error) => {
      // Handle error
    });
  }

  calculateItemTotal(cartitem: any): number {
    var totalItemPrice:any=(cartitem.price * cartitem.quantity).toFixed(2);
    return totalItemPrice
  }
}
