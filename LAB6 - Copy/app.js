const express = require("express");
const bodyParser = require('body-parser');
const ejs = require("ejs")
const app = new express();
const udetails=[];
app.use(bodyParser.urlencoded({ extended: true })); 
app.set('view engine','ejs');
app.use(express.static('public'));
app.get("/",(req,res)=>{
    res.render("form");
});
app.post("/search",(req,res)=>{
    res.render("search");
    console.log(req.body);
    udetails.push({ username, password } = req.body);
    
    console.log(udetails);
});


app.use((req,res)=>{
    res.render("404");
});
app.listen(30,()=>{
    console.log("Server started");
});