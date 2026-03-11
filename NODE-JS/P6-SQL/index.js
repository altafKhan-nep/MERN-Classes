const { faker } = require('@faker-js/faker');

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Altaf@2024',  // <- Make sure this is correct!
  database: 'delta_app'
});
// Insertion Query
// let q = "INSERT INTO user(id, username, email, password) VALUES (?, ?, ?, ?)";
// let user = ["123", "altaf", "altaf@gmail.com", "khan"];

let q = "INSERT INTO user(id, username, email, password) VALUES ?";
let user = [
  ["124", "arif", "arif@gmail.com", "khan1"],
  ["125", "ibrahim", "ibrahim@gmail.com", "kh2an"],
  ["126", "ali", "ali@gmail.com", "khan11"]
];

  connection.query(q,[user],(err,result)=>{
    if(err) throw err;
    console.log(result);
  });

//
connection.end();

let getRandomUser = ()=> {
    return {
      id: faker.string.uuid(),
      username: faker.internet.username(), // before version 9.1.0, use userName()
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
}

// console.log(getRandomUser());