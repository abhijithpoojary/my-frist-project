const express=require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app=express();

app.use(express.static("public"));

app.get("/",function(req, res){
  res.sendFile(__dirname +"/home.html");
});

app.listen(process.env.PORT, function (){
  console.log("server on 3000 port");
});
