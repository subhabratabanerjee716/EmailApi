import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceeService } from '../api-servicee.service';
import { GlobalconstantsService } from '../globalconstants.service';

@Component({
  selector: 'app-fetchemail',
  templateUrl: './fetchemail.component.html',
  styleUrls: ['./fetchemail.component.css']
})
export class FetchemailComponent implements OnInit {
 list:any;
 queryemail:any;
 queryemail2:any;
  constructor(private service:ApiServiceeService,private service2:GlobalconstantsService,private activateRoute:ActivatedRoute) {

    this.activateRoute.queryParams.subscribe((data)=>{

      this.queryemail=JSON.stringify(data);
      this.queryemail2=JSON.stringify(data).substring(10,JSON.stringify(data).length-2);
      console.log(this.queryemail2);
    })

   }

  ngOnInit() {

   



  }

  public fetchEmail(){

    let resp=this.service.getEmails(this.queryemail2);

    resp.subscribe((data)=>this.list=data);

  }
  
}
