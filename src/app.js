import express from 'express'
import { userAuth } from './middleware/auth.js'

const app=express()

app.use('/user',userAuth,(req,res)=>{
    res.json("Testing for request handlers")
})

app.get('/hello',(req,res)=>{
    res.send({msg:"Say to hello from user account"})
})

app.listen(3001,()=>{
    console.log(`server is running at http://localhost:3001`)
})