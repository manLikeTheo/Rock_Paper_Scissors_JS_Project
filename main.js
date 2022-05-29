//Computer's random choice

let random = ["rock", "paper", "scissors"];
function computerPlay(){
    return random[Math.floor(Math.random() * random.length)]
}


//Player's choice
function playerChoice(){
    let input = prompt("Make your move!")
    while(input === null){
        input = prompt("Please, make your move!");
    }
    input = input.toLowerCase();
    return input;
}

//Validate input
function validateInput(choice){
    if(random.includes(choice)){
        return true;
    } else{
        return false;
    }
}

//Global variables
let playerScore = 0;
let computerScore = 0;

//To play the Game
function game(){
    let gameWinner = "";
    //Loop for 5 rounds
    let rounds = 0;
    for(let i = rounds; i < 5; i++){
    //log selections
    const playerSelection = playerChoice();
    console.log("Player selects: " + playerSelection);
    const computerSelection = computerPlay();
    console.log("Computer selects: " + computerSelection);
    //Call the playRound function inside the main game
    playRound(playerSelection, computerSelection);
    }
    //Deter,ine the winner at the end of 5 rounds
    if(playerScore === computerScore){
        gameWinner = "Its a TIE!";
    } else if(playerScore < computerScore){
        gameWinner = "You LOST!";
    } else{
        gameWinner = "You WIN!"
    }
    console.log("Winner At The End Of 5 rounds is: " + gameWinner);
}

game()

function playRound(playerSelection, computerSelection){
    let playerWin = "You Win!";
    let computerWin = "You Lose!";
    let tie = "Its a tie!";

    //the rock-paper-scissors logic
    if(playerSelection === computerSelection){
        return tie;
    } else if(((playerSelection === "rock") && (computerSelection === "paper")) || ((playerSelection === "paper") && (computerSelection === "scissors")) || ((playerSelection === "scissors") && (computerSelection === "rock"))){
        computerScore++
        return computerWin;
    } else{
        playerScore++
        return playerWin;
    }
    
}


