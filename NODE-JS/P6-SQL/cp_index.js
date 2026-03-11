const { faker } = require('@faker-js/faker');

const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");

//setup ejs 
app.set("view engine", "ejs");
app.set("views2", path.join(__dirname, "/views2"));


let connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"delta_app",
    password:"Altaf@2024"
});

// Function to generate one random user
const getRandomUser = () => {
    return [
      faker.string.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password()
    ];
  };

  //total no of users on our app

  app.get("/",(req,res)=>{
    let q = "SELECT COUNT(*) FROM user";
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;

            let count = result[0]["COUNT(*)"];
            console.log(count);
            res.render("home.ejs",{count});
        });

    }catch(err){
        console.log(err);
        res.send("The error with your DB");
    }
  })

  app.listen("3000",()=>{
    console.log("Listining from port no 3000");
  })