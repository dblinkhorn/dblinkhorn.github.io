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

// variable to store where play again button will be inserted at the end of the game
let playAgain = document.getElementById("status-middle");

// if playAgain is clicked
playAgain.addEventListener("click", function () {
    // insert the following html into respective elements
    document.getElementById("status-top").innerHTML = "<p><center>Human vs machine!</center></p>";
    document.getElementById("status-middle").innerHTML = "<p><center>First one to 5 points wins.</center></p>";
    document.getElementById("status-bottom").innerHTML = "<p><center>Select your weapon below.</center></p>";

    // if player clicks play again, reset the scores
    resetScores();
})

// variables to use in declareWinner function depending on round winner
winResult = "You won!"
loseResult = "You lost..."
winMessage = "Keep it up!"
loseMessage = "Better luck next round!"


// function used in main playRound function to avoid lots of repeat code
function declareWinner(result, message) {
    document.getElementById("status-top").innerHTML = `<p>The computer chose ${computerSelection}.</p>`;
    document.getElementById("status-middle").innerHTML = `<p>${result} ${playerSelection} beats ${computerSelection}.</p>`;
    document.getElementById("status-bottom").innerHTML = `<p>${message}</p>`;
}

// funtion to award points and change score element on computer win
function computerWin() {
    computerScore += 1;
    declareWinner(loseResult, loseMessage);
    document.getElementById("computer-score").innerHTML = `<br>${computerScore}`;
}

// same as above but for player win
function playerWin() {
    playerScore += 1;
    declareWinner(winResult, winMessage);
    document.getElementById("player-score").innerHTML = `<br>${playerScore}`;

}

// disables buttons after game is finished (someone reaches 5 points)
function disableButtons() {
    document.getElementById('rock').style.pointerEvents = 'none';
    document.getElementById('paper').style.pointerEvents = 'none';
    document.getElementById('scissors').style.pointerEvents = 'none';
}

// re-enables buttons if player clicks 'play again' button
function enableButtons() {
    document.getElementById('rock').style.pointerEvents = 'auto';
    document.getElementById('paper').style.pointerEvents = 'auto';
    document.getElementById('scissors').style.pointerEvents = 'auto'; 
}


// function to alert player of result of game once either player reaches 5 points
function checkWinner(pScore, cScore) {

    if (pScore === 5) {
        disableButtons();
        document.getElementById("status-top").innerHTML = `Your ${playerSelection} beats ${computerSelection}.`;
        document.getElementById("status-middle").innerHTML = "<strong>You win the game!</strong><br><br><button class='grow' id='play-again'>PLAY AGAIN?</button>";
        document.getElementById("status-bottom").innerHTML = "";
    }

    if (cScore === 5) {
        disableButtons();
        document.getElementById("status-top").innerHTML = `${playerSelection} beats your ${computerSelection}.`;
        document.getElementById("status-middle").innerHTML = "<strong>The computer wins the game!</strong><br><br><button class='grow' id='play-again'>PLAY AGAIN?</button><";
        document.getElementById("status-bottom").innerHTML = "";
    }
        console.log(`resetScores computer score = ${computerScore}.`);
        console.log(`resetScores player score = ${playerScore}.`);
}

// resets all scores to 0 for new game
function resetScores() {
    computerScore = 0;
    document.getElementById("computer-score").innerHTML = `<br>${computerScore}`;
    playerScore = 0;
    document.getElementById("player-score").innerHTML = `<br>${playerScore}`;
    // re-enable the  buttons on new game
    enableButtons();
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
        computerWin();
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        computerWin();
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        computerWin();
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        playerWin();
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        playerWin();
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        playerWin();
    } else {
        // let player know if it's a tie. score doesn't change
        document.getElementById("status-top").innerHTML = `<p>The computer also chose ${computerSelection}.`;
        document.getElementById("status-middle").innerHTML = `<p>Let's re-play this round...</p>`;
        document.getElementById("status-bottom").innerHTML = `<p>Choose your weapon below.`;
    }

    // checks at the end of each round to see if either play has 5 points, the win condition
    checkWinner(playerScore, computerScore);
}