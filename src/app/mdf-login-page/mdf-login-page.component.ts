import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mdf-login-page',
  templateUrl: './mdf-login-page.component.html',
  styleUrls: ['./mdf-login-page.component.css']
})
export class MdfLoginPageComponent implements OnInit {


  // This is how we create form group, when we have another form groupwe create like this.
  loginsRef=new FormGroup({
    user:new FormControl(),
    pass:new FormControl()

    /*addAdderess:new FormControl({  // another form group.

    });*/
  });
  msg:string=""

  constructor(public rot:Router) { }

  ngOnInit(): void {
  }
  checkUser(){
    console.log(this.loginsRef.value); // this is to disply all value , 
    let user1 = this.loginsRef.get("user")?.value; // this is to get specific  control value.
    let pass1 = this.loginsRef.get("pass")?.value;
    console.log(user1+""+pass1);
    if (user1=="jesper" && pass1=="1234"){
      this.msg= "Sucessfully Login"
      this.rot.navigate(["profile"]);
    }else{
      this.msg = "failure try once ";
    }
    
  }
  signup(){
    this.rot.navigate(["sign-up"]);
    
  }
  

}
