// let btns = document.querySelectorAll("button");

// for(btn of btns){
//     // btn.onclick = cli;
//     // btn.onmouseenter = hov;

//     btn.addEventListener("click",hello)
//     btn.addEventListener("click",helloName)
//     btn.addEventListener("mouseenter",()=>(console.log("You hover on a buttons")))
// }

// function hello(){
//     alert("Hello");

// }

// function helloName(){
//     alert("hello,Mohammad");
// }

//for other elments (circle-div)

// let p = document.querySelector('p');
// p.addEventListener("click",()=>(console.log("You clicked in a paragraph")));

// let circle = document.querySelector('div');
// circle.addEventListener("mouseenter",function(){
//     console.log("You are inside the circle");
// })


// #########this In Event Listener:#########

let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");
// p.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);
// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor ="green"
// }

// btn.addEventListener("click",function(){
//     console.log(event)
// });

// let inp = document.querySelector("input");
// inp.addEventListener("keydown",function(){
//     console.log("The key was pressed")
// });

// inp.addEventListener("keyup",function(){
//     console.log("key =",event.key)
//     console.log("code =",event.code)
//     console.log("The key was realsed");

// })
let inp = document.querySelector("input");
inp.addEventListener("keydown",function(){
    console.log("code = ",event.code);
    if(event.code == "keyU"){
        console.log("Characters moves foreward.");
    } else if(event.code == "keyD"){
        console.log("Characters moves backward.");
    }else if(event.code == "keyL"){
        console.log("Characters moves left.");
    }else if(event.code == "keyR"){
        console.log("Characters moves right.");
    }
})


