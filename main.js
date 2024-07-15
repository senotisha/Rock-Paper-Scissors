const humanScore = 0;
const computerScore = 0;


function getComputerChoice () {
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 1) {
        return "ROCK";
    }

    else if (computerChoice === 2) {
        return "PAPER";
    }

    else (computerChoice === 3) 
        return "SCISSORS";
}

console.log(getComputerChoice())

function getHumanChoice (){
    const humanChoice = prompt ("Pick: Rock, Paper OR Scissors");
    if (humanChoice === "Rock") {
        return "ROCK";
    }
    
    else if (humanChoice === "Paper") {
        return "PAPER";
    }

    else (humanChoice === "Scissors") 
        return "SCISSORS";
    
}

console.log(getHumanChoice())


function playRound (humanChoice, computerChoice) {
    if (humanSelection === "ROCK" && computerSelection === "PAPER" ) {
        console.log("You lose! Paper beats Rock.");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound (humanSelection, computerSelection);