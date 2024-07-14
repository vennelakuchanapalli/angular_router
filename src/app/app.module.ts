import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceService } from './service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserlistComponent } from './userlist/userlist.component';
import { EdituserComponent } from './edituser/edituser.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsaddComponent } from './productsadd/productsadd.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    NotfoundComponent, 
    UserlistComponent, EdituserComponent, CartComponent, ProfileComponent, NavbarComponent, ProductsaddComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   
  ],
  providers: [
    provideClientHydration(),
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
