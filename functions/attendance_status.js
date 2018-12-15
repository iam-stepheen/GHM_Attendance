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
    service_status:{
        type:Number,
        required:true
    }
})

const insert = module.exports = mongoose.model('attendance_status',atendance_status)

//checking if there is an active attendance session
module.exports.check = function(callback){
    
    insert.findOne({service_status:1},(err,successfull)=>{
        if(err) throw err
        else{
           callback(null,successfull)
          
        }
       
    })
    }

//function to insert a new attendance 
module.exports.insert = function(details,callback){
    //console.log(details)
details.save(callback)
}

//function to stop any actice attendance in db
module.exports.delete = function(id,callback){
insert.findByIdAndRemove(id,(err,successfull)=>{
    if(err) throw err
    if(successfull){
        callback(null,successfull)
    }
})
}
module.exports.check2 = function(callback){
    const query = { service_status:1}
    insert.findOne(query,callback)
}

module.exports.getsession = function(callback){
	const query = {service_status:1}
	insert.find(query,callback)
}
