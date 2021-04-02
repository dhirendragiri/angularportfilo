import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginsRef=new FormGroup({
    user:new FormControl(),
    pass:new FormControl()
  });
  constructor(public route:Router) { }

  ngOnInit(): void {
    
  }
  msg:string=""
  
  checkUser(){
    console.log(this.loginsRef.value); // this is to disply all value , 
    let user1 = this.loginsRef.get("user")?.value; // this is to get specific  control value.
    let pass1 = this.loginsRef.get("pass")?.value;
    console.log(user1+""+pass1);
    if (user1=="jesper" && pass1=="1234"){
      this.msg= "Sucessfully Login"
      this.route.navigate(["home"]);
    }else{
      this.msg = "failure try once ";
    }
    
  }

  homePage(){

    //Token must store when username and password must be correct.
    sessionStorage.setItem("token","123");
    this.route.navigate(["home"]);

  }

}
