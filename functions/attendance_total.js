const mongoose = require('mongoose')

const atendance_status = mongoose.Schema({
    service_day:{
        type:String,
        required:true
    },
    service_date:{
        type:String,
        required:true
    },
    present_student:{
        type:Array,
        required:true
    },
   
})

const insert = module.exports = mongoose.model('attendance_total',atendance_status)

module.exports.update = function(details,callback){
      details.save(callback)
}

//checking of an attendace exist in the data base 
module.exports.check = function(service_day,service_date,callback){
    //console.log("this is stephen")
insert.findOne({service_day:service_day,service_date:service_date},(err,successfull)=>{
    if(err) throw err
   if(successfull){
     callback(null,successfull)
}
else{
    callback(null)
}
})
}

//add attendance to the array for any present userr

module.exports.upperlevel = function(service_day,service_date,firstname,secondname,regno,callback){
    
    var update = {"firstname":firstname,"secondname":secondname,"regno":regno}
    insert.updateMany({service_date:service_date},
        {$push:{
            present_student:update
        }},(err,succesfull)=>{
            if(err) throw err
            if(succesfull){
                callback(null,succesfull)
            }
        })
}

//functon to get all attendance 
module.exports.getattendance2 = function(callback){
    insert.find(callback)
}

//function to get attendance based on date 
module.exports.getit2 = function(date,callback){
    //console.log(date)
//const query = {service_date:ISODate("2018-09-02T00:00:00.000Z")}
insert.findOne({service_date: (date)},(err,successfull)=>{
    if(err) throw err
    if(successfull){
     
       callback(null,successfull)
    }
})

}
//route to get total attendance that exist in db 
module.exports.gettotal = function(callback){
    insert.find(callback)
}

module.exports.delete = function(id,callback){
insert.findByIdAndRemove(id,(err,successfull)=>{
    if(err) throw err
    if(successfull){
        callback(null,successfull)
    }
})
}
