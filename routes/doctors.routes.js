const express = require("express");
const doctorModel = require("../model/doctor.model");
const doctorRouter = express.Router();

require('dotenv').config();

//---------------Appointment Route-------------------
doctorRouter.post("/appointments", async(req,res)=>{
    try {
        const appointmentData = req.body
        const newAppointment = new doctorModel(appointmentData)
        await newAppointment.save()
        res.status(200).json({"msg":"New Appointment created"})
    } catch (error) {
        console.log(error)
        res.status(501).json({"msg":"Error while creating an appointment","error":error})
    }
})

//---------------Appointment Get Route-------------------
doctorRouter.get("/appointments", async(req,res)=>{
    try {
        const appointmentData = await doctorModel.find()
        res.status(200).json({appointmentData})
    } catch (error) {
        console.log(error)
        res.status(501).json({"msg":"Error while getting all appointments","error":error})
    }
})

// -----------Edit and Update Appointment route----------
doctorRouter.patch("/appointment/:id", async(req,res)=>{
    try {
        const appointmentID = req.params.id;
        const updatedAppointment = req.body;
        await doctorModel.findByIdAndUpdate(appointmentID, updatedAppointment)
        res.status(200).json({"msg":"Appointment Updated Successfully"})
    } catch (error) {
        console.log(error)
        res.status(501).json({"msg":"Error while updating appointment","error":error})
    }
})

// -----------Delete Appointment route----------
doctorRouter.delete("/appointment/:id", async(req,res)=>{
    try {
        const appointmentID = req.params.id;
        await doctorModel.findByIdAndDelete(appointmentID)
        res.status(200).json({"msg":"Appointment Deleted Successfully"})
    } catch (error) {
        console.log(error)
        res.status(501).json({"msg":"Error while deleting appointment","error":error})
    }
})

// ----------Filter Appointment Routes-----------------------
doctorRouter.get("/filter/:specialization", async(req,res)=>{
    try {
        const specialization = req.params.specialization;
        if(specialization==="All"){
            const appointmentData = await doctorModel.find()
             res.status(200).json({appointmentData})
        }else{
            const appointment = await doctorModel.find({specialization})
            if(!appointment){
                res.status(200).json({"msg":"No appointment found"})
            }else{
                res.status(200).json({appointment})
            }
        }
    } catch (error) {
        console.log(error)
        res.status(501).json({"msg":"Error while filtering appointment","error":error})
    }
})

// -----------Sort Appointment routes-------------------





//--------------Search Routes-----------------


module.exports = {doctorRouter}