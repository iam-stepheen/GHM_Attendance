import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service"
import { FlashMessagesService } from 'ngx-flash-messages';
import {Attendance} from './attendance'
import {Students} from './students'
import {present} from './item'
import { Router } from '@angular/router';
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  attendance:Attendance
  attendance2:Attendance
  student:Students
  studentregno:Number
  attendance3:Attendance
  attendance4:Attendance
  attendance5:Attendance
  serviceatt:String
  status :Number
  
  
  ngOnInit() {
    this.getsession()
    this.gettotalattendance()
    this.getstudents()
    this.getattendance2()
    this.gettoken()
  }
    serviceday:String
    servicedate:String
  constructor(private auth:AuthService, private flashMessagesService: FlashMessagesService,private router:Router) { }
 //function to create attendance 
 createattendance(){
  const details = ({
    service_day:this.serviceday,
    service_date:this.servicedate,
    service_status:1
  })
  //we validate all fields to see if theyve been filled
    if(!this.auth.validatecreateattendance(details)){
      this.flashMessagesService.show('All fields are required ', {
        classes: ['alert', 'alert-danger'], // You can pass as many classes as you need
        timeout: 1000, // Default is 3000
      });
    }
    else{
     this.auth.createattendance(details).subscribe(data=>{
     if(data.success == true){
      this.flashMessagesService.show(data.msg, {
        classes: ['alert', 'alert-success'], // You can pass as many classes as you need
        timeout: 1000, // Default is 3000
       
      });
      this.getsession()
     }
    if(data.success == false){
      this.flashMessagesService.show(data.msg, {
        classes: ['alert', 'alert-danger'], // You can pass as many classes as you need
        timeout: 1000, // Default is 3000
      });
     }
     })
    }
    
 }
  
//function to get all active session of attendance 
getsession(){
  this.auth.getsession().subscribe(data=>{
   this.attendance = data
  
  })
}
stop(id){
 const details = ({
   id:id
 })
 this.auth.stop(details).subscribe(data=>{
  if(data.success == true){
    this.flashMessagesService.show(data.msg, {
      classes: ['alert', 'alert-success'], // You can pass as many classes as you need
      timeout: 1000, // Default is 3000
    });
    this.getsession()
   }
 })
}
gettotalattendance(){
  this.auth.gettotalattendance().subscribe(data=>{
   this.attendance2 = data
   
  })
}
start(day,date){
const details = ({
  service_day:day,
  service_date:date,
  service_status:1
})
this.auth.startattendance(details).subscribe(data=>{
  if(data.success==true){
    this.flashMessagesService.show(data.msg, {
      classes: ['alert', 'alert-success'], // You can pass as many classes as you need
      timeout: 1000, // Default is 3000
    });
    this.getsession()
  }
  else{
    this.flashMessagesService.show(data.msg, {
      classes: ['alert', 'alert-danger'], // You can pass as many classes as you need
      timeout: 1000, // Default is 3000
    });
  }
})
}
//function to get all members on datanase 
getstudents(){
  this.auth.getstudents().subscribe(data=>{
   this.student = data
  })
}
//fuction to get attendance ater supplying the regno of the student 
getmemberattendance(){
  const details = ({
    regno:this.studentregno
  })
  if(!this.auth.validateattendance){
    this.flashMessagesService.show('Please Select A Member ', {
      classes: ['alert', 'alert-danger'], // You can pass as many classes as you need
      timeout: 1000, // Default is 3000
    });
    return false 
  }

  else{
    this.auth.getmemberattendance(details).subscribe(data=>{
          this.attendance3 = data
    })
  }
}
getattendance2(){
  this.auth.getattendance2().subscribe(data=>{
    this.attendance4 = data
  })
}
//get atteendance per service 
getattendance3(){
  const details = ({
    service_date:this.serviceatt
  })
  this.auth.getattendance3(details).subscribe(data=>{
  this.attendance5 =  data.present_student
  
  })
}
gettoken(){
  
 const token = localStorage.getItem("token")
 this.auth.submittoken(token).subscribe(data=>{
  // console.log(data.attendance[0].service_date)
   this.status = data.status

  
   
  //console.log(this.user.attendance)
  
   
  
  
   
 })
}
logout(){
  localStorage.removeItem('token')
  this.router.navigate(['/login'])
  return false
}
}
