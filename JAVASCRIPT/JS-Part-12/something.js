// let studentData = {
//   name: "Altaf",
//   age: 20,
//   level:"bachelor"
// };

// fetch("https://reqres.in/api/users", {
//   method:"POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(studentData)
// })
// .then(res => res.json())
// .then(result => {
//   console.log("Data saved! ✅", result);
// })
// .catch(err => {
//   console.log("Oops! ❌", err);
// });

// Simple async/await version

async function sendUserData() {
    try{
        let data = {
            name:"arif",
            level:"primary",
            age:14
        }
        let res = await fetch("https://reqres.in/api/users",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            } ,
            body:JSON.stringify(data)
        });

        let result = await res.json();
        console.log("Response:",result);
    }
    catch(err){
        console.log("Oops! ❌", err);
    }
    
}
sendUserData();