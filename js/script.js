
const btns = document.querySelectorAll("button");
const resultDisplay = document.querySelector("#resultDisplay");

let gameCount = 0;
let playerWins = 0;
let computerWins = 0;

btns.forEach((button)=>{
    button.addEventListener('click', ()=>{
        resultDisplay.textContent = playRound(button.value, getComputerChoice());
        checkWinner(resultDisplay.textContent);
        gameCount++;
        if(gameCount == 5){

            resultDisplay.textContent = `Player Wins: ${playerWins} | 
            Computer Wins: ${computerWins}`;

            playerWins = 0;
            computerWins = 0;
            gameCount = 0;

        };
    });
});

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

    switch(computerSelection){

        case "error":

            console.log("something went wrong.");
            statement = -1;
            return statement

            break;

        case playerSelection:
            statement = "Its a Tie!";
            return statement;
    
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

function checkWinner(statement){
    
    switch(statement){

        case "You Win!":
            playerWins++;
            break;

        case "You Lose.":
            computerWins++;
            break;

        case "Its a Tie!":
            break;
    }
}