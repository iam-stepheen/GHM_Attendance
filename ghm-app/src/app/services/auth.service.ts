import { Injectable } from '@angular/core';
import {Headers,Http} from '@angular/http'
import "rxjs/add/operator/map"
import { httpFactory } from '@angular/http/src/http_module';
import { tokenNotExpired } from 'angular2-jwt';
@Injectable()
export class AuthService {

  constructor(private http:Http) { }
  //validate take attendance 

  //validate get attendance field
  validateattendance(details){
    if(details.regno==null){
      return false
    }
    else{
      return true
    }
  }
  //validate login 
  validateatelogin(details){
    if(details.regno==null||details.password==null){
      return false
    }
    else{
      return true
    }
  }
  //validate register fields 
  validatecreateattendance(details){
    if(details.service_day==null||details.service_date==null||details.service_status==null){
      return false
    }
    else{
      return true
    }
  }
  validateregister(details){
    if(details.firstname==null||details.secondname==null||details.unit==null||details.email==null||details.regno==null||details.level==null||details.password==null||details.status==null){
      return false
    }
    else{
      return true
    }
  }
register(details){
     let headers = new Headers
     headers.append('Content-Type','application/json')
     return this.http.post('api/register',details,{headers})
     .map(res=>res.json())
     
}
createattendance(details){
  let headers = new Headers
  headers.append('Content-Type','application/json')
  return this.http.post('api/startattendance',details,{headers})
  .map(res=>res.json())
  
}
getsession(){
 
  return this.http.get('api/getsession')
  .map(res=>res.json().attendance)
  
}
stop(details){
  let headers = new Headers
  headers.append('Content-Type','application/json')
  return this.http.post('api/stopattendance',details,{headers})
  .map(res=>res.json())
}
gettotalattendance(){
 
  return this.http.get('api/gettotal')
  .map(res=>res.json().attendance)
  
}
startattendance(details){
  let headers = new Headers
  headers.append('Content-Type','application/json')
  return this.http.post('api/continue',details,{headers})
  .map(res=>res.json())
}
getstudents(){
 
  return this.http.get('api/getstudents')
  .map(res=>res.json().student)
  
}
//get student attendance by supplying the registration nuber 
getmemberattendance(details){
  let headers = new Headers
  headers.append('Content-Type','application/json')
  return this.http.post('api/getstudentattendance',details,{headers})
  .map(res=>res.json().student)
}
//function to get total attendance in database 
getattendance2(){
 
  return this.http.get('api/getattendance2')
  .map(res=>res.json().student)
  
}
getattendance3(details){
  let headers = new Headers
  headers.append('Content-Type','application/json')
  return this.http.post('api/getitfromtotal',details,{headers})
  .map(res=>res.json().student)
}
login(details){
  let headers = new Headers
  headers.append('Content-Type','application/json')
  return this.http.post('api/login',details,{headers})
  .map(res=>res.json())
}
submittoken(details){
  console.log(details)
  let headers = new Headers()
  headers.append('Authorization',details)
 return this.http.get('api/profile',{headers:headers})
  .map(res=>res.json().user)
}
//route to tak eattendance by inputing the reg no
takeattendance(details){
  let headers = new Headers()
  headers.append('Content-Type','application/json')
  return this.http.post('api/takeattendance',details,{headers:headers})
  .map(res=>res.json())
}
//route to get active attendance
getattendancesession(){
  
  let headers = new Headers()
  
 return this.http.get('api/getactiveattendance',{headers:headers})
  .map(res=>res.json())
}
loggedIn() {
  return tokenNotExpired('token');
}
}


