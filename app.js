const express=require("express");
const bodyParser = require("body-parser");
const request = require("request");
const sendMail = require('./mail');
const log = console.log;
const path = require('path');
const router = express.Router();

const app=express();

app.use(express.static("public"));

// Configuring our data parsing
app.use(express.urlencoded({
    extend: false
}));
app.use(express.json());

app.post('/email', (req, res) => {
    //send email here
    const { name, subject, email, message } = req.body;
    console.log('Data: ', req.body);
    sendMail(name, email, subject, message, function(err, data) {
      console.log(data)
         if (err) {
           console.log(err)
             res.status(500).json({ message: 'Internal Error' });
         } else {
             res.status({ message: 'Email sent!!!' });
         }
     });
    // res.json({ message: 'Message received!!!' })
 });

 router.get('/', function(req, res) {
     res.sendFile(path.join(__dirname+'home.html'));
     //__dirname : It will resolve to your project folder.
 });



app.get("/",function(req, res){
  res.sendFile(__dirname +"/home.html");
});

app.post("/comment.html",function(req, res){
  res.sendFile(__dirname +"/comment.html");
});

app.get("/thankyou.html",function(req, res){
  res.sendFile(__dirname +"/thankyou.html");
});


app.listen(process.env.PORT || 3000, function (){
  console.log("server on 3000 port and also online");
});
