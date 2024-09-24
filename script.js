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
    switch(computerChoice) {
        case "Rock" :
            switch (humanChoice) {
                case "Paper" :
                    console.log("You lose! Rock beats paper");
                    computerScore++;
                    break;
                case "Scissor" :
                    console.log("You lose! Rock beats Scissor");
                    computerScore++;
                    break;
                default:
                    console.log("Tie!");
            }
            break;
        case "Paper" :
            switch (humanChoice) {
                case "Rock" :
                    console.log("You win! Rock beats paper");
                    humanScore++;
                    break;
                case "Scissor" :
                    console.log("You win! Scissor beats paper");
                    humanScore++;
                    break;
                default:
                    console.log("Tie!");
            }
            break;
        case "Scissor" :
            switch (humanChoice) {
                case "Rock" :
                    console.log("You win! Rock beats scissor");
                    humanScore++;
                    break;
                case "Paper" :
                    console.log("You lose ! Scissor beats Paper");
                    computerScore++;
                    break;
                default:
                    console.log("Tie!");
            }
            break;
        default:
            console.log("Error");
    }
}

function playGame(){
    for (i=0;i<5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(humanScore > computerScore){
        console.log("Congrats! You win!");
    } else {
        console.log("Sorry, you lose");
    }
}

playGame();