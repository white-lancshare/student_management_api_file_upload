const express= require('express')
const app=express()
require('dotenv').config()
const port= process.env.PORT
const sequelize=require('./database/database')
const studentRoutes=require('./routes/studentRoutes')


app.use(express.json())
app.use(studentRoutes)



sequelize.authenticate().then(()=>{
    console.log("connected sucessfully")
}).catch((e)=>{
    console.log("error in connection",e.message)
})

app.listen(port,()=>{
    console.log(`server is listening to port ${port}`)
})