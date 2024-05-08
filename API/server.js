import express from 'express'
import mongoose from "mongoose";
const app = express();

mongoose.connect("mongodb+srv://sharmajr:NarrxaNLAZdJ2hBM@cluster0.m45tsha.mongodb.net/",{
    dbName:"MERN_Recipe_website"
}
).then(()=>console.log("MongoDB is connected..!"));

const port = 3000;
app.listen(port,()=>console.log(`server is running on port ${port}`))

//username: sharmajr
//pwd: NarrxaNLAZdJ2hBM
//mongodb+srv://sharmajr:<password>@cluster0.m45tsha.mongodb.net/