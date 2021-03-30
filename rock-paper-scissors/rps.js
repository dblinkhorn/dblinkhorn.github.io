// Rock, Paper, Scissors assignment from The Odin Project

// Computer will randomly select one of the three moves
// Player will input their chosen move
// Script will determine winner or a tie and notify the player
// Asks the player to play five rounds and keeps score, declaring the winner at the end

// sets scores to 0 to start, keeps track of score which changes each round in playRound function
let computerScore = 0;
let playerScore = 0;

// define variable to store player's selection
let playerSelection;

// sets variable to the html element with id="rock"
let rock = document.getElementById("rock");
// if rock element is clicked
rock.addEventListener("click", function () {
    // set variable to rock
    playerSelection = "ROCK";
    // run function with "rock" as player's selection
    playRound(playerSelection);
});

let paper = document.getElementById("paper");
paper.addEventListener("click", function () {
    playerSelection = "PAPER";
    playRound(playerSelection);
});

let scissors = document.getElementById("scissors");
scissors.addEventListener("click", function () {
    playerSelection = "SCISSORS";
    playRound(playerSelection);
});

// function to alert player of result of game once either player reaches 5 points
function checkWinner(pScore, cScore) {

    function resetScores() {
        computerScore = 0;
        document.getElementById("computer-score").innerHTML = `<br>${computerScore}`;
        playerScore = 0;
        document.getElementById("player-score").innerHTML = `<br>${playerScore}`;
    }

    if (pScore === 5) {
            setTimeout(function(){document.getElementById("status").innerHTML = "Congratulations, you defeated the computer!<br><br><br>To play again, choose a weapon below."}, 1500);
            resetScores();
        }
    if (cScore === 5) {
            setTimeout(function(){document.getElementById("status").innerHTML = "Sorry, but the computer has defeated you!<br><br><br>To play again, choose a weapon below."}, 1500);
            resetScores()
        }

        console.log(`resetScores computer score = ${computerScore}.`);
        console.log(`resetScores player score = ${playerScore}.`);
    }

// function that determines outcome of the round
function playRound(playerSelection) {

    console.log(`playRound computer score = ${computerScore}.`);
    console.log(`playRound player score = ${playerScore}.`);

    // function to select computer's play
    function computerPlay() {
    // variable stores possible plays
    const plays = ["ROCK", "PAPER", "SCISSORS"];
    // variable stores randomly selected item from plays above
    computerSelection = plays[Math.floor(Math.random() * 3)];
    return computerSelection;
    }

    // set the variable to the returned play value
    computerSelection = computerPlay();
    console.log(computerSelection);

    // main game logic, determines winner of round based on selections
    if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        // award point to score
        computerScore += 1;
        // update status div with result of the round
        document.getElementById("status").innerHTML = `<p>The computer chose ${computerSelection}.<br><br><br>You lost... ${computerSelection} beats ${playerSelection}.<br><br><br>Better luck next round!</p>`;
        // update score
        document.getElementById("computer-score").innerHTML = `<br>${computerScore}`;
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        computerScore += 1;
        document.getElementById("status").innerHTML = `<p>The computer chose ${computerSelection}.<br><br><br>You lost... ${computerSelection} beats ${playerSelection}.<br><br><br>Better luck next round!</p>`;
        document.getElementById("computer-score").innerHTML = `<br>${computerScore}`;
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        computerScore += 1;
        document.getElementById("status").innerHTML = `<p>The computer chose ${computerSelection}.<br><br><br>You lost... ${computerSelection} beats ${playerSelection}.<br><br><br>Better luck next round!</p>`;
        document.getElementById("computer-score").innerHTML = `<br>${computerScore}`;
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        playerScore += 1;
        document.getElementById("status").innerHTML = `<p>The computer chose ${computerSelection}.<br><br><br>You won! ${playerSelection} beats ${computerSelection}.<br><br><br>You earned a point!</p>`;
        document.getElementById("player-score").innerHTML = `<br>${playerScore}`;
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        playerScore += 1;
        document.getElementById("status").innerHTML = `<p>The computer chose ${computerSelection}.<br><br><br>You won! ${playerSelection} beats ${computerSelection}.<br><br><br>You earned a point!</p>`;
        document.getElementById("player-score").innerHTML = `<br>${playerScore}`;
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        playerScore += 1;
        document.getElementById("status").innerHTML = `<p>The computer chose ${computerSelection}.<br><br><br>You won! ${playerSelection} beats ${computerSelection}.<br><br><br>You earned a point!</p>`;
        document.getElementById("player-score").innerHTML = `<br>${playerScore}`;
    } else {
        // let player know if it's a tie. score doesn't change
        document.getElementById("status").innerHTML = `<p>The computer also chose ${computerSelection}.<br><br><br>Let's re-play this round...</p>`;
    }

    checkWinner(playerScore, computerScore);
}