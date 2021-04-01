import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";



@Injectable()
export class MyAuthGaurd implements CanActivate{   // this is interface 
    constructor(public router:Router) { }
    canActivate(){ /// this is method of that interface
        let obj = sessionStorage.getItem("token");
        if(obj!=null){
            return true;
        }else{
            this.router.navigate(["login"]);
            return false;
        }

        }
        
    }
