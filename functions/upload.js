 const mongoose = require('mongoose')
 const config = require('../config/database')
 const members = require('../functions/members')
 const attendance_status = require("../functions/attendance_status")
const attendace_total = require("../functions/attendance_total")

 const insert = module.exports = mongoose.model('members')

 module.exports.upload = function(newupload,callback){
     
    // we first chage the dataase

mongoose.connect(config.database2)
mongoose.connection.on('connected',()=>{
    console.log("connected to server online")
})
const service_date = newupload.service_date
const service_day = newupload.service_day
attendace_total.check(service_day,service_date,(err,successfull)=>{
if(err) throw err
console.log("xx")
if(successfull){
    console.log("yes")
}
})
 }