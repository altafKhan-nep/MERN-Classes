// for(let i =1;i<=10;i++){
// console.log(i);
// }
// for(let i =10;i>=1;i--){
//     console.log(i);
//     }


//print odd numbers:(1 to 15)

// for(let i=1;i<=15;i+=2){
//     console.log(i);
// }

// for(let i=15;i>=1;i-=2){
//     console.log(i);
// }

//print even numbers:(2 to 10)

// for(let i =2;i<=10;i+=2){
//     console.log(i)
// }
// console.log("backward");
// for(let i =10;i>=2;i-=2){
//     console.log(i)
// }

//multiplication table of 5 :

// for(let i = 1;i<=10;i++){

//     let num = 5;
//     num *= i;
//     console.log(num);
// }

// for(i=5;i<=50;i +=5){
//     console.log(i);
// }

// let num=parseInt(prompt("Enter the numbers:"));

// for(let i=num;i<=num*10;i+=num){
//     console.log(i);
// }

//Nested for loop:

// for(let i=1;i<=3;i++){ //outer loop
//     console.log(`outer loop : ${i}`);
//     for(let j =1;j<=3;j++){ //inner loop
//         console.log(j);
//     }
// }

//while loop
// let i=1;
//     while(i<=20){
//         console.log(i);
//         i+=2;
//     }

// ////EXERCISE:
// let fav_movie="ottoman";
// let guess= prompt("guess my favorite  movie name:");

// while(( guess != fav_movie) ){
//     if((guess == "quit")){
//         console.log("You give up");
//         break;
//     }
//     guess= prompt("guess my favorite  movie name::");
// }



// if(guess == fav_movie){
//     console.log("congrats!!");
// }


//LOOPS WITH ARRAY:
// let fruits = ["apple","olives","banana","grapes","strawberry"]
// fruits.push("pinaapple");

// for(let i=0;i<fruits.length;i++){
//     console.log(i,fruits[i])
// }
// console.log("For reverse:");

// for(let i=fruits.length-1;i>=0;i--){
//     console.log(i,fruits[i]);
// }


//NESTED LOOP WITH NESTED ARRAY:



// let heroes = [ ["iron man","Thor","Ant man","spider man"],["koseim sulaimani ","yhaya sinwar","ismail hanya","Abu Ubaida"] ];

// for(let i=0;i<heroes.length;i++){
//     console.log(`list #${i}`);
//     for(let j=0;j<heroes[i].length;j++){
//         console.log(j,heroes[i][j]);
//     }
// }


//eg:2

// let std = [ ["Altaf",90],["Yousuf",100],["Rida",98],["ibrahim",99]];

// for(let i = 0;i<std.length;i++){
//     console.log(`Student number: ${i+1}`);
//     for(let j = 0;j<std[i].length;j++){
//         console.log(std[i][j]);
//     }
// }


// FOR OF LOOP:

// let fruits = ["apple","olives","banana","grapes","strawberry"];
// for(fruit of fruits){
//     console.log(fruit);
// }

// let str = "MohammadAltafKhan";
// for(char of str){
//     console.log(char);
// }

//Nested FOR OF LOOP:
let heroes = [["iron man","Thor","Ant man","spider man"],["koseim sulaimani ","yhaya sinwar","ismail hanya","Abu Ubaida"]];

    for(lists of heroes){
        
        for(hero of lists){
            console.log(hero);
        }
    }