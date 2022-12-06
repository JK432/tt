const http = require('http');
const express = require
const server = http.createServer((req,res)=>{
    //console.log(req)
     res.setHeader("Content-type","text/html");
    if(req.url=='/home'){
        res.write("<h1>Home page</h1>")
        res.end();
    }
    if(req.url=='/auther'){
        res.write("<h1>Auther</h1>")
        res.end();
    }
    if(req.url=='/books'){
        res.write("<h1>Books</h1>")
        res.end();
    }
    
    if(req.url=='/about'){
        res.write("<h1>About</h1>")
        res.end();
    }
        
    if(req.url=='/jai'){
        res.write("<h1>jai</h1>")
        res.end();
    }
    if(req.url=='/athu'){
        res.write("<h1>The Kammal vyapaari")
        res.end();
    }
    
}
);


server.listen(3000,()=>{
    console.log("Server listning");
})