let playerSelection = prompt("rock, paper, or scissors?");
let computerSelection = getComputerChoice();
let errorCount = 0;

playGame(playerSelection, computerSelection);

function playGame(playerSelection, computerSelection){
    let gameCount = 1;
    let playerWins = 0;
    let computerWins = 0;
    let isError = 0;

    while(gameCount <= 5){
        switch(playRound(playerSelection, computerSelection)){
            case "You Win!":
                playerWins++;
                break;

            case "You Lose.":
                computerWins++;
                break;

            case -1:
                isError = -1;
                break;
        }

        if(isError == -1) break;
        if(gameCount >= 5) break;

        computerSelection = getComputerChoice();
        playerSelection = prompt("rock, paper, or scissors?");
        gameCount++;
    }

    alert(`Score: Player ${playerWins} : Computer ${computerWins}`);

}

function getComputerChoice(){
    let computerChoice;
    let randNum = Math.floor(Math.random() * 3) + 1;
    switch(randNum){
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
        default:
            computerChoice = "error";
            break;
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection){

    let statement;

    playerSelection = playerSelection.toLowerCase();

    checkPlayerChoice(playerSelection);

    switch(computerSelection){

        case "error":

            console.log("something went wrong.");
            statement = -1;
            return statement

            break;

        case "rock":

            if(playerSelection == "paper"){
                statement = "You Win!";
                return statement;
            }else{
                statement = "You Lose.";
                return statement;
            }

            break;

        case "paper":

            if(playerSelection == "scissors"){
                statement = "You Win!";
                return statement;
            }else{
                statement = "You Lose.";
                return statement;
            }

            break;

        case "scissors":

            if(playerSelection == "rock"){
                statement = "You Win!";
                return statement;
            }else{
                statement = "You Lose.";
                return statement;
            }

            break;
        
    }

}

function checkPlayerChoice(playerSelection){

    playerSelection = playerSelection.toLowerCase();

    switch(playerSelection){
        case "rock":
            break;
        case "paper":
            break;
        case "scissors":
            break;
        default:

            if(errorCount >= 5){
                alert("too many invalid inputs.");
                break;
            }
            errorCount++;

            alert("invalid choice, try again.");
            playerSelection = prompt("rock, paper, or scissors?", "error");
            setPlayerSelection(playerSelection);
            break;
    }
}

function setPlayerSelection(playerChoice){
    playerSelection = playerChoice;
    checkPlayerChoice(playerSelection);
}