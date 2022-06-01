//Computer's random choice

let random = ["rock", "paper", "scissors"];
function computerPlay(){
    return random[Math.floor(Math.random() * random.length)]
}


//Global variables
let playerScore = 0;
let computerScore = 0;

//To play the Game
function game(){

// DOM -selectors
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.style.fontSize = "25px";
    button.style.background = "lightblue";
    button.style.borderRadius = "7px";
    button.addEventListener("click", () => {
        playerSelection = button.innerHTML;

        playerChoice.innerHTML = "Player selects: " + playerSelection;
        const computerSelection = computerPlay();
        computerChoice.innerHTML = "Computer selects: " + computerSelection;
        //Call the playRound function inside the main game
        gameRally.textContent = playRound(playerSelection, computerSelection);
        let gameWinner = "";
        trackPlayerScore.textContent = "Player Score = " + playerScore;
        trackComputerScore.textContent = "Computer Score = " + computerScore;
        resetGame();
    })
})
    
    //Function to determine Winner
    //1st player to score 5 points wins
    function resetGame(){
        if(playerScore == 5){
            gameWinner = "YOU WIN!";
            gameWinnerText.textContent = gameWinner;

            //Play Again Button will reset the game
            playAgainBtn.style.display = "inline-block";
            playAgainBtn.style.background = "red";
            playAgainBtn.style.color = "#fff";
            playAgainBtn.style.transition = "2s fade-in-out";
            //When Clicked, it refreshes the page
            playAgainBtn.addEventListener("click", ()=>{
                playAgainBtn.style.background = "orange";
                playAgainBtn.style.color = "flex";
                window.location.reload();
            })
        }else if(computerScore == 5){
            gameWinner = "YOU LOST!";
            gameWinnerText.textContent = gameWinner;

            //Create a play Again Button that will reset the game
            playAgainBtn.style.display = "inline-block";
            playAgainBtn.style.background = "red";
            playAgainBtn.style.color = "#fff";
            playAgainBtn.style.transition = "2s fade-in-out";
            //When Clicked, it refreshes the page
            playAgainBtn.addEventListener("click", ()=>{
                playAgainBtn.style.background = "orange";
                playAgainBtn.style.color = "black";
                window.location.reload();
            })
        }
    }
    
}

game()



// DOM Selectors
//container
const container = document.querySelector(".container");

//Play Again Button will reset the game
const playAgainBtn = document.querySelector(".play-again");
playAgainBtn.style.display = "none";

//Results Div
const resultsDiv = document.createElement("div");
resultsDiv.style.border = "2px solid black";
container.appendChild(resultsDiv);


//player Selection
const playerChoice = document.createElement("p");
playerChoice.style.color = "red";
playerChoice.style.fontSize = "25px";
resultsDiv.appendChild(playerChoice);

//computer selection
const computerChoice = document.createElement("p");
computerChoice.style.color = "blue";
computerChoice.style.fontSize = "25px";
resultsDiv.appendChild(computerChoice);

//Player Score
const trackPlayerScore = document.createElement("p");
trackPlayerScore.style.fontSize = "22px";
trackPlayerScore.style.color = "black";
resultsDiv.appendChild(trackPlayerScore);

//Computer Score
const trackComputerScore = document.createElement("p");
trackComputerScore.style.color = "black";
trackComputerScore.style.fontSize = "22px";
resultsDiv.appendChild(trackComputerScore);

//Display Game Rally
const gameRally = document.createElement("p");
gameRally.style.fontWeight = "700";
gameRally.style.fontSize =  "28";
gameRally.style.color = "green";
resultsDiv.appendChild(gameRally);

//Create Game winner Text
const gameWinnerText = document.createElement("p");
gameWinnerText.style.color = "red";
gameWinnerText.style.fontSize = "35px";
gameWinnerText.style.transition = "all 1s ease-in-out";
resultsDiv.appendChild(gameWinnerText);


//Function that plays 1 round of the game
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

