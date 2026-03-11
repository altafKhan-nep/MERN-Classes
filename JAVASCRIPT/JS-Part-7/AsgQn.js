// Qs1. Write an arrow function named arrayAverage that accepts an array of numbers
// and returns the average of those numbers

// const arrayAverage =  (arr) => {
// let sum =0;
// // let n =0;
// for(let i=0;i<arr.length;i++){//4
//     sum +=arr[i];
//     // n++;
// }

// let avg = sum /arr.length;
// return avg;
// }
// let arr = [98,97,99,96]
// console.log("Average of the given array is ",arrayAverage(arr));


// Qs2. Write an arrow function named isEven() that takes a single number as argument
// and returns if it is even or not.

// const isEven = n =>{
//     if(n%2 != 0){
//         return "odd";
//     }else{
//         return "even";
//     }
// }

// isEven(4);

// const isEven = n => (n%2 == 0)

//Qs3. What is the output of the following code :

// const object = {
//             message: 'Hello, World!',
//             logMessage() {
//             console.log(this.message);
//             console.log("bye bye")
//              }
//         };
//     setTimeout(object.logMessage, 1000);

//Qs4. What is the output of the following code :

let length = 4;
function callback() {
console.log(this.length);
}
const object = {
    length: 5,
    method(callback) {
        callback();
     },
 };

object.method(callback, 1, 2);