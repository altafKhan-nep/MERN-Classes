async function getJoke(){
    const config ={
        headers:{Accept : "application/json"}
    }
    try{
    let res = await axios.get("https://icanhazdadjoke.com/",config);
    document.getElementById("joke").innerText = res.data.joke;

    }
    catch(error){
        document.getElementById("joke").innerText = "Failed to fetch joke 😢";
    }
}