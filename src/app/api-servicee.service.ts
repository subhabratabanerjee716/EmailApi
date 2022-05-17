import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceeService {

  constructor(private http:HttpClient) { }

  
  public insertUser(data:any){

     return this.http.post("http://localhost:8080/insertUser",data,{responseType:'text' as 'json'});

  }

  public loginUser(data:any){

    return this.http.post("http://localhost:8080/loginUser",data,{responseType:'text' });

  }

  public sendMail(email:any){


     return this.http.post("http://localhost:8080/sendemail",email,{responseType:'Text' as 'json'});

  }

  public getEmails(email:any){


    return this.http.get("http://localhost:8080/getDetailsByEmail?email="+email);

 }

}
