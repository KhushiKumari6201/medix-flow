import express from "express";
import cors from "cors";
import "dotenv/config";
import adminRouter from "./routes/adminRoute.js";
import userRouter from "./routes/userRoute.js";
import { connectDb } from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

// app config
const app = express();
const port = process.env.PORT || 4000;

connectCloudinary();

// middleware
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/admin", adminRouter);
// app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);
// localhost:4000/api/admin

app.get("/", (req, res) => {
   res.send("API WORKING ");
});

connectDb()
   .then(() => {
      app.listen(port, () => console.log("Server Started", port));
   })
   .catch((err) => {
      console.log("Something went wrong");
   });
