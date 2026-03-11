const express = require("express");
const app = express();

//first middleware

// app.use(()=>{
//     console.log("Hey i am middelware!");
// });

// app.use((req,res,next)=>{
//     console.log("Hey i am 1st middelware!");
//     next();
// });

// app.use((req,res,next)=>{
//     console.log("Hey i am 2nd  middelware!");
//     next();
// });

//utility middleware 

app.use((req,res,next)=>{
    req.responseTime = new Date(Date.now()).toString();
    console.log(req.method,req.hostname,req.path,req.responseTime)
    next();
});

app.get("/",(req,res)=>{
    res.send("Hey i am root!")
});

app.get("/random",(req,res)=>{
    res.send("This is an random page!");
});

//activity 

// app.use("/api",(req,res,next)=>{
//     let {token} = req.query;

//     if(token === "giveaccess"){
//         next();
//     }
//         res.send("ACCESS DENIED");
// })

// app.get("/api",(req,res)=>{
//     res.send("data");
// });


// passing a multiple middleware

const checkToken = (req,res,next)=>{
    let {token} = req.query;

    if(token === "giveaccess"){
        next();
    }
        res.send("ACCESS DENIED");
};

app.get("/api",checkToken,(req,res)=>{
    res.send("data");
})

//404 

app.use((req,res)=>{
    res.status(404).send("Page Not Found");
});

app.listen("8080",()=>{
    console.log("listing from port no 8080");
})