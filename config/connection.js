const mongoose = require("mongoose");
require('dotenv').config()

const connection = mongoose.connect(process.env.mongoUrl)
.then(()=>console.log("Connected to MongoDB"))
.catch((error)=>console.log("Error in connecting to DB"))

module.exports = {connection}