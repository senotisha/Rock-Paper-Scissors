const humanScore = 0;
const computerScore = 0;


function getComputerChoice () {
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 1) {
        return "ROCK"
    }

    else if (computerChoice === 2) {
        return "PAPER"
    }

    else (computerChoice === 3) 
        return "SCISSORS"
}

console.log(getComputerChoice())

function getHumanChoice (){
    let playerChoice = prompt ("Pick: Rock, Paper OR Scissors");
    if (playerChoice === "rock") {
        return "ROCK"
    }
    
    else if (playerChoice === "paper") {
        return "PAPER"
    }

    else (playerChoice === "scissors") 
        return "SCISSORS"
    
}

console.log(getHumanChoice())


function playRound (humanChoice, computerChoice) {
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound (humanSelection, computerSelection);