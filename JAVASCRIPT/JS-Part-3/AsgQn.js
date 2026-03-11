// // Qn1: first n element of array

// let arr = [1,3,7,9,11];
// let n=3;

// let ans = arr.splice(0,n);
// console.log(ans);

// Qn2: last n element of array

// let arr = [7,9,0,-2];
// let n=3;

// let ans = arr.slice(arr.length - n); // 3 - 3 = 0
// console.log(ans);


// Qn3: check string is blank or not:

// let str = 'altaf';

// if(str.length  == 0){
//     console.log("String is blank");
// }else{
//     console.log("String is not  blank");
// }

// Qn4:Write a JavaScript program to test whether the character at the given (character) index is lower case.

// let str = 'Altaf';
// let idx=0;
// if(str[idx] == str[idx].toUpperCase()){
//     console.log("lower case");
// }else{
//     console.log(" not lower case");
// }

//Qn5: Write a JavaScript program to strip leading and trailing spaces from a string

// let str = '  Altaf   ';

// console.log(str.trim());

//Qs6. Write a JavaScript program to check if an element exists in an array or not.

let arr = ['a','b','f'];
let elm = 'k';

if(arr.indexOf(elm) != -1){
    console.log("exist");
}else{
    console.log("not exist");
}