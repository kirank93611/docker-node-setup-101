const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("<h2>Hi y There</h2>");
});

const port = process.env.PORT || 3000;



app.listen((req,res)=>{
    console.log(`listening on port:${port}`)
});