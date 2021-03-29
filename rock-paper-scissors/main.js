// Rock, Paper, Scissors assignment from The Odin Project

// Computer will randomly select one of the three moves
// Player will input their chosen move
// Script will determine winner or a tie and notify the player
// Asks the player to play five rounds and keeps score, declaring the winner at the end


// function to select computer's play
function computerPlay() {
    computerSelection = plays[Math.floor(Math.random() * plays.length)];
}


// function to display the score to avoid repeating code in game() logic
function showScore(playerScore, computerScore) {
    alert(`The score is now:

        Player: ${playerScore}
        Computer: ${computerScore}
        Round #: ${roundsPlayed}`);
}


// function which declares win or loss condition
function declareWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        alert(`Congratulations, you won!
        
        The final score was:
        
        Player: ${playerScore}
        Computer: ${computerScore}`);
    } else {
        alert(`Sorry, you lost!
        
        The final score was:
        
        Player: ${playerScore}
        Computer: ${computerScore}`);
    }
}

// possible plays
const plays = ["rock", "paper", "scissors"];

// declares variable to store computer's play
let computerSelection;
let playerSelection;

// sets scores to 0 to start, keeps track of score which changes each round in game() function
let computerScore = 0;
let playerScore = 0;

// variable keeps track of # of played rounds
let roundsPlayed = 0;

// main game function, defines win/loss conditions
function game() {
    while (roundsPlayed <= 5) {
        // takes two arguments, player's selection and computer's selection and compares below
        function playRound(playerSelection, computerSelection) {
            if (playerSelection === "rock" && computerSelection === "paper") {
                computerScore += 1;
                alert(`You lost! Paper beats Rock.`);
            } else if (playerSelection === "paper" && computerSelection === "scissors") {
                computerScore += 1;
                alert(`You lost! Scissors beats Paper.`);
            } else if (playerSelection === "scissors" && computerSelection === "rock") {
                computerScore += 1;
                alert(`You lost! Rock beats Scissors.`);
            } else if (playerSelection === "rock" && computerSelection === "scissors") {
                playerScore += 1;
                alert(`You won! Rock beats Scissors.`);
            } else if (playerSelection === "paper" && computerSelection === "rock") {
                playerScore += 1;
                alert(`You won! Paper beats Rock.`);
            } else if (playerSelection === "scissors" && computerSelection === "paper") {
                playerScore += 1;
                alert(`You won! Scissors beats Paper.`);
            } else {
                alert("It's a tie! Let's play again.");
                roundsPlayed -= 1;
            }
        }
        
        // prompts player to choose their play and stores in the variable
        playerSelection = prompt(`Choose your weapon!:
        Rock
        Paper
        Scissors
            
        (Enter an item above)`);

        // changes player input to all lower-case
        playerSelection = playerSelection.toLowerCase();

        // while loop checks for valid user input and prompts until valid
        while (playerSelection != "rock" && playerSelection != "paper" && playerSelection !="scissors") {
            alert("You must select a valid weapon. Please try again.")

            playerSelection = prompt(`Choose your weapon!:
            Rock
            Paper
            Scissors
            
            (Enter an item above)`);
        }

        computerPlay();

        roundsPlayed += 1;
        playRound(playerSelection, computerSelection);
        showScore(playerScore, computerScore);
    }

    declareWinner(playerScore, computerScore);
}

game();
