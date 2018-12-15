import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Attendance} from '../dashboard/attendance'
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
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
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
    this.gettoken()
  }
  gettoken(){
    var k = 0
    var i
    var m = 0 
   const token = localStorage.getItem("token")
   this.auth.submittoken(token).subscribe(data=>{
    // console.log(data.attendance[0].service_date)
     this.user = data
     console.log(data.status)
    //console.log(this.user.attendance)
    this.statuss = data.status
 
     this.Total = data.attendance.length
     this.stephen = this.Total-1
     for(i=0;i<=this.stephen; i++){
       
       if(data.attendance[i].service_status=="present"){
         ++k
        
         this.Present = k
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
       console.log(this.attendance3)
 })
   })
  }
  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
    return false
  }
}
