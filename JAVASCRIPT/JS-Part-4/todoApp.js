let todo = [];

let req = prompt("Please enter your request!");
while(true){

    if(req == "quit"){
        console.log("Your quiting todo app!");
        break;
    }

    if(req == "list"){
        console.log( "--------------------------------------------------------------" );
        for(let i =0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log( "--------------------------------------------------------------" );
    }else if(req == "add"){
        let task = ("Enter your task you want  add to todo :");
        todo.push(task);
        console.log("Taks added!");
    
    }else if(req == "delete"){
        let idx = prompt("Enter a index of tasks do you want to delete!");

        todo.splice(idx,1);
        console.log("Tasks deleted!");
    }else{
        console.log("Wrong request!");
    }
    req =  prompt("Please enter your request!");
}