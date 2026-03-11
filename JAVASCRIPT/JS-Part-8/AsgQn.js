// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array.

// let arr =[2,3,4,5,1];

// let square = arr.map( (el) => {
//     return el*el;
// });
// console.log("square is",square)

// let sum = arr.reduce((res,el) =>{
//     return res+el;
// })
// console.log("Sum is ",sum)

// let average = sum /arr.length;
// console.log("Average is ",average)

// Qs2. Create a new array using the map function whose each element is equal to the
// original element plus 5.

// let arr = [2,3,4,5,1];
// let newArr = arr.map( (el) =>{
//     return el+5;
// })
// console.log(newArr)

// Qs3. Create a new array whose elements are in uppercase of words present in the
// original array.

// let strings = ["adam", "ibrahim", "kaif", "ali", "isha"];

// let newStr = strings.map( (el)=>(el.toUpperCase()));

// console.log(newStr)


// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled.

// let arr = [2,3,4,5,1];
// const doubleAndReturnArgs = (arr,...argu )  =>{
//    return newArr = [...arr,...argu.map((el)=>(el*2))];
    
// }


// Qs5. Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object.

// const obj1 = {
//     name:"Mohammad",
//     religion:"Islam"
// }
// const obj2 = {
//     last_prophet:"Muhammad S.A.W",
//     dream:"Shadat"
// }
// function mergeObjects(obj1,obj2) {
//     let newObj = {...obj1,...obj2};
//     console.log(newObj);
// }
// mergeObjects(obj1,obj2);