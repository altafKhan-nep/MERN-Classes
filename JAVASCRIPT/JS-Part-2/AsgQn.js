// Q1:soln

// let num=20;
// if(num % 10 == 0){
//     console.log("good");
// }else{
//     console.log("bad");
// }

// //Q2:
// let uname = prompt("Enter your name:");
// let age = prompt("Enter your age:");

// alert(`${uname} is ${age} years old`);

//Q3:

// let quarter=4;

// switch(quarter){
//     case 1:
//         console.log("January,February,March");
//         break;
//     case 2:
//         console.log("April,May,June");
//         break;
//     case 3:
//         console.log("July,August,September");
//         break;
//     case 4:
//         console.log("October,November,December");
//         break;
//       default:
 //         onsole.log("Not a quarter");

// }

//Q4:soln

// let str ="ALTAFKHAN";

// if(((str[0] == 'a' ) || ( str[0] == 'A')) && (str.length >5)){
//     console.log("Golden");
// }else{
//     console.log("Not a golden");
// }

//Q5:soln

// let P=2,Q=7,R=56;

// if(P > Q && P >>R){
//     console.log(P,"is a greatest number.");
// }else if(Q > P && Q >>R){
//     console.log(Q,"is a greatest number.");
// }else{
//     console.log(R,"is a greatest number.");
// }

//Q6:soln

let num1=32;
let num2=47;

let num1last = num1 % 10;
let num2last = num2 % 10;

if(num1last == num2last){
    console.log("same last digit");
}else{
    console.log("not same last digit");
}