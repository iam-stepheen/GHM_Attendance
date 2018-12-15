import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstname:String
  secondname:String
  unit:String
  email:string
  regno:Number
  level:Number
  //"attendance":[],
  password:String
  status:Number
  constructor(private Auth:AuthService,private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }
  register(){
    const details = ({
      firstname:this.firstname,
      secondname:this.secondname,
      unit:this.unit,
      level:this.level,
      email:this.email,
      regno:this.regno,
      password:"password",
      status:this.status,
      attendance:[]
    })
    if(!this.Auth.validateregister(details)){
      this.flashMessagesService.show('All fields are required ', {
        classes: ['alert', 'alert-danger'], // You can pass as many classes as you need
        timeout: 1000, // Default is 3000
      });
    }
    else{
      this.Auth.register(details).subscribe(data=>{
        if(data.success == 'true'){
          this.flashMessagesService.show(data.msg, {
            classes: ['alert', 'alert-warning'], // You can pass as many classes as you need
            timeout: 1000, // Default is 3000
          });
          this.firstname = null
          this.secondname= null
          this.unit=null
          this.level=null
          this.email=null
          this.regno=null
          this.password=null,
          this.status=null
        }
        else{
          this.flashMessagesService.show(data.msg, {
            classes: ['alert', 'alert-warning'], // You can pass as many classes as you need
            timeout: 1000, // Default is 3000
          });
        }
      })
    }
    }
}
