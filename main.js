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
    if (playerChoice === "Rock") {
        return "ROCK"
    }
    
    else if (playerChoice == "Paper") {
        return "PAPER"
    }

    else (playerChoice === "Scissors") 
        return "SCISSORS"
    
}

console.log(getHumanChoice())


function playRound (humanChoice, computerChoice) {

}