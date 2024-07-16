let humanScore = 0;
let computerScore = 0;


function getComputerChoice () {
    const botChoice = Math.floor(Math.random() * 3);
    if (botChoice === 1) {
        return "ROCK";
    }

    else if (botChoice === 2) {
        return "PAPER";
    }

    else (botChoice === 3) 
        return "SCISSORS";
}

console.log(getComputerChoice())

function getHumanChoice (){
    const playerChoice = prompt ("Pick: Rock, Paper OR Scissors").toLowerCase();
    if (playerChoice === "rock") {
        return "ROCK";
    }
    
    else if (playerChoice === "paper") {
        return "PAPER";
    }

    else (playerChoice === "scissors") 
        return "SCISSORS";
    
}




function playRound (humanChoice, computerChoice) {
    if (humanChoice === "ROCK" && computerChoice === "PAPER" ) {
        console.log("You lose! Paper beats Rock.");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound (humanSelection, computerSelection);