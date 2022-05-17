import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalconstantsService {
  message:any;
  email:any;
  constructor(private http:HttpClient) { }

  // public loginUser(data:any){

  //   this.message=this.http.post("http://localhost:8080/loginUser",data,{responseType:'text' });
    
  //   return this.message;
    
  // }
}
