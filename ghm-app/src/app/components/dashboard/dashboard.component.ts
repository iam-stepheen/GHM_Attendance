import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'ngx-flash-messages';
import {Attendance} from "./attendance"
import { tokenNotExpired } from 'angular2-jwt';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  firstname:String
  secondname:String
  unit:String
  email:string
  regno:Number
  level:Number
  //"attendance":[],
  password:String
  status:Number
  user:any
  absent:any
  Present:any
  Total:any
  attendance3:Attendance
  stephen:any
  statuss:Number
  absentee:Number
  presentee:Number
 
  

  constructor(private auth:AuthService,private flashMessagesService:FlashMessagesService,private router:Router) { }

  ngOnInit() {
    this.gettoken()
   console.log(this.absentee)
    
  }
  
 gettoken(){
   
   
   var k = 0
   var i
   var m = 0 
  const token = localStorage.getItem("token")
  this.auth.submittoken(token).subscribe(data=>{
   // console.log(data.attendance[0].service_date)
    this.user = data
    //console.log(data.status)
   //console.log(this.user.attendance)
   this.statuss = data.status

    this.Total = data.attendance.length
    this.stephen = this.Total-1
    for(i=0;i<=this.stephen; i++){
      
      if(data.attendance[i].service_status=="present"){
        
        ++k
       
        this.Present = k
        this.absentee = k
        this.absent = this.Total - this.Present
       
        
      }
      
      else{
        
      }
     
     
    }
    this.regno = data.regno
    const details = ({
      regno:this.regno
    })
    this.auth.getmemberattendance(details).subscribe(data=>{
      this.attendance3 = data
     // console.log(this.attendance3)
     
})
      
  })
     console.log(this.Present)
 }
 //function to log out user 
 logout(){
   localStorage.removeItem('token')
   this.router.navigate(['/login'])
   return false
 }
}
