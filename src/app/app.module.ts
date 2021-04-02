import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MdfLoginPageComponent } from './mdf-login-page/mdf-login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyAuthGaurd } from './myauthguard';
import { appRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
  
    ProfileComponent,
    DashboardComponent,
   
    MdfLoginPageComponent,  
  ],
  imports: [
    BrowserModule, appRoutingModule, FormsModule,ReactiveFormsModule
  ],
  providers: [MyAuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
