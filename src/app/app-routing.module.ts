import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginComponent } from './login/login.component';
import { MdfLoginPageComponent } from './mdf-login-page/mdf-login-page.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MyAuthGaurd } from './myauthguard';

// API hold all routing path details.
//CONSt is a keyword to declare the varaible. rout is  a varaible which hold all Routes details. 
const router: Routes = [
  {path:"\login",component:LoginComponent},
  {path:"\register",component:RegisterComponent},
  {path:"\sign-Up",component:SignUpComponent},

  {path:"\home",component:MdfLoginPageComponent,canActivate:[MyAuthGaurd]},
  {path:"\profile",component:ProfileComponent},
  {path:"",redirectTo:"\home",pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }