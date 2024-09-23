let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNum = Math.random();
    if (randomNum < 0.33) {
       return "Rock";
    } else if (randomNum < 0.66) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

function getHumanChoice() {
    let userChoice = prompt("What's your choice?");

    return userChoice;
}

function playRound(humanChoice, computerChoice){
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame(){

}