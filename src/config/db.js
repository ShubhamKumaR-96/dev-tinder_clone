import mongoose from "mongoose"

export const connectDB=async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/data")
    } catch (error) {
        console.log("Error while connection to database")
    }
}