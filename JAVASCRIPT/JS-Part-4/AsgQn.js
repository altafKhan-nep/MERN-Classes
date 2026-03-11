// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num =2;

// for(let i=0;i<arr.length;i++){
//     if(arr[i] == num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);


// Qs2. Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6

// let number = 287152;
// let copy = number;
// let count =0;
// if( number == 0){
//     count =1;
// }else{
//     while(number != 0){
//         number = Math.floor(number/10);
//         count ++;
//     }
// }

// console.log(`The length of ${copy} is ${count}`);
    //Method 2
// let number = 287152;
// let strNumber = number.toString();
// let count = strNumber.length;
// console.log(`The length of ${number} is ${count}`);


// Qs3. Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25

// let  number = 287152;
// let cpy_number = number;
// let sum =0;

// while(number != 0){
//     digit = number %10; //2 find last digit 
//     sum += digit;
//     number = Math.floor(number /10); // it remove last digit
// }
// console.log(`The sum of the ${cpy_number} is ${sum}`);


// Qs4. Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a
// given positive integer and denoted by that integer. ]
// Example :
// 7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
// 5! (factorial of 5) = 1x2x3x4x5 = 120
// 3! (factorial of 3) = 1x2x3 = 6
// 0! Is always 1


// let number=7;

// let fact_number=1;
// if(number == 0 || number == 1){
//     console.log(`Factorial of the ${number} is 1`);
// }else if(number >=0){
//     for(let i=1;i<=number;i++){
//         fact_number *=i;
//     }
//     console.log(`Factorial of the ${number} is ${fact_number}`);
// }else{
//     console.log("Enter positive number only!");
// }

// Qs5. Find the largest number in an array with only positive numbers.

let num =[2,8,1,17,18,10,56];
let largest = 0;

for(let i=0;i<num.length;i++){
    if(largest <num[i]){
        largest = num[i];
    }
}
console.log(`The largest number is ${largest}`);


    
    

