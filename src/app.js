import express from 'express'

const app=express()

app.get('/test',(req,res)=>{
    res.json("Testing for request handlers")
})

app.use('/hello',(req,res)=>{
    res.send({msg:"Say to hello from request"})
})

app.listen(3001,()=>{
    console.log(`server is running at http://localhost:3001`)
})