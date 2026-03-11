const form = document.getElementById("registerForm");
const responseBox = document.getElementById("response");

form.addEventListener('submit',async function (e){
    e.preventDefault(); // Stop form from refreshing page

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const userData = {
     name:name,
     email:email
    };
    try{
        const res = await fetch("https://reqres.in/api/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userData)
        });
        const data = await res.json();
        console.log("Server Response ",data);
        responseBox.innerText = `✅ User ${data.name} register with ID ${data.id}`
    }
    catch(err){
        console.log("Error is ",err);
        responseBox.innerText="something went wrong"
    }

});

