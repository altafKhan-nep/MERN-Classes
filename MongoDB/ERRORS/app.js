const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");


app.get("/",(req,res)=>{
    res.send("you are in root page");
});

app.get("/err",(req,res)=>{
abcd = abcd;
})

const checkToken = (req,res,next)=>{
    let {token} = req.query;

    if(token === "giveaccess"){
        next();
    }
        throw new ExpressError(401,"ACCESS DENIED!");
};

app.get("/api",checkToken,(req,res)=>{
    res.send("data");
})
// activity 

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"You are not access to admin page!")
})


//error handler 
app.use((err,req,res,next)=>{
   let {status =500,message="ERORR FOUND"} = err;
   res.status(status).send(message);
});



// app.use((err,req,res,next)=>{
//     console.log("-------Error 2 middle-ware---------");  
//     next(err);
// });

// app.use((req,res)=>{
//     res.status(404).send("Page Not Found");
// });





app.listen("8080",()=>{
    console.log("listing from port no 8080");
})