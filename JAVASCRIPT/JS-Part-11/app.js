//Visualizing the call stack:
// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();

// JS IS SINGLE THREADED:

// synchrous nature
// let a =10;
// console.log(a);
// let b=20;
// console.log(b);
// console.log(a+b);

// // asynchrous nature

// setTimeout(()=>{
//     console.log("It's Me Mohammad Altaf Khan");
// },2000)

// console.log("Hello....");

//calbacks nesting ->callback hell

// let h1 = document.querySelector("h1");

// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange(); //if false then not execute//if this call then execute
//     },delay)

// }
// changeColor("red",1000, () => {
//     changeColor("green",1000, () => {
//         changeColor("blue",1000, () => {
//             changeColor("pink",1000,() => {
//                 changeColor("gray",1000)
//             })
//         })
//     })
// });

// callback hell ->problem

// function saveToDb(data,sucess,failure){
//     let internet = Math.floor(Math.random() * 10 + 1);
//     if(internet >4){
//         sucess();
//     }else{
//         failure();
//     }
// }
// saveToDb("packet1",()=>{
//     console.log("Data packet 1 is succesfully stored!");
//     saveToDb("packet2",()=>{
//         console.log("Data packet 2 is succesfully stored!");
//     },()=>{
//         console.log("Weak connection :data failed to save!");
//         saveToDb("packet3",()=>{
//             console.log("Data packet 3 is succesfully stored!");
//         },()=>{
//             console.log("Weak connection :data failed to save!");
//         })
//     })
// },()=>{
//     console.log("Weak connection :data failed to save!");
// })

// ########## With promises ##########
// function saveToDb(data){
//     return new Promise((resolve,reject) => {
//         let internet = Math.floor(Math.random()*10) + 1;
//          if(internet >4){
//             resolve("Data saved successfully!");
//          }else{
//             reject("Weak connection :data failed to save!");
//          }
//     });

// }

// saveToDb()
// .then(()=>{
//     console.log("Data 1 saved!");
//     then(()=>{
//         console.log("Data 2 saved!");
//     });

// })
// .catch(()=>{
//     console.log("Promises was rejected!");

// })

//Improved promises
// saveToDb("apna college")
// .then((result)=>{
//     console.log("Data 1 successful saved!");
//     console.log("Result of promises",result)
//     return saveToDb("Altaf Khan");
// })
// .then((result)=>{
//     console.log("Data 2 successful saved!");
//     console.log("Result of promises",result)
//     return saveToDb("mohammad");
// })
// .then((result)=>{
//     console.log("Data 3 successful saved!");
//     console.log("Result of promises",result)
// })
// .catch((error)=>{
//     console.log("Promises was rejected!");
//     console.log("Error of promises",error)
// })

// Promises:let's apply promises to our call back hell;

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed!");
    }, delay);
  });
}
changeColor("red", 1000)
  .then((res) => {
    console.log(res);
    console.log("Text convet into red!");
    return changeColor("green", 1000);
  })
  .then(() => {
    console.log("Text convet into blue!");
    return changeColor("blue", 1000);
  })
  .then(() => {
    console.log("Text convet into pink!");

    return changeColor("pink", 5000);
  });
