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

let playAgain = document.getElementById("status-middle");
    playAgain.addEventListener("click", function () {
    document.getElementById("status-top").innerHTML = "<p><center>Human vs machine!</center></p>";
    document.getElementById("status-middle").innerHTML = "<p><center>First one to 5 points wins.</center></p>";
    document.getElementById("status-bottom").innerHTML = "<p><center>Select your weapon below.</center></p>";
    resetScores();
})


// function to perform typewriter text effect on status updates

// variables used function
// var string1 = "this should be the text of string1";
// var string2 = "this should be the text of string2";
// var i = 0;
// var j = 0;
// var speed = 20; // delay in miliseconds between each letter being added

// function typeWriter(string, element, counter) {
//   setTimeout(()=> {

//   if (counter < string.length) {
//     document.getElementById(element).innerHTML += string.charAt(counter);
//     counter++;
//     typeWriter(string, element, counter)
//   }
//   }, 20)
// }


// typeWriter(string1, "typewriterDiv1", i);
// typeWriter(string2, "typewriterDiv2", j);

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


// function to alert player of result of game once either player reaches 5 points
function checkWinner(pScore, cScore) {

    if (pScore === 5) {
        setTimeout( function() {
            document.getElementById("status-top").innerHTML = `Your ${playerSelection} beats ${computerSelection}.<br><br>You won the game!!`;
        }, 1500);
        setTimeout( function() {
            document.getElementById("status-middle").innerHTML = "<center><button class='grow' id='play-again'>PLAY AGAIN?</button></center>";
        }, 1500);
        setTimeout( function() {
            document.getElementById("status-bottom").innerHTML = "";
        }, 1500);
    }

    if (cScore === 5) {
        setTimeout( function() {
            document.getElementById("status-top").innerHTML = `The computer's ${computerSelection} beats ${playerSelection}.<br><br>You lost the game...`;
        }, 1500);
        setTimeout( function() {
            document.getElementById("status-middle").innerHTML = "<center><button class='grow' id='play-again'>PLAY AGAIN?</button></center>";
        }, 1500);
        setTimeout( function() {
            document.getElementById("status-bottom").innerHTML = "";
        }, 1500);
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

    checkWinner(playerScore, computerScore);
}