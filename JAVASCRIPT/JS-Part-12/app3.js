//random fact Generator
let para1 = document.querySelector("#result1");
let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click",async ()=>{
   let fact =  await getFact();
   para1.innerText = fact;
})
let url = " https://catfact.ninja/fact";
async function getFact(){
    try{
        let res = await axios.get(url);
        return res.data.fact;

    }catch(err){
       return "No fact Found!";
    }
}

//Random dog image generator
let img = document.querySelector("#result2");
let btn2 = document.querySelector("#btn2"); 

btn2.addEventListener("click", async ()=>{
    let randImg = await getImages();
    img.setAttribute("src",randImg);
    console.log(randImg)

})
let url2 = "https://dog.ceo/api/breeds/image/random";
async function getImages(){
try{
    let res = await axios.get(url2);
    return res.data.message;

}catch(err){
    console.log("error is ",err);
    return "image not found!";
}
}

// Sending Headers (axios):

let url3 = "https://icanhazdadjoke.com/";

async function getJoke(){
    try{
        const headers1JSON = {headers:{Accept:"application/json"}}
        let res = await axios.get(url3,headers1JSON);
        console.log(res.data)

    }catch(err){

        console.log("error is ",err)
    }
}