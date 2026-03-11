// function printName(){
//     console.log("Mohammad Altaf Khan");
// }
// printName();

//qs:1.

// function printPoem(){
//     console.log("Printing poem using a function!")
//     console.log("Printing poem using a function!")
//     console.log("Printing poem using a function!")
// }
// printPoem();

//qs:2.

// function roleDice(){

//     let value = Math.floor( (Math.random () * 6) + 1);
//     console.log(value);
// }
// roleDice();

// function helloName(name){
//     console.log("Welocome ",name);
// }
// helloName("Mohammad");

//Qs:3.

// function avgOf3Number(num1,num2,num3){
//     let avg = (num1+num2+num3)/3;
//     console.log(avg);
// }

// avgOf3Number(1,2,3);
// avgOf3Number(111,532,3183);

//Qs4:Function that print multiplication table:

// function multiplicationTable(num){
//     console.log("Multiplication table of ",num);
//     for(let i=1;i<=10;i++){
//         console.log(` ${1} x ${num} = ${i*num}`);
//     }
// }

// multiplicationTable(2);


// function printTable(num){
//     for(let i = num;i<=num *10;i+=num){
//         console.log(i);
//     }
// }
// printTable(78);

// function oddEven(nu){
//     if(nu % 2 == 0){
//         return "Even Number!";
//     }else{
//         return "Odd Number!"
//     }
// }
// console.log(oddEven(22));

//Qs:return sum of number 1 to n

// function sumToN(n){
//     let sum =0;

//     for(let i=1;i<=n;i++){
//         sum +=i;
//     }
//     return sum;
// }
// console.log(sumToN(100));

//Create a Function that returns the concatination of all strings in array.

// let str = ["Moh","a","mm","a","d"];
// function concat(str){
//     let result ="";
//     for(let i=0;i<str.length;i++){
        
//         result +=str[i]; // result = result + str[i];
//     }
//     return result;
// }
// console.log(concat(str));



//what o/p

// let greet ="Hello";//global scope

// function changGreet(){
//     let greet ="Assalamualaikum!"; //function scope
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet); //lexcial scope
//     }
// }
// console.log(greet);
// changGreet();

// let sum = function(a,b){
//     console.log(a+b);
// }
// sum(2,3);

//Higher Order Functions :

// function multiGreet(func,n){//Higher Order Functions
//     for(let i=0;i<n;i++){
//         func();
//     }
// }

// const greet = function(){
//     console.log("Marhaba!")
// }

// multiGreet(greet,4);

//Returns a function:

// function oddEvenTest(request){
//     if(request == "odd"){
//         return function odd(n){
//            console.log(n%2 !=0);
//         }
//     }else if (request == "even"){
//         return function even(n){
//             console.log(n%2 ==0);
//         }
//     }else{
//         console.log("Wrong number!");
//     }
// }
// let request = "odd";


//Methods:

const calculator = {
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a - b;
    },
    mul(a,b){
        return a * b;
    },
    div(a,b){
        return a / b;
    },
}
console.log("Add:",calculator.add(2,2));
console.log("Add:",calculator.sub(2,2));
console.log("Add:",calculator.mul(2,2));
console.log("Add:",calculator.div(2,2));