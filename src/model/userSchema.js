import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  emailId: { type: String },
  password: { type: String },
  age: { type: Number },
  gender: { type: String }
});

export const userModel=mongoose.model("User",userSchema)