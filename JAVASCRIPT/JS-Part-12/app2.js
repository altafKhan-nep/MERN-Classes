// let jsonData =  
//         '{"name":"Mohammad Altaf Khan","level":"Bachelor","marks":[60,58,55,59,57],"roll":null}';

// let jsObj = JSON.parse(jsonData);

// let stdObj = {
//     name:"mohammad",
//     age:20
// }
// let stdJSON= JSON.stringify(stdObj);


//api request:

// let url = " https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     return res.json();
// })
// .then((data1)=>{
//     console.log("Data1 :- ",data1.fact);
//     return fetch(url);

// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("Data2 :- ",data2.fact);
// })
// .catch((err)=>{
//     console.log("error ->",err);
// })


// USING FETCH WITH ASYNC/AWAIT:

// let url = " https://catfact.ninja/act";

// async function getFact(){
//    try{
//     let res = await fetch(url);
//     let data1 = await res.json();
//     console.log("Data1 :- ",data1.fact);
//     let res2 = await fetch(url);
//     let data2 = await res2.json();
//     console.log("Data2 :- ",data2.fact);
//    }catch(err){
//     console.log("Error ->",err)
//    }
//     console.log("Bye Bye ");
// }


