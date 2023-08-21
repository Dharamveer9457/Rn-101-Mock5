const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
    name : {type:String},
    image : {type:String},
    specialization : {type:String, enum: ['Cardiologist', 'Dermatologist', 'Pediatrician', 'Psychiatrist'], default: 'Cardiologist'},
    experience : {type: Number},
    location : {type:String},
    date : {type:Date},
    slots : {type:Number},
    fee : {type:Number}
},{
    versionKey : false
})

const doctorModel = mongoose.model('doctors', doctorSchema)

module.exports = doctorModel