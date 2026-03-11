// Qs1. Write a JavaScript function that returns array elements larger than a number.

// function returnLarger (arr,num){
//     let newArr =[]; 
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] > num){
//            newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(returnLarger([6, 46, 54, 6, 56, 54, 65, 4, 65], 50));
// //


// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh”
// ans = “abcdefgh”

function uniqueChar(str) {
    let ans = ""; // Step 1: Initialize an empty string

    for (let i = 0; i < str.length; i++) { // Step 2: Loop through each character in the string
        let currChar = str[i]; // Get the current character

        if (ans.indexOf(currChar) === -1) { // Step 3: Check if the character is NOT already in 'ans'
                    // if currchar is not exist in a ans then it return -->-1 if exost then -->0;
            ans += currChar; // Step 4: If not, add it to 'ans'
        }
    }
    return ans; // Step 5: Return the final string with unique characters
}
let str = "abcdabcdefgggh";
console.log(uniqueChar(str)); // Output: "abcdefgh"




// Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"]
// output : "United States of America

// let country = ["Australia", "Germany", "Palestine"];

// function longestCountry(country) {
//     let ansIdx = 0;

//     for (let i = 0; i < country.length; i++) {
//         let ansLen = country[ansIdx].length; // Move this inside the loop
//         let currLen = country[i].length;
//         if (currLen > ansLen) {
//             ansIdx = i;
//         }
//     }
//     return country[ansIdx];
// }

// console.log(longestCountry(country)); // Output: "Australia"



// Qs4. Write a JavaScript function to count the number of vowels in a String argument.

// function countVowel(str){
//     let count = 0;
//     for(let i=0;i<str.length;i++){
//         if(
//             str.charAt(i) == 'a' || 
//             str.charAt(i) == 'e' || 
//             str.charAt(i) == 'i' || 
//             str.charAt(i) == 'o' || 
//             str.charAt(i) =='u'
//         ){
//             count++;
//         }
//     }
//     return count;
// }
// let str ="aeiou"

// console.log("no of vowels is ",countVowel(str));







// Qs5. Write a JavaScript function to generate a random number within a range (start,end).

// function generateRandomNumber(start,end){
//     let diff = end - start;
//     let random = Math.floor(Math.random() * diff) + start;
//     return console.log(random);
// }

// generateRandomNumber(2,10)