import express from "express";
// import { userAuth } from './middleware/auth.js'
import { connectDB } from "./config/db.js";
import { userModel } from "./model/userSchema.js";

const app = express();
app.use(express.json());

// signup
app.post("/signup", async (req, res) => {
  const obj = new userModel(req.body);
  try {
    await obj.save(obj);
    res.send("user succefully created");
  } catch (error) {
    console.log("error while creating user signup", error);
  }
});

// find User
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const data = await userModel.findOne({ emailId: userEmail });
    console.log("user data fetch successfully");
    res.json({ userData: data });
  } catch (error) {
    console.log("error while fetching the data", error);
    res.status(500).json({ msg: "user not found" });
  }
});

app.get("/feed", async (req, res) => {
  try {
    const getAllData = await userModel.find({});
    console.log("All data collected");
    res.send(getAllData);
  } catch (error) {
    console.log("error while fetching the data", error);
    res.status(500).json({ msg: "user not found" });
  }
});

app.delete("/deleteUser", async (req, res) => {
  const Userid = req.body._id;
  console.log(Userid);

  try {
    const deleted = await userModel.findByIdAndDelete(Userid);
    if (!deleted) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.json("user deleted successfully", deleted);
  } catch (error) {
    console.log("error while deleting  the data", error);
    res.status(500).json({ msg: "user not found" });
  }
});

app.patch("/updateUser", async (req, res) => {
  const userId = req.body._id;
  const data = req.body;

  try {
    const updatedData = await userModel.findByIdAndUpdate(userId, data, {
      new: true,
    });

    res.json({msg:"user data updated succesfully", updatedData});
  } catch (error) {
    console.log("error while deleting  the data", error);
    res.status(500).json({ msg: "user not found" });
  }
});

app.listen(3001, () => {
  connectDB();
  console.log(`server is running at http://localhost:3001`);
});
