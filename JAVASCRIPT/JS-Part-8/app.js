// let arr = [1,3,5,7,9];

// let print = function(ele){
//     console.log(ele);
// }

// arr.forEach(print);

//or
// arr.forEach(function(el){
//     console.log(el);
// })

// arr.forEach( el =>{
//     console.log(el);
// })

//array object:

let student = [
    {
        name:"Sayyed Hasan Nasrullah",
        position:"leader",
        marks:99
    },
    {
        name:"Sayed Ali Khamine",
        position:"Supreme Leader",
        marks:100

    },
    {
        name:"Abu Ubaida",
        position:"Spokeperson",
        marks:98
    },
    {
        name:"Mohammad Altaf Khan",
        position:"Battle field commandar",
        marks:96
    }
]

// student.forEach(std =>{
//     console.log(std.position)
// })

//Maps:
// let arr = [1,3,5,7,9];
// let newArr = arr.map( el =>{
//     return el*2;
// });

// let gpa = student.map( el => {
//     return el.marks/10;
// })


//FILTER:

// let num = [1,2,3,4,5,6,7,8,9,12,13,11,16,56];

// let filterNumber = num.filter( el =>{
//     // return el%2 != 0;
//     return el > 10;
// })

//Reduce 
// let result = num.reduce( (res,el) =>(res+el));

//every:
 
//Find maximum in array

// let num = [1,2,3,4,5,6,7,8,9,12,13,11,16,56];

// let ans = num.reduce((max,el)=>{
//     if(max>el){
//         return max;
//     }else{
//         return el;
//     }
// })


//Practice questions:
//check if all numbers in array are multiple of 10 or not

// let arr =[10,20,30,5];
// let ans = arr.every((el)=>el%10 == 0);

//Create a function to find the min number in an array.
// let arr =[10,20,30,5];
// function getMin(arr){
//     let min = arr.reduce( (min,el)=>{
//         if(el > min){
//             return min;
//         }else{
//             return el;
//         }
//     })
//     return min;
// }
// console.log(getMin(arr));

// Default Parameters:
// function sum(a,b=3){
//     return a + b;
// }

// //spread:
// let arr =[1,2,3,4,5,6,7,8,9]; 
// console.log(Math.min(...arr));
// console.log(...arr);
// console.log(..."MOHAMMADALTAFKHAN");

//###With array literals:

// let arr = [1,2,3,4,5,6,7,8,9];
// let newArr=[...arr];
// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];

// let nums =[...odd,...even]

//###With object  literals:

// let data = {
//     email:"Mohammad Altaf Khan",
//     pass:"fuckIsreal",

// }
// let newData = {...data,id:1947}

// let obj1={...[2,1,4,2,13,1]}
// let obj2={..."FreePalestine"}

//###rest:

// function sum(...arg){
//     return arg.reduce( (res,el) =>(res+el));
// }
// function max(msg,...arg){
//     console.log(msg)
//     return arg.reduce( (res,el)=>{
//         if(res>el){
//             return res;
//         }else{
//             return el;
//         }
//     })
// }


///###Destructuring:
// let names = ["Thor","Iron Man","Captain America","Ant Man","Spider Man","Venom"];
// let [winner,runner_up,...othersName] =names;

//###Destructuring Objects:Eg:

const STUDENT = {
    name:"Arif",
    class:6,
    age:14,
    subject:["Nepali","English","Math","Science"],
    username:"@arifkhan",
    password:"don't know",
    city:"Kathmandu"
}
let {username:user,password,name,subject,city:add="golbazar"} = STUDENT;