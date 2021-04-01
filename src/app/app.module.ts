import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { FormsComponent } from './forms/forms.component';
import { MdfLoginPageComponent } from './mdf-login-page/mdf-login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MyAuthGaurd } from './myauthguard';
import { appRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    DashboardComponent,
    RegisterComponent,
    FormsComponent,MdfLoginPageComponent, SignUpComponent
  ],
  imports: [
    BrowserModule, appRoutingModule, FormsModule,ReactiveFormsModule
  ],
  providers: [MyAuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
