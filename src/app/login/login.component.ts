import { Component, OnInit } from '@angular/core';
import { ApiServiceeService } from '../api-servicee.service';
import { Router } from '@angular/router';
import { GlobalconstantsService } from '../globalconstants.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  

  user = {
    'username':"",
    'user_email':"",
    'password':""
  }

  message:any;
  flag:boolean=false;

  constructor(private service:ApiServiceeService,private router:Router ,private service1:GlobalconstantsService) { }

  ngOnInit(): void {
  }
  
  public loginUser(){

    let resp= this.service.loginUser(this.user);


    resp.subscribe((data)=>this.message=data);

    //console.log(this.message);

    if(this.message===this.user.user_email){

      this.router.navigate(['home']);
      
      this.flag=true;

    
    }
     this.service1.message=this.message;
     this.service1.email=this.message;
  }

}
