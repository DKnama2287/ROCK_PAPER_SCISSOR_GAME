let userscore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".chosen");
let msg = document.querySelector("#msg");
let usertotal = document.querySelector("#user");
let comptotal = document.querySelector("#computer");

let draw = () =>{
    console.log("the move was draw");
    msg.innerText = 'Both chose same choice \n so the move was draw';
    msg.style.backgroundColor = "red";
}

let result = (r,user,comp) =>{
    
    if(r===1){
       
        userscore++;
        console.log(`user chose ${user} and comp chose ${comp} \n so you win`);
        msg.innerText = `you chose ${user} and comp chose ${comp} \n so you win`;
        msg.style.backgroundColor = "blue"

        usertotal.innerText = userscore;
    }else{
        
        compScore++;
        console.log(`user chose ${user} and comp chose ${comp} \n so you lose`);
        msg.innerText = `you chose ${user} and comp chose ${comp} \n so you lost`;
        msg.style.backgroundColor = "green";
        comptotal.innerText = compScore;
    }
}

let showwinner = (userchoice) =>{

    let options = ["rock", "paper" , "scissor"];
    let idx = Math.floor(Math.random() *3);
    let compchoice = options[idx];
    console.log(compchoice);
    if(compchoice === userchoice){
        draw();
    }else{
          let r=1;
          if(userchoice === "rock"){
            if(compchoice ==="paper"){
                r=0;
                result(r,userchoice,compchoice);
            }else{
                r=1;
                result(r,userchoice,compchoice);
            }
          }else if(userchoice === "paper"){
            if(compchoice === "rock"){
                r=1;
                result(r,userchoice,compchoice);
            }else{
                r=0;
                result(r,userchoice,compchoice);
            }
          }else{
            if(compchoice === "rock"){
                r=0;
                result(r,userchoice,compchoice);
            }else{
                r=1;
                result(r,userchoice,compchoice);
            }
          }
          
    }

}

let playgame = (user) =>{
    console.log(user);
    showwinner(user);
}

choices.forEach((div) =>{
    div.addEventListener("click", ()=>{
        const userchoice = div.getAttribute("id");
        playgame(userchoice);
    })
})

let reset = document.querySelector("button");

reset.addEventListener("click" , ()=>{
    userscore = 0;
    compScore = 0;
    msg.innerText = "Play your move \n ( Click on the image above to move )";
    msg.style.backgroundColor = "#081b31";
    comptotal.innerText = 0;
    usertotal.innerText = 0;
} )