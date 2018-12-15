const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const members = require('../functions/members')
const attendance_status = require("../functions/attendance_status")
const attendace_total = require("../functions/attendance_total")
const config = require('../config/database')
const upload  = require('../functions/upload')
const passport = require('passport')
router.post('/register',(req,res)=>{
    let details = new members({
        firstname : req.body.firstname,
        secondname : req.body.secondname,
        unit : req.body.unit,
        email:req.body.email,
        regno:req.body.regno,
        level:req.body.level,
        attendance:req.body.attendance,
        password:req.body.password,
        status:req.body.status
    })
  //first lets check if reg no exist
  members.checkregno(details.regno,(err,user)=>{
      if(err) throw err
      if(user){
          res.json({
              success:false,
              msg:"Registration Number Exist in Database"
          })
      }
      else{
        members.addmember(details,(err)=>{
            if(err) throw err
            else{
                res.json({
                    success:true,
                    msg:"You havebeen succesfully regisered"
                })
            }
        })
      }
  })
})

//route to login user into database 
router.post('/login',(req,res)=>{
    const regno  = req.body.regno
    const password = req.body.password
    //check if the reg no exit
    members.checkregno(regno,(err,successfull)=>{
        if(err) throw err
        if(successfull){
         //if it exist we compare passwords 
            if(successfull.password==password){
                const token = jwt.sign(successfull.toJSON(),config.secret)
                res.json({
                    success:true,
                    
                    token:"jwt "+token
                })
            }
            else{
                res.json({
                    success:false,
                    msg:"Password Is Incorrect"
                })
            }
        }
        else{
            res.json({
                success:false,
                msg:"Hey You!..Youre Not A GHM Member"
            })
        }
    })
})

//creating rofile route 
router.get('/profile',passport.authenticate('jwt', { session: false }),(req,res)=>{
    res.json({
         user:req.user
    })
})

//route to create attendance for a particular service

router.post('/startattendance',(req,res)=>{
   
    const service_day = req.body.service_day
    const service_date =  req.body.service_date
    const service_status = req.body.service_status
   // //console.log(service_day,service_date)
     //first we check if such attendance is present in the database
     
     attendace_total.check(service_day,service_date,(err,successfull)=>{
       
         if(err) throw err
         if(successfull){
             res.json({
                 success:false,
                 msg:"Attendance for "+service_day+" "+ service_date+ " Exist"
             })
         }

         else{
          
            attendance_status.check((err,successfull)=>{
               
                if (err) throw err
                if (successfull){
                    res.json({
                        success:false,
                        msg:"Error:There is an active attendance session for"+successfull.service_day+" "+successfull.service_date
                    })
                }
                //if no active attendace session we create an attendance session 
                else{
                    let details =  new attendance_status({
                        service_day:service_day,
                        service_date:service_date,
                        service_status:1
                    })
                    let details2 = new attendace_total({
                        service_day:service_day,
                        service_date:service_date,
                        present_student:[]
                    })
                   
                    //calling the function to create a new attendance seeion 
                    attendance_status.insert(details,(err,succssfull)=>{
                        if(err) throw err
                        if(succssfull){
                            //this section insert a default attendace of absent for all users by cheking the attendance day 
                              if(succssfull.service_day == 'sunday'){
                                  //this will insert the attendance into the total attendance table in database
                                 attendace_total.update(details2,(err)=>{
                                     if(err) throw err
                                 })
                                 //this will insert default attendance for all users 
                                    members.attendance(service_day,service_date,(err,successfull)=>{
                                        if(err) throw err
                                        if(successfull){
                                            res.json({
                                                success:true,
                                                msg:"Attendance has been created for "+service_day+service_date
                                            })
                                        }
                                    })
                              }
                              //route to create attendance for other days of the week 
                              if(succssfull.service_day == 'monday'){
                                //this will insert the attendance into the total attendance table in database
                               attendace_total.update(details2,(err)=>{
                                   if(err) throw err
                               })
                               //this will insert default attendance for all users 
                                  members.attendance(service_day,service_date,(err,successfull)=>{
                                      if(err) throw err
                                      if(successfull){
                                          res.json({
                                              success:true,
                                              msg:"Attendance has been created for "+service_day+service_date
                                          })
                                      }
                                  })
                            }
                            if(succssfull.service_day == 'wednesday'){
                                //this will insert the attendance into the total attendance table in database
                               attendace_total.update(details2,(err)=>{
                                   if(err) throw err
                               })
                               //this will insert default attendance for all users 
                                  members.attendance(service_day,service_date,(err,successfull)=>{
                                      if(err) throw err
                                      if(successfull){
                                          res.json({
                                              success:true,
                                              msg:"Attendance has been created for "+service_day+service_date
                                          })
                                      }
                                  })
                            }
                            if(succssfull.service_day == 'friday'){
                                //this will insert the attendance into the total attendance table in database
                               attendace_total.update(details2,(err)=>{
                                   if(err) throw err
                               })
                               //this will insert default attendance for all users 
                                  members.attendance(service_day,service_date,(err,successfull)=>{
                                      if(err) throw err
                                      if(successfull){
                                          res.json({
                                              success:true,
                                              msg:"Attendance has been created for "+service_day+service_date
                                          })
                                      }
                                  })
                            }
                            if(succssfull.service_day == 'saturday'){
                                //this will insert the attendance into the total attendance table in database
                               attendace_total.update(details2,(err)=>{
                                   if(err) throw err
                               })
                               //this will insert default attendance for all users 
                                  members.attendance(service_day,service_date,(err,successfull)=>{
                                      if(err) throw err
                                      if(successfull){
                                          res.json({
                                              success:true,
                                              msg:"Attendance has been created for "+service_day+service_date
                                          })
                                      }
                                  })
                            }
            //     this is fr the attendance for a tuesday service
                              if(succssfull.service_day == 'tuesday'){
                                 //this will insert the attendance into the total attendance table in database
                                 attendace_total.update(details2,(err)=>{
                                    if(err) throw err
                                })
                                //this will insert the attendance for users that are in levels less that 300Level
                                members.lowerlevel(service_day,service_date,(err,successfull)=>{
                                    if(err) throw err
                                    if(successfull){
                                        res.json({
                                            success:true,
                                            msg:"Attendance has been created for "+service_day+service_date
                                        })
                                    }
                                })
                              }
                              if(succssfull.service_day == 'thursday'){
                                //this will insert the attendance into the total attendance table in database
                                attendace_total.update(details2,(err)=>{
                                   if(err) throw err
                               })
                               //this will insert the attendance for users that are in levels less that 300Level
                               members.upperlevel(service_day,service_date,(err,successfull)=>{
                                   if(err) throw err
                                   if(successfull){
                                       res.json({
                                           success:true,
                                           msg:"Attendance has been created for "+service_day+service_date
                                       })
                                   }
                               })
                             }
                        }
                    })
                }
            })
         }
         
     })
//checking if there is an active attendance session in place 

})
//creating a route to stop an attendace
router.post("/stopattendance",(req,res)=>{
    const id = req.body.id
    attendance_status.delete(id,(err,successfull)=>{
        if(err) throw err
        if(successfull){
            res.json({
                success:true,
                msg:"Atendance for "+successfull.service_day+successfull.service_date+" stopped"
            })
        }
    })
})
//creating route to take attendance for each service
router.post('/takeattendance',(req,res)=>{
    const regno = req.body.regno
 members.checkregno(regno,(err,user)=>{
     if(err) throw err
     if(user){
        
           attendance_status.check2((err,successfull)=>{
               //console.log("mm"+successfull.service_date)
               if(err) throw err
               if(successfull){
                   if(successfull.service_day == 'sunday'){
                       //we want to upadate the attendace status for the user 
                         members.update_attendance(successfull.service_day,successfull.service_date,regno,(err,successfull)=>{
                             if(err) throw err
                            else{
            
                               attendance_status.check((err,successfull)=>{
                                   if(err) throw err
                                   if(successfull){
                                      attendace_total.upperlevel(successfull.service_day,successfull.service_date,user.firstname,user.secondname,user.regno,(err,successfull)=>{
                                          if(err) throw err

                                      })
                                   }
                               })

                                res.json({
                                    success:true,
                                    msg:"Welcome " + user.firstname+" "+ user.secondname
                                })

                                
                            }
                         })
                   }
                   if(successfull.service_day == 'monday'){
                    //we want to upadate the attendace status for the user 
                      members.update_attendance(successfull.service_day,successfull.service_date,regno,(err,successfull)=>{
                          if(err) throw err
                         else{
         
                            attendance_status.check((err,successfull)=>{
                                if(err) throw err
                                if(successfull){
                                   attendace_total.upperlevel(successfull.service_day,successfull.service_date,user.firstname,user.secondname,(err,successfull)=>{
                                       if(err) throw err

                                   })
                                }
                            })

                             res.json({
                                 success:true,
                                 msg:"Welcome " + user.firstname+" "+ user.secondname
                             })

                             
                         }
                      })
                }
                if(successfull.service_day == 'wednesday'){
                    //we want to upadate the attendace status for the user 
                      members.update_attendance(successfull.service_day,successfull.service_date,regno,(err,successfull)=>{
                          if(err) throw err
                         else{
         
                            attendance_status.check((err,successfull)=>{
                                if(err) throw err
                                if(successfull){
                                   attendace_total.upperlevel(successfull.service_day,successfull.service_date,user.firstname,user.secondname,(err,successfull)=>{
                                       if(err) throw err

                                   })
                                }
                            })

                             res.json({
                                 success:true,
                                 msg:"Welcome " + user.firstname+" "+ user.secondname
                             })

                             
                         }
                      })
                }
                if(successfull.service_day == 'friday'){
                    //we want to upadate the attendace status for the user 
                      members.update_attendance(successfull.service_day,successfull.service_date,regno,(err,successfull)=>{
                          if(err) throw err
                         else{
         
                            attendance_status.check((err,successfull)=>{
                                if(err) throw err
                                if(successfull){
                                   attendace_total.upperlevel(successfull.service_day,successfull.service_date,user.firstname,user.secondname,(err,successfull)=>{
                                       if(err) throw err

                                   })
                                }
                            })

                             res.json({
                                 success:true,
                                 msg:"Welcome " + user.firstname+" "+ user.secondname
                             })

                             
                         }
                      })
                }
                if(successfull.service_day == 'saturday'){
                    //we want to upadate the attendace status for the user 
                      members.update_attendance(successfull.service_day,successfull.service_date,regno,(err,successfull)=>{
                          if(err) throw err
                         else{
         
                            attendance_status.check((err,successfull)=>{
                                if(err) throw err
                                if(successfull){
                                   attendace_total.upperlevel(successfull.service_day,successfull.service_date,user.firstname,user.secondname,(err,successfull)=>{
                                       if(err) throw err

                                   })
                                }
                            })

                             res.json({
                                 success:true,
                                 msg:"Welcome " + user.firstname+" "+ user.secondname
                             })

                             
                         }
                      })
                }
                   if(successfull.service_day == 'tuesday'){
                     if(user.level == 1){
                        
                        members.update_attendance(successfull.service_day,successfull.service_date,regno,(err,successfull)=>{
                            //console.log("yy"+successfull.service_date)
                            if(err) throw err
                           else{
                            attendance_status.check((err,successfull)=>{
                                if(err) throw err
                                if(successfull){
                                   attendace_total.upperlevel(successfull.service_day,successfull.service_date,user.firstname,user.secondname,(err,successfull)=>{
                                       if(err) throw err

                                   })
                                }
                            })
                               res.json({
                                   success:true,
                                   msg:"Welcome " + user.firstname+" "+ user.secondname
                               })
                           }
                        })
                     }
                     else{
                         res.json({
                             success:false,
                             msg:"You are not permitted to take attendance for this service"
                         })
                     }
                   }
                   if(successfull.service_day == 'thursday'){
                    if(user.level == 2){
                       
                       members.update_attendance(successfull.service_day,successfull.service_date,regno,(err,successfull)=>{
                           //console.log("yy"+successfull.service_date)
                           if(err) throw err
                          else{
                            attendance_status.check((err,successfull)=>{
                                if(err) throw err
                                if(successfull){
                                   attendace_total.upperlevel(successfull.service_day,successfull.service_date,user.firstname,user.secondname,(err,successfull)=>{
                                       if(err) throw err

                                   })
                                }
                            })
                              res.json({
                                  success:true,
                                  msg:"Welcome " + user.firstname+" "+ user.secondname
                              })
                          }
                       })
                    }
                    else{
                        res.json({
                            success:false,
                            msg:"You are not permitted to take attendance for this service"
                        })
                    }
                  }
               }
           })
     }
     else{
         res.json({
             success:false,
             msg:"You're not a GHM member,please try again"
         })
     }
 })
})
//route to get active attendance session 
router.get('/getsession',(req,res)=>{
	attendance_status.getsession((err,successfull)=>{
		if(err) throw err
		else{
			res.json({
				success:true,
				attendance:successfull
			})
				
			
		}
	})
})

//route to get total attendance 
router.get('/gettotal',(req,res)=>{
	attendace_total.gettotal((err,successfull)=>{
		if(err) throw err
		if(successfull){
			res.json({
				success:true,
				attendance:successfull
			})
		}
	})
})

//route to ontinue service attendance after it has expired 
router.post('/continue',(req,res)=>{
    const details =  new attendance_status ({
		service_day : req.body.service_day,
		 service_date : req.body.service_date,
		 service_status: req.body.service_status
	})
		
	
	 attendance_status.check((err,successfull)=>{
                //console.log("l")
                if (err) throw err
                if (successfull){
                    res.json({
                        success:false,
                        msg:"Error:There is an active attendance session for"+successfull.service_day+" "+successfull.service_date
                    })
                }
				else{
					attendance_status.insert(details,(err,successfull)=>{
		if(err) throw err 
		if(successfull){
			res.json({
				success:true,
				msg:"Attendance has been created for "+details.service_day+" "+details.service_date
			})
		}
	})
				}
	 })
	
})
//rote to get all studet present in the database 
router.get('/getstudents',(req,res)=>{
    members.getstudents((err,successfull)=>{
        if(err) throw  err
        if(successfull){
            res.json({
				success:true,
				student:successfull
			})
        }
    })
})

//rout to get attendanc e for a particular student 
router.post('/getstudentattendance',(req,res)=>{
    const regno = req.body.regno
    members.getstudentattendance(regno,(err,successfull)=>{
        if(err) throw err 
        if(successfull){
            res.json({
				success:true,
				student:successfull.attendance
			})
        }
    })
})

//route to get all services 
router.get('/getattendance2',(req,res)=>{
    attendace_total.getattendance2((err,successfull)=>{
        if(err) throw err
        if(successfull){
            res.json({
				success:true,
				student:successfull
			}) 
        }
    })
})

//route to get present student based on servic
router.post('/getitfromtotal',(req,res)=>{
    const details = ({
        service_date:req.body.service_date
    })
    attendace_total.getit2(details.service_date,(err,successfull)=>{
        if(err) throw err
        if(successfull){
            res.json({
				success:true,
				student:successfull
			}) 
        }
    })
})
//route to get the nuber of times a user is present
router.post('/gettingit',(req,res)=>{
    const regno=req.body.regno
    members.getingit(regno,(err,successfull)=>{
        if(err) throw err 
        if(successfull){
            res.json({
                user:successfull
            })
        }
    })
})
//route to check if here is an actibe attendacne in database
router.get('/getactiveattendance',(req,res)=>{
    attendance_status.check2((err,successfull)=>{
        if(err) throw err
        if(successfull){
            res.json({
                success:true,
                msg:successfull
            })
        }
        else{
            res.json({
                success:false,
               
            })
        }
    })
})

//route to delete attendance that was mistakenely taken
router.post('/delete',(req,res)=>{
    const service_day  = req.body.service_day
    const service_date = req.body.service_date
    const id = req.body.id
    //we delete from members
    members.delete(service_day,service_date,(err,successfull)=>{
        if(err) throw err
        if(successfull){
            //we delete from total attendance
            attendace_total.delete(id,(err,successfull)=>{
               if(err)throw err
               if(successfull){
                res.json({
                    success:true,
                    msg:"Attendance for "+service_day +" "+service_date +" has been succesfully deleted"
                })
               }
            })
        }
    })
})
//route to get all members of the unt 
router.get("/allmembers",(req,res)=>{
    members.getall((err,successfull)=>{
        if(err) throw err
        if(successfull){
            res.json({
                
                success:true,
               users:successfull
                
            })
        }
    })
})
// creatingroytes to get the attendance based on level 
router.post('/getmemberslevel',(req,res)=>{
    const level = req.body.level
    members.getmemberlevel(level,(err,successfull)=>{
        if(err) throw err
        else{
            res.json({
                users:successfull
            })
        }
    })
})
router.post('/deletemember',(req,res)=>{
    const id = req.body.id
    members.deletemember(id,(err,successfull)=>{
        if(err) throw err
        if (successfull){
            res.json({
                success:true,
                msg:"User Successfuly deleted"
            })
        }
    })
})
//route to change password for any user by suplying the pasword
router.post('/changepassword',(req,res)=>{
    const password = req.body.password
    const npassword = req.body.npassword
    const regno = req.body.regno
    const id = req.body.id

    //first we check the reg no of the user 
    members.checkregno(regno,(err,successfull)=>{
        if(err) throw err
        if (successfull){
            //we check if the password inouted is correct 
            if(password == successfull.password){
                       //if correct we change the password 
                       members.changepassword(id,npassword,(err,succesfull)=>{
                           if(err) throw err 
                           if(succesfull){
                               res.json({
                                   success:true,
                                   msg:"Your password has been succesfully changed "
                               })
                           }
                       })
            }
            else{
                //what happens when the password is no correct 
                res.json({
                    success:false,
                    msg:"The Password inputed is Incorrect "
                })
            }
        }
    })
    
})
   router.post('/upload',(req,res)=>{
   
      
        const new_upload = ({
         service_day : req.body.service_date,
         service_date : req.body.service_day,
        present_students :req.body.present_student
        })

       upload.upload(new_upload,(err,successfull)=>{
           if(err) throw err
           if(successfull){
                    res.json({
                        success:true,
                        msg:"cbhe"
                    })
           }
       })
   
   })
   
module.exports = router