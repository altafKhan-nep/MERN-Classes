//Add the following elements to the container using only  javascript and the DOM Methods.
//i. a <p> with the red text that says "Hey i'm red!"

let para1 = document.createElement('p');
para1.innerText = "Hey i'm red!";

document.querySelector('body').append(para1);

para1.classList.add("red");

//ii.an <h3>with blue text that says " i am blue H3!"

let h3 = document.createElement('h3');
h3.innerText = "Hey i'm blue H3!";

document.querySelector('body').append(h3);

h3.classList.add("blue");

//iii. a <div> with a black border and
//  pink background color with the following elements inside of it
//  .another <h1> that says "i'm in a div "
//  .a <p> that says "ME TOO!"

let div = document.createElement('div');
let h1 = document.createElement("h1");
let para2 = document.createElement('p');

h1.innerText = "i'm in a div";
para2.innerText = "ME TOO!";

div.prepend(h1)
div.prepend(para2)

div.classList.add('divDeco')
document.querySelector('body').prepend(div);