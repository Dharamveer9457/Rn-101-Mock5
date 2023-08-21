const express = require("express");
const app = express();
const {connection} = require("./config/connection");
require('dotenv').config()
const cors = require("cors")
const {userRouter} = require("./routes/users.routes");
const {doctorRouter} = require("./routes/doctors.routes");

app.use(cors())
app.use(express.json())
app.use("/users", userRouter)
app.use("/doctors",doctorRouter)

app.listen(process.env.PORT, async()=>{
    await connection
    .then(()=>console.log(`Server is running at ${process.env.PORT}`))
    .catch((err)=>console.log("Error in running the server"))
})

