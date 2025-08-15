import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
 
readonly url="http://localhost:3000/";
  constructor(private http:HttpClient) {  }

  AddUpdateUser(data:any,type:any):Observable<any>{
    debugger
    if (type=="Add") 
    return this.http.post(this.url+"Users",data);
   else
    return this.http.put(this.url+"Users/"+data.id,data);
    
  }

  GetAllUsers():Observable<any> {
    return this.http.get(this.url+"Users");
  }

  DeleteUserById(Id: any):Observable<any> {
    return this.http.delete(this.url+"Users/"+Id);
  }

  GetUserById(Id: any):Observable<any> {
    return this.http.get(this.url+"Users/"+Id);
  }
  
}

