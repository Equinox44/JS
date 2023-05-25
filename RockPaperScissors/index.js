const playertxt = document.getElementById("playerText");
const computertxt = document.getElementById("computerText");
const resulttxt = document.getElementById("result");
const choicebtns = document.querySelectorAll(".choiceBtn")
let player;
let computer;
let result;

choicebtns.forEach(button => button.addEventListener('click', () => {
    player = button.textContent;
    computer = computerTurn();
    playertxt.textContent = `Player: ${player}`;
    computertxt.textContent = `Computer: ${computer}`
    resulttxt.textContent = `Result: ${checkWinner()}`;
}));

function computerTurn(){
    const randnum = Math.floor(Math.random() * 3) + 1;

    switch(randnum){
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissor";
            break;
    }
    return computer;
}

function checkWinner(){
    if(player == computer){
        return "Draw!";
    }
    else if(computer == "Rock"){
        return (player == "Paper") ? "You Win!" : "You Lose!"
    }
    else if(computer == "Paper"){
        return (player == "Scissor") ? "You Win!" : "You Lose!"
    }
    else if(computer == "Scissor"){
        return (player == "Rock") ? "You Win!" : "You Lose!"
    }
}