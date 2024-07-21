let humanScore = 0;
let computerScore = 0;


function getComputerChoice () {
    const botChoice = Math.floor(Math.random() * 3);
    if (botChoice === 0) {
        return "ROCK";
    }

    else if (botChoice === 1) {
        return "PAPER";
    }

    else {
        return "SCISSORS";
    }
}

function getHumanChoice (){
    const playerChoice = prompt ("Pick: Rock, Paper OR Scissors").toLowerCase();
    if (playerChoice === "rock") {
        return "ROCK";
    }
    
    else if (playerChoice === "paper") {
        return "PAPER";
    }

    else if (playerChoice === "scissors") {
        return "SCISSORS";
    }

    else {
        console.log("Invalid option")
    }
}


function playGame() {

function playRound (humanChoice, computerChoice) {
    if (humanChoice === "ROCK" && computerChoice === "PAPER" ) {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    }
    else if (humanChoice === "PAPER" && computerChoice === "SCISSORS" ) {
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
    }
    else if (humanChoice === "SCISSORS" && computerChoice === "ROCK" ) {
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    }
    else if (humanChoice === "PAPER" && computerChoice === "ROCK" ) {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    }
    else if (humanChoice === "SCISSORS" && computerChoice === "PAPER" ) {
        console.log("You win! Scissors beats Paper.");
        humanScore++;
    }
    else if (humanChoice === "ROCK" && computerChoice === "SCISSORS" ) {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    }

    else if (humanChoice === computerChoice) {
        console.log("It's a draw!")
    }

    else {
        console.log("Invalid option")
    }
}

for (let i = 0; i < 5; i++) {
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound (humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("Player Wins!")
    }
    else {
        console.log("Computer Wins!")
    }
}

playGame();