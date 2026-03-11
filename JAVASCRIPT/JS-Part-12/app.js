// async function greet(){
//     throw "hello, i am throw";
//     return "Assalmualikum"; //returns a promises
// }

// let hello = async ()=>{} //returns a promises
// greet()
// .then((result)=>{
//     console.log("Promises was resolved");
//     console.log("Result was :",result);
// })
// .catch((error)=>{
//     console.log("Promises was rejected with result :",error)
// })

//use await inside async function:

// function randNum(){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         let num = Math.floor(Math.random()*10) + 1;
//         console.log(num);
//         resolve();
//        },1000);
//     })
// }

// async function getNum(){
//     await randNum();
//     await randNum();
//      randNum();
// }

// let h1 = document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             h1.style.color = color;
//             resolve();
//         },delay)
//     })
// }
// async function getChange(){
//     await changeColor("Red",1000);
//     await changeColor("green",1000);
//     await changeColor("blue",1000);
//     await changeColor("yellow",1000);
    
// }


//Handling Rejections with Await 

// let h1 = document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let randNum = Math.floor(Math.random()*5) + 1;
//             if(randNum > 3){
//                 reject("promise rejection!");
//             }

//             h1.style.color = color;
//             console.log("Color changed to ",color)
//             resolve();
//         },delay)
//     })
// }
// async function getChange(){
//     try{
//         await changeColor("Red",1000);
//         await changeColor("green",1000);
//         await changeColor("blue",1000);
//         await changeColor("yellow",1000);
//     }catch(error){
//         console.log("error found!");
//         console.log("error is ",error)
//     }
   
    
//     let a = 5;
//     console.log(a);
//     console.log("New Numbers ",a);
// }