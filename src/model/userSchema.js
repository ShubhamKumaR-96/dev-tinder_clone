import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstname: { type: String, required: true, minLength: 4, maxLength: 40 },
  lastname: { type: String },
  emailId: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: { type: String, required: true },
  age: { type: Number, min: 18 },
  gender: {
    type: String,
    validate(value) {
      if (!["male", "female", "others"].includes(value)) {
        throw new Error("Gender data is not valid");
      }
    },
  },
  photoUrl: {
    type: String,
    default:
      "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
  },
  about: {
    type: String,
    default: "This is a default about of the user!",
  },
  skills: {
    type: String,
  },
},{timestamps:true});

export const userModel = mongoose.model("User", userSchema);
