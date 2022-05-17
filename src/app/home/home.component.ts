import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalconstantsService } from '../globalconstants.service';
import { ApiServiceeService } from '../api-servicee.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
text:any;
message1:any;

flag=false;
email={
'user_email':"",
'pass':"",
'recipient_email':"",
'subject':"",
'message':""
  
  }
  constructor(private router:Router,private service:GlobalconstantsService,private service1:ApiServiceeService) {


   

   }

  ngOnInit(): void {

    this.text=this.service.message;

    this.service.email=this.text;

  }
 public sendEmail(){

  let resp=this.service1.sendMail(this.email);

      resp.subscribe((data)=>this.message1=data);

      if(this.message1==="Email is sent successfully"){

        this.flag=true;

      }

     console.log(this.message1);
 }

}
