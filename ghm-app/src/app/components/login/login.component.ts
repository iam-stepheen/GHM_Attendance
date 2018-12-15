import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesModule, FlashMessagesService } from 'ngx-flash-messages';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  regno:Number
  password:String

  constructor(private auth:AuthService,private flashMessagesService:FlashMessagesService,private router:Router ) { }

  ngOnInit() {
  }
  login(){
      const details = ({
        regno:this.regno,
        password:this.password
      })
     if(! this.auth.validateatelogin(details)){
      this.flashMessagesService.show('All fields are required ', {
        classes: ['alert', 'alert-danger'], // You can pass as many classes as you need
        timeout: 1000, // Default is 3000
      });   
      return false
     }
     else{
        this.auth.login(details).subscribe(data=>{
         if(data.success == true ){
          this.flashMessagesService.show('You Are Now Logged In ', {
            classes: ['alert', 'alert-success'], // You can pass as many classes as you need
            timeout: 1000, // Default is 3000
          }); 
          localStorage.setItem("token",data.token)
          this.router.navigate(['/dashboard'])
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
}
