//User Enter a Max number & then tries to guess a random generated number between 1 to max

const max_num = prompt("Enter a maximum number:");

const random_num = Math.floor(Math.random() * max_num) + 1 ;
let guess_num = prompt("Guess a number (or type 'quit' to exit):");


while(true){

    if(guess_num == "quit"){
        console.log("You give up!")
        break;
    }
    if(random_num == guess_num){
        console.log("You guess a correct number! number is",random_num);
        break;
    }else if(guess_num < random_num){
        guess_num = prompt("hint:guess greater than this");
    }else{
        guess_num = prompt("hint:guess smaller than this");
    }
}
