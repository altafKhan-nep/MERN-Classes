const express = require("express");
const app = express();
const port = 8080;

//listning 
    app.listen(port,()=>{
        console.log(`Listning from port no ${port}`);
    })

//handlig request 
    app.use((req,res)=>{
        // console.log(req);
        console.log("request recived!");
        let code = "<h1>Fruit</h1><ul><li>Apple</li><li>Mango</li></ul>"
        res.send(code)
    })

//Routing 
    app.get("/",(req,res)=>{
        res.send("You Contacted root page!");
    })
    app.get("/home",(req,res)=>{
        res.send("You are in Home page of the web!");
    })

    app.get("/search",(req,res)=>{
        res.send("You are in search page!");
    })

    app.get("/contact",(req,res)=>{
        res.send("You are in contact page!");
    })
    app.get("*",(req,res)=>{
        res.send("page not found!")
    })

//with parameters or params
    app.get("/:username/:id",(req,res)=>{
       let  {username,id} = req.params;
       let htmlStr = `<h1>welcome to the page of @${username} and ${id}</h1> `
        res.send(htmlStr);
    });

//with query  
app.get("/search",(req,res)=>{
    let {q} = req.query;
    if(!q){
        return res.send("Nothing searched")
    }
    res.send(`You are searched for ${q}`);
    console.log( "sucess");

})