import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { EdituserComponent } from './edituser/edituser.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductsaddComponent } from './productsadd/productsadd.component';


const routes: Routes = [
  {path: '',component:RegisterComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'app',component:AppComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'dashboard',component:DashboardComponent}, 
  {path:'userlist',component:UserlistComponent},
  {path:'userlist',component:UserlistComponent},
  {path:'userlist/:id', component:EdituserComponent},
  {path:'cart', component:CartComponent},
  {path :'productsadd',component:ProductsaddComponent},
  {path:'profile',component:ProfileComponent},
  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
