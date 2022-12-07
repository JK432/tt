const express = require("express");
const ejs = require("ejs")
const app = new express();

app.set('view engine','ejs');
app.use(express.static('public'));
const desc = "A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.[1] The technical term for this physical arrangement is codex (plural, codices). In the history of hand-held physical supports for extended written compositions or records, the codex replaces its predecessor, the scroll. A single sheet in a codex is a leaf and each side of a leaf is a page.";

app.get('/',(req,res)=>{
res.render("index",{title:"Home",desc:desc});
});

app.get('/auther',(req,res)=>{
    res.render("auther",{title:"Auther",desc:desc});
});

app.get('/books',(req,res)=>{
    res.render("books",{title:"Books",desc:desc});
});

app.get('/about',(req,res)=>{
    res.render("about",{title:"About",desc:desc});
});

app.use((req,res)=>{
    res.render("404",{title:"Error",desc:desc});
})



// app.get('/',(req,res)=>{
// res.send("<h1>Home</h1>");
// });

app.listen(30,()=>{
    console.log("Server started");
})


