import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  userdetails: any;

  constructor(public httpservice: HttpClient) { }
  getAllusers(){
    return this.httpservice.get("http://test-1-env.eba-hjda8m8i.ap-south-1.elasticbeanstalk.com/sample/auth/getAllUsers.php")
  }

  registerdata(payload: any) {
    return this.httpservice.post("http://test-1-env.eba-hjda8m8i.ap-south-1.elasticbeanstalk.com/sample/auth/register.php", payload)
  }
  login(payload: any) {
    return this.httpservice.post("http://test-1-env.eba-hjda8m8i.ap-south-1.elasticbeanstalk.com/sample/auth/login.php", payload)
  }
  showList(){
    return this.httpservice.get("http://test-1-env.eba-hjda8m8i.ap-south-1.elasticbeanstalk.com/sample/products/getAll.php")
  
  }
  addProductToCartList(obj:any){
    return this.httpservice.post("http://test-1-env.eba-hjda8m8i.ap-south-1.elasticbeanstalk.com/sample/products/add.php",obj)
  }
  addCart(obj:any){
return this.httpservice.post("http://test-1-env.eba-hjda8m8i.ap-south-1.elasticbeanstalk.com/sample/cart/add.php",obj)
  }
  getAllCartItems(obj:any){
    return this.httpservice.post("http://test-1-env.eba-hjda8m8i.ap-south-1.elasticbeanstalk.com/sample/cart/getAll.php",obj)
  }
  deleteCartItems(obj:any){
    return this.httpservice.post("http://test-1-env.eba-hjda8m8i.ap-south-1.elasticbeanstalk.com/sample/cart/delete.php",obj)

  }
  getUserDetails(){
    let data:any = sessionStorage.getItem('user')
    this.userdetails = JSON.parse(data)
    return this.userdetails;
  }
  upadateQuantity(obj:any) {
    return this.httpservice.post("http://test-1-env.eba-hjda8m8i.ap-south-1.elasticbeanstalk.com/sample/cart/updateQty.php",obj)

}
}
