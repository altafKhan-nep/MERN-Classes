const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
let mysql = require('mysql2');
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require('uuid');


//setup method-override
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));


//setup ejs 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Altaf@2024',
    database: 'delta_app'
})

// Function to generate one random user
const getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password()
    ];
};

// Total no of users on our app
app.get("/", (req, res) => {
    let q = "SELECT COUNT(*) FROM user";
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]['COUNT(*)'];
            res.render("home.ejs", { count });
        });

    } catch (err) {
        console.log(err);
        res.send("Some error in DB");
    }
});

// Fetch & show user table
app.get("/user", (req, res) => {
    let q = 'SELECT * FROM user';
    connection.query(q, (err, result) => {
        try {
            if (err) throw err;
            let users = result;
            res.render("user.ejs", { users });
        } catch (err) {
            console.log(err);
            res.send("Error while fetching users");
        }
    });
});

// Edit Route (corrected)
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("edit.ejs", { user });
        });
    } catch (err) {
        console.log(err);
        res.send("Error in DB");
    }
});
//Update db Route
app.patch("/user/:id",(req,res)=>{
    let {id} = req.params;
    let {password:formPass, username:newUsername} = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;

    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let user = result[0];
            if(formPass != user.password){
                res.send("Try again ,wrong password!");
            }else{
                let q2 = `UPDATE user SET username = '${newUsername}' WHERE id='${id}'`;
                connection.query(q2,(err,result)=>{
                    if(err) throw err;
                    res.redirect("/user");
                });
            }
        });
    }catch(err){
        console.log(err);
        res.send("The error is in DB!");
    }
});

//Adding a new user
app.get("/user/new", (req, res) => {
    res.render("add.ejs");
  });
  
  app.post("/user/new", (req, res) => {
    let { username, email, password } = req.body;
    let id = uuidv4();
    //Query to Insert New User
    let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}','${username}','${email}','${password}') `;
  
    try {
      connection.query(q, (err, result) => {
        if (err) throw err;
        console.log("added new user");
        res.redirect("/user");
      });
    } catch (err) {
      res.send("some error occurred");
    }
  });


  //DELET user 
  app.get("/user/:id/delete", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
  
    try {
      connection.query(q, (err, result) => {
        if (err) throw err;
        let user = result[0];
        res.render("delete.ejs", { user });
      });
    } catch (err) {
      res.send("some error with DB");
    }
  });
  //actual deleting 
  app.delete("/user/:id/", (req, res) => {
    let { id } = req.params;
    let { password } = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;
  
    try {
      connection.query(q, (err, result) => {
        if (err) throw err;
        let user = result[0];
  
        if (user.password != password) {
          res.send("WRONG Password entered!");
        } else {
          let q2 = `DELETE FROM user WHERE id='${id}'`; //Query to Delete
          connection.query(q2, (err, result) => {
            if (err) throw err;
            else {
              console.log(result);
              console.log("deleted!");
              res.redirect("/user");
            }
          });
        }
      });
    } catch (err) {
      res.send("some error with DB");
    }
  });



app.listen("3000", () => {
    console.log("Listening From Port No 3000");
})
