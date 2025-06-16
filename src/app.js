import express from 'express'
// import { userAuth } from './middleware/auth.js'
import { connectDB } from './config/db.js'
import { userModel } from './model/userSchema.js'


const app=express()
app.use(express.json())

app.post('/signup',async(req,res)=>{
    const obj=new userModel(req.body)
    try {
         await obj.save(obj)
        res.send("user succefully created")
    } catch (error) {
        console.log("error while creating user signup",error)
    }
  
})

app.get('/hello',(req,res)=>{
    res.send({msg:"Say to hello from user account"})
})

app.listen(3001,()=>{
    connectDB();
    console.log(`server is running at http://localhost:3001`)
})