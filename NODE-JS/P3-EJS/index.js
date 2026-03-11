const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, "public")));

// Set up EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.get("/hello",(req,res)=>{
    res.send("Hello");
})

app.get("/rolldice",(req,res)=>{
    let diceVal = randNum = Math.floor(Math.random()*6) + 1 //assume the value comes from db
    res.render("rollDice.ejs",{diceVal});
})

//instagram
// app.get("/ig/:username",(req,res)=>{
//     let {username} = req.params;
//     let followers = ["mohammad","arif","ahmad","khan","ali"];
//     res.render("instagram.ejs",{username,followers})
// })

//insta-page 
// Route handler
app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    console.log(`Requested username: ${username}`); // Debug log
    
    const instaData = require("./data.json");
    
    if (!instaData[username]) {
        return res.status(404).send("User not found");
    }
    
    res.render("instagram.ejs", { data: instaData[username] });
});
app.listen(port,()=>{
    console.log(`Hey , i am listinig on ${port}`)
})