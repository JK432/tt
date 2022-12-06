const express = require("express");
const app = new express();
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('index',{title:"HOME",desc:"You are at Home page"});
});
app.get('/auther',(req,res)=>{
    res.render('auther',{title:"AUTHER",desc:"You are at Auther page"});
});
app.get('/books',(req,res)=>{
    res.render('books',{title:"BOOKS",desc:"You are at Books page"});
});
app.get('/about',(req,res)=>{
    res.render('about',{title:"ABOUT",desc:"You are at About page"});
});

app.use((req,res)=>{
    res.send("404! file not found")
})


app.listen(3001,()=>{

    console.log("Running");

})