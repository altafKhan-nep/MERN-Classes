const { faker } = require('@faker-js/faker');

let mysql = require('mysql2');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Altaf@2024',  // <- Make sure this is correct!
    database: 'delta_app'

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


  let q = "INSERT INTO user(id, username, email, password) VALUES ?";
  let user = [];
  
//inserted 100s of user
for(let i=0;i<100;i++){
    user.push(getRandomUser());
}

// SQL query for bulk insert
connection.query(q,[user],(err,result)=>{
    if(err) throw err;

    console.log("✅ 100 users inserted successfully!");
    console.log(result);
    connection.end(); // close DB connection after query
  });
