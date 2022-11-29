import express from "express";
import connectDB from "./db/connectdb.js";
import {join} from 'path';
import web from "./routes/web.js";
const app = express();
const port = process.env.PORT || "3000";
import mongoose, { connect } from "mongoose";

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";
//database connection
connectDB(DATABASE_URL);

//modern alternative of body-parser middleware
app.use(express.urlencoded({extended:false}))

//static files
app.use('/student',express.static(join(process.cwd(),"public")))
app.use("/student/edit", express.static(join(process.cwd(), "public")));


//set template engine
app.set("view engine","ejs");

//load routes
app.use("/student",web)


app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
