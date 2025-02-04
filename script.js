let userscore = 0;
let compscore = 0;

let userscoree=document.querySelector(".userscore");
let compscoree=document.querySelector(".compscore");
let choices = document.querySelectorAll(".choice");
let addwinner=document.querySelector(".addwinner");
let msg=document.querySelector(".msg");
let userc=document.querySelector(".choiceu");
let compc=document.querySelector(".choicec");
const gencompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};
const drawgame=()=>{
    console.log("game was draw");
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
}
);
const playgame = (userchoice) => {
    console.log("user choice=", userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice=", compchoice);
    if(userchoice===compchoice){
        drawgame();
        msg.innerText="Game was drawn";
    }else if(userchoice==="rock"&&compchoice==="paper"){
       compscore++;
       console.log(compscore);
       console.log(userscore);
       msg.innerText="You Lose";
       userscoree.innerText=userscore;
       compscoree.innerText=compscore;
    }else if(userchoice==="paper"&&compchoice==="rock"){
        userscore++;
        console.log(userscore);
        console.log(compscore);
        msg.innerText="You Win!";
        userscoree.innerText=userscore;
       compscoree.innerText=compscore;
    }else if(userchoice==="rock"&&compchoice==="scissor"){
        userscore++;
        console.log(userscore);
        console.log(compscore);
        msg.innerText="You Win!";
        userscoree.innerText=userscore;
       compscoree.innerText=compscore;
    }else if(userchoice==="scissor"&&compchoice==="rock"){
        compscore++;
        console.log(userscore);
        console.log(compscore);
        msg.innerText="You Lose";
        userscoree.innerText=userscore;
       compscoree.innerText=compscore;
    }else if(userchoice==="paper"&&compchoice==="scissor"){
        compscore++;
        console.log(userscore);
        console.log(compscore);
        msg.innerText="You Lose";
        userscoree.innerText=userscore;
       compscoree.innerText=compscore;
    }else if(userchoice==="scissor"&&compchoice==="paper"){
    userscore++;
    console.log(userscore);
    console.log(compscore);
    msg.innerText="You Win!";
    userscoree.innerText=userscore;
       compscoree.innerText=compscore;
    };
    if(compscore>userscore){
        addwinner.innerText="Computer";
    }else if(userscore>compscore){
        addwinner.innerText="You!"
    }else if(compscore==userscore){
        addwinner.innerText="Draw"
    };
    userc.innerText="User chose  "+    userchoice;
    compc.innerText="Computer chose  "+    compchoice;

}