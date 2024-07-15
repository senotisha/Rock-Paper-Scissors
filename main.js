function getComputerChoice () {
    return Math.floor(Math.random().toString("Rock", "Paper", "Scissors") * 3);
}

console.log(getComputerChoice())