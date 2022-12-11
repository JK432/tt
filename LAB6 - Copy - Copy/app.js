const express = require("express");
//const bodyParser = require('body-parser');
const ejs = require("ejs")
const app = new express();
const  udetails=[];
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded());




app.post('/search', (req, res) => {
    
    console.log(req.body);
    if (req.body.issearch != "true") { udetails.push(req.body); res.render("search", { result: '' ,name:"",package:""}); } else { 
        udetails.forEach(e => {
            if(e.name == req.body.name && e.pass == req.body.password){
                res.render("search", { result: 'true', name:e.name, package: e.package});  
            }else{
                res.render("search", { result: "Not Found", name:"", package: "" });
            }
        });
        }
});

app.get("/search",(req,res)=>{
    res.render("search");
});

app.get("/", (req, res) => {
    res.render("form");
});

app.post("/",(req,res)=>{
    console.log(" hai");
})
app.use((req,res)=>{
    res.render("404");
});
app.listen(30,()=>{
    console.log("Server started");
});