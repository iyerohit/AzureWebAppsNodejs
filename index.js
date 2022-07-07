const express= require('express');
let app = express();


let port = process.env.port | 8001;

app.listen(port);

app.use("/",(req,res,next)=>{

    console.log("itsworking finally");

console.log("MIDDLEWARE hopefully it will all be fine now");
next();
});

app.get("/hello",(req,res)=>{

    res.send("Hello world listening on port "+port);

});

app.get("/",(req,res)=>{

    res.send("express Node Js webapp  listening on port "+port);

});

app.get("/hi",(req,res)=>{

    res.send("hi world listening on port "+port);

});



