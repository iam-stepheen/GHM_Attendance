import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'ngx-flash-messages';
import { mobiscroll } from '@mobiscroll/angular-lite';
import "rxjs/add/observable/interval"
import { Observable } from 'rxjs/Observable';


mobiscroll.settings = {
  theme: 'ios',
  lang: 'fr',
};

@Component({
  selector: 'app-takeattendance',
  templateUrl: './takeattendance.component.html',
  styleUrls: ['./takeattendance.component.css']
})
export class TakeattendanceComponent implements OnInit {
  
  regno:Number
  status:any
  id:any
  constructor(private auth:AuthService,private flashMessagesService:FlashMessagesService) { }

  ngOnInit() {
    this.getactiveseeion()
    this.calling()
  }
takeattendance(){
const details = ({
  regno:this.regno
})
if(!this.auth.validateattendance(details)){
  this.flashMessagesService.show('All fields are required ', {
    classes: ['alert', 'alert-danger'], // You can pass as many classes as you need
    timeout: 1000, // Default is 3000
  });
}
else{
  this.auth.takeattendance(details).subscribe(data=>{
    if(data.success == true){
      this.flashMessagesService.show(data.msg, {
        classes: ['alert', 'alert-success'], // You can pass as many classes as you need
        timeout: 1000, // Default is 3000
      });
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
//get if there is an active attendance in database
getactiveseeion(){
  this.auth.getattendancesession().subscribe(data=>{
    if(data.success == true){
     this.status = 1
     this.id = data.msg._id
    }
    if(data.success == false){
     this.status = 0
    }
    
  })
}

calling(){
  
  Observable.interval(1000)
  .subscribe((val) => { 
    this.getactiveseeion()
    
})
}
stop(){
  const details = ({
    id:this.id
  })
  this.auth.stop(details).subscribe(data=>{
   if(data.success == true){
    
     
    }
  })
 }
}
