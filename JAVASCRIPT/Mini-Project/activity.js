let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inpTask = document.querySelector("input");


btn.addEventListener("click",function(){
  let item = document.createElement("li");
  item.innerText = inpTask.value;
  ul.appendChild(item);
  console.log(item.value);
  inpTask.value ="";

  let delBtn = document.createElement("button");
  delBtn.innerText = "x";
  delBtn.classList.add("delete")
  item.appendChild(delBtn);
});
ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
       let listItem = event.target.parentElement;
       listItem.remove();
    }
})

// let remBtns = document.querySelectorAll(".delete");
// for(remBtn of remBtns){
//     remBtn.addEventListener("click",function(){
//        let par = this.parentElement; //it access the parent <li></li>
//        par.remove(); //deleted here 
//     });
// }
    
    


