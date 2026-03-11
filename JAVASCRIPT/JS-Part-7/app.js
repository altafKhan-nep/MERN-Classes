// ####this  Keyword:

// let student = {
//     name:"Altaf",
//     age:20,
//     eng:93,
//     math:99,
//     phy:96,

//     getAvg(){
//         let avg = (this.eng + this.math + this.phy)/3;
//         console.log(`${this.name} average mark is ${avg}`);
//     }
// }
// ###try & catch :

// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// try{
//     console.log(a);
// }catch(error){
//     console.log("a is not defined.");
//     console.log(error);
// }


// console.log("Hello1");
// console.log("Hell1");
// console.log("Hell01");

// const mod = (a,b) =>(a%b);

// ##Set Timeout:

// setTimeout(() => {
//     console.log("Mohammad");
//    },2000) 

// let id1 =setInterval(() => {
//     console.log("Mohammad");
//    },2000)
// console.log(id1);

//### Set Interval:

// let id2 = setInterval(() =>{
//         console.log("Altaf");
//     },3000)
//     console.log(id2);
// clearInterval(id1);
// clearInterval(id2)


// "this" with arrow function:

// const student={
//     name:"Mohammad Altaf Khan",
//     marks:98,
//     prop:this,//global scope
//     getName:function (){
//         console.log(this)//caller scope
//         return this.name;
//     },
//     getMarks:() => {
//         console.log(this)//parent scope -->window
//         return this.marks;
//     },
//     getinfo1: function (){
//         setTimeout(function(){//window caller
//             console.log(this);
//         },2000)
//     },
//     getinfo2: function (){
//         setTimeout(() =>{
//             console.log(this);//student
//         },3000)
//     }
// }

//write an arrow function that returns the square of number 'n'

const squr = n =>(n**2);

//Write a function that print the "hello world " 5 times at a interval of 2s each
let id = setInterval( () => {
        console.log("hello world ");
    },2000)

    setInterval(()=>{
        clearInterval(id)
        console.log("clear interval ran!");
    },10000)
