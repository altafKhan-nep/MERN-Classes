//Simple GET Request

// axios.get("https://catfact.ninja/fact")
//   .then(res => {
//     console.log("🐱 Cat Fact:", res.data.fact);
//   })
//   .catch(err => {
//     console.log("Error:", err);
//   });

//Simple POST Request

    // let data = {
    //     name:"Mohammad",
    //     email:"altafkhan.nep@gmail.com",
    //     gpa:3.24,
    //     phone:9822358286
    // };

    // axios.post("https://reqres.in/api/users",data)
    // .then(res=>{
    //     console.log("✅User Created:",res.data);
    // })
    // .catch(err=>{
    //     console.log("❌Error :",err);
    // })

// / Axios with Headers
    // const config = {
    //     headers:{
    //         "Accept":"application/json"
    //     }
    // };
    // axios.get("https://icanhazdadjoke.com/",config)
    // .then(res=>{
    //     console.log("🤣Joke ",res.data.joke);
    // })

// Axios with async/await (cleanest way!)

async function getJoke(){
    try{
        const config = {
            headers:{
                Accept:"application/json"
            }
        };
        const res = await axios.get("https://icanhazdadjoke.com/",config);
        console.log("🤣Joke :",res.data.joke);


    }
    catch(err){
        console.log("Error ",err);
    }
}
getJoke();

// Axios Response Object
axios.get(url).then(res=>{
    console.log("Data:",res.data);
    console.log("Status:",res.status);
    console.log("Headers:",res.headers);
})

/* <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

<form onsubmit="sendData(event)">
  <input type="text" id="name" placeholder="Your name">
  <input type="email" id="email" placeholder="Your email">
  <button>Submit</button>
</form>

<script>
  async function sendData(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    try {
      const res = await axios.post("https://reqres.in/api/users", { name, email });
      console.log("✅ User registered:", res.data);
    } catch (err) {
      console.log("❌ Error:", err);
    }
  }
</script> */
