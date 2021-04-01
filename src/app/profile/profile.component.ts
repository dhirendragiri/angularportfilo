import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  empData=[];
  loginsRef=new FormGroup({
    user:new FormControl(),
    pass:new FormControl()
  });


  constructor() { }

  ngOnInit(): void {
  }
  dispaly(){
    
  }

  save(){
    console.log(this.loginsRef.value); // this is to disply all value , 
    let info={};
    let name = this.loginsRef.get("name")?.value; // this is to get specific  control value.
     let number = this.loginsRef.get("number")?.value;
    
    
    
  }
  
  

}


