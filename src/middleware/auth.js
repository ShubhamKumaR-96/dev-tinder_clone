export const auth=(req,res,next)=>{
    const token="xyz"

    const isAutherized=token==="xyz"

    if(!isAutherized){
        res.send("unauthorized account")

    }else{
        next()
    }
}

export const userAuth=(req,res,next)=>{
    console.log("user auth is checking")
    const token="xywz"

    const isAutherized=token==="xyz"

    if(!isAutherized){
        res.status(401).send("unauthorized account")

    }else{
        next()
    }
}