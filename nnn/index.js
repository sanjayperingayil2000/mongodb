const express = require("express");
const studentRouter = require("./routes/student");
const bodyParser = require("body-parser");


const app=express();
app.use(bodyParser.json());
app.use(studentRouter);

app.listen(7000, ()=>{
    console.log("app is running in port 7000");
});