import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import userRouter from './routes/user.js';

const app = express();

app.use(bodyParser.json());

app.use('/api', userRouter);
mongoose
  .connect(
    "mongodb+srv://sharmajr:NarrxaNLAZdJ2hBM@cluster0.m45tsha.mongodb.net/",
    {
      dbName: "MERN_Recipe_website",
    }
  )
  .then(() => console.log("MongoDB is connected..!"))
  .catch((err) => console.log(err.message));

const port = 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));
