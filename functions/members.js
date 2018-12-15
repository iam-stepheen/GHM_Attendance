const mongoose =require('mongoose')

const ghm_members = mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    secondname:{
        type:String,
        required:true
    },
    unit:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    regno:{
        type:String,
        required:true
    },
    level:{
        type:Number,
        required:true
    },
    attendance:{
        type:Array,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    status:{
        type:Number,
        required:true
    }
})

//function to input into database
const insert = module.exports = mongoose.model("members",ghm_members)
//function to rgister new members into the database
module.exports.addmember = function(details,callback){
      details.save(callback)
}
//function to check if registration number exists before adding a new mwmber 
module.exports.checkregno = function(regno,callback){
    const query = {regno:regno}
    insert.findOne(query,callback)
}
//function to update users attendace for each user
module.exports.attendance = function(service_day,service_date,callback){
    var update = {"service_day":service_day,"service_date":service_date,"service_status":"Absent","class":"label label-danger"}
    insert.updateMany({level:1},
        {$push:{
             attendance:update
        }},(err,succesfull)=>{
            if(err) throw err
            if(succesfull){
                insert.updateMany({level:2},
                    {$push:{
                         attendance:update
                    }},(err,succesfull)=>{
                        if(err) throw err
                        if(succesfull){
                            callback(null,succesfull)
                        }
                    })
            }
        })
}
//function to insert service for levels less than 300
module.exports.lowerlevel = function(service_day,service_date,callback){
    var update = {"service_day":service_day,"service_date":service_date,"service_status":"Absent","class":"label label-danger"}
    var update1 = {"service_day":service_day,"service_date":service_date,"service_status":"N/A","class":"label label-success"}
    insert.updateMany({level:1},
        {$push:{
             attendance:update
        }},(err,succesfull)=>{
            if(err) throw err
            if(succesfull){
                //inserting not apllicable for users that are not meant to be at th service 
               insert.updateMany({level:2},
                  {$push:{
                      attendance:update1
                  }},(err,succesfull)=>{
                      if (err) throw err
                      if(succesfull){
                          callback(null,succesfull)
                      }
                  }
                )
            }
        })
}

//function to inser service for levels higer than 300level
module.exports.upperlevel = function(service_day,service_date,callback){
    var update = {"service_day":service_day,"service_date":service_date,"service_status":"Absent","class":"label label-danger"}
    var update1 = {"service_day":service_day,"service_date":service_date,"service_status":"N/A","class":"label label-success"}
    insert.updateMany({level:2},
        {$push:{
             attendance:update
        }},(err,succesfull)=>{
            if(err) throw err
            if(succesfull){
                insert.updateMany({level:1},
                    {$push:{
                        attendance:update1

                    }},(err,succesfull)=>{
                        if(err) throw err
                        if(succesfull){
                            callback(null,succesfull)
                        }
                    })
            }
        })
}
module.exports.update_attendance = function(service_day,service_date,regno,callback){
    //console.log(service_date+" "+service_day)
    insert.updateOne(
   {
     regno:regno,
     attendance: { $elemMatch: { service_day:service_day, service_date:service_date } }
   },
   { $set: { "attendance.$.service_status" : 'present' ,"attendance.$.class":"label label-success"} },(err,succesfull)=>{
       if(err) throw err
       else{
           callback(null,succesfull)
       }
   }
)
}
//function to get al students that exist in database 
module.exports.getstudents = function(callback){
    insert.find(callback)
}

//function to find attendance for a student by inputing the regno

module.exports.getstudentattendance = function(regno,callback){
    const query = {regno:regno}
    insert.findOne(query,callback)
}

module.exports.getingit = function(regno,callback){
   
    insert.find(
   
     {regno:regno},
     {_id:0 ,attendance:{$elemMatch:{service_status:"present"}}}
   ,(err,succesfull)=>{
       if(err) throw err
       else{
           callback(null,succesfull)
       }
   }
)
}
//function to delte attendance mistakenely taken
  module.exports.delete = function(service_day,service_date,callback){
    insert.updateMany(
        { },
        { $pull: { attendance:  { service_day: service_day , service_date: service_date } }  },
        { multi: true },(err,successfull)=>{
            if(err) throw err
            if(successfull){
                //console.log(successfull)
                 callback(null,successfull)
            }
        }
      )
  }
  module.exports.getall = function(callback){
      insert.find(callback)
  }
module.exports.getmemberlevel = function(level,callback){
    const query = {level:level}
    insert.find(query,callback)
}
//route to delete memers from db via id
module.exports.deletemember = function(id,callback){
    insert.findByIdAndRemove(id,callback)
}

//route to change password 
module.exports.changepassword = function(id,npassword,callback){
    
    insert.findByIdAndUpdate(id,{$set:{
        password:npassword
    }},(err,succesfull)=>{
        if(err) throw err 
        if(succesfull){
            callback(null,succesfull)
        }
    })

}
