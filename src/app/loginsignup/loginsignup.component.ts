import { Component, OnInit } from '@angular/core';
import { ApiServiceeService } from '../api-servicee.service';


@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.component.html',
  styleUrls: ['./loginsignup.component.css']
})
export class LoginsignupComponent implements OnInit {


  data={'username':"",
        'user_email':"",
        'password':""
  }
  
  message:any;
  flag:boolean=false;
  constructor(private service:ApiServiceeService) { }

  ngOnInit(): void {
  }

  public login(){

      let resp= this.service.insertUser(this.data);


      resp.subscribe((data)=>this.message=data);

      if(resp){

      this.flag=true;

      }

    }

}
