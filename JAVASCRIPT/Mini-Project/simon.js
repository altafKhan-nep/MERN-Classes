//start game
//increase levelup
//btn flash
let gameSeq = [];
let userSeq = [];
let btns =["red","blue","green","yellow"];


let gameStarted = false;
let level = 0;
let highScore = level;
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(gameStarted == false){
        gameStarted = true;
        console.log("Game started!");
        levelUp();
    }
});
function  gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)
}

function  userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250)
}

function levelUp(){
    userSeq =[];
    level++;
    if(level > highScore){
        highScore = level;
    }
 
    h2.innerText = `Level ${level}`;

    //chose random button then flash
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log("randIdx ",randIdx);
    // console.log("randColor ",randColor);
    // console.log("randBtn ",randBtn);
    //accesing game random value and store into gameSeq array
    gameSeq.push(randColor);
    console.log(gameSeq)
    gameFlash(randBtn);
}
function checkSeq(idx){
    
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over ! Your score was <b>${level} </b> <br> Press Any Key restart the game! <br>High score is <b> ${highScore}</b> `;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor ="white";
        },150);

        reset();
    }
}
function btnPress(){
    // console.log(this)
    let btn = this;
    userFlash(btn);
    //accesing user press value and store into userSeq array
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userSeq);

    checkSeq(userSeq.length - 1); //it check the last index

}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function reset(){
     gameStarted = false;
     gameSeq = [];
     userSeq = [];
     level = 0;

}