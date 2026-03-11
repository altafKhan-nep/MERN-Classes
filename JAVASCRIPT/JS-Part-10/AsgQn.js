// Qs1. Try out the following events in Event Listener on your own :
// - mouseout
let circle = document.querySelector(".circle");
circle.addEventListener("mouseout", function (event) {
  console.log(event);
  console.log("You come out from the  circle");
});

// - keypress
let log = document.querySelector("#para1");
const input1 = document.getElementById("input1");

input1.addEventListener("keypress", logkey);
function logkey(event) {
  log.textContent += `${event.code}`; //log.textContent =`${event.code}` + log.textContent;
}

// - Scroll
// let window = document.querySelector("window");
// window.addEventListener("scroll", function () {
//     console.log("You are scrolling!");
// });
// window.addEventListener("scroll", function () {
//     if (window.scrollY > 50) {
//         document.body.style.backgroundColor = "lightblue";
//     } else {
//         document.body.style.backgroundColor = "white";
//     }
// });

// - load:
// window.addEventListener("load",function(){
//     console.log("The page is fully loaded!")
// })
// window.addEventListener("load", function () {
//     document.getElementById("para2").style.display = "none";
// });

// [Use MDN for help]

// Qs2. Create a button on the page using JavaScript. Add an event listener to the button
// that changes the button’s color to green when it is clicked.
// let body = document.querySelector("body");
// let btn = document.createElement("button");
// btn.innerText="click me!";
// body.append(btn);

// btn.addEventListener("click",function(){
//     btn.style.backgroundColor ="green";
//     console.log("Button is clicked");
// });

// Qs3. Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading]

// let inputValue = document.querySelector("input");
// let headingElement  = document.querySelector("h2");

// inputValue.addEventListener("input",function(){
//     let filteredValue = inputValue.value.replace(/[^a-zA-Z ]/g, "");
//     inputValue.value = filteredValue;
//     headingElement.textContent = filteredValue; //headingElement.innerText = filteredValue;

// });
