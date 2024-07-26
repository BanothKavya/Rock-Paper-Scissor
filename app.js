let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const  msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const genCompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="game was draw.play again";
    msg.style.backgroundcolor="yellow";
}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win");
        msg.innerText="you win";
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you lose");
        msg.innerText="you lose";
        msg.style.backgroundColor="red";
    }
}
const playgamee=(userchoice)=>{
    console.log("user choice=",userchoice);
    //generate computer choice
    const compchoice=genCompchoice();
    console.log("comp choice=",compchoice);
    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
        userwin=compchoice==="paper"?false:true;
        }
    else if(userchoice==="paper"){
        userwin=compchoice==="scissors"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgamee(userchoice);
    });
});