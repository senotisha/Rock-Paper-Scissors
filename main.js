function getComputerChoice () {
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 1) {
        return "ROCK"
    }

    else if (computerChoice == 2) {
        return "PAPER"
    }

    else if (computerChoice == 3) 
        return "SCISSORS"
}

console.log(getComputerChoice())