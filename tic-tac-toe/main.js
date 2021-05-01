// main game function
const gameBoard = () => {

  // array to store the gameboard
  var _gameBoardArray = Array(9).fill("");

  // stores all game board grid squares
  let _gridSquares = document.querySelectorAll(".square");

  _gridSquares.forEach( function (square) {
    // will detect a user click and
    square.addEventListener("click", function() {
      // if clicked, runs handlePlayerMove function
      _updateGameBoard(square.id);
    });
  });

  // boolean that toggles to track whose turn it is
  var markToggle = true;
  // defines the mark of each player, X goes first
  var playerMark = "X";
  // stores the annoucements div
  const announceDiv = document.getElementById("announce-h3");

  // alternates player's turn as turns are taken
  const _playerToggle = () => {
    // if markToggle is true...
    if (markToggle) {
      announceDiv.textContent ="Player O's turn";
      playerMark = "X";
      markToggle = false;
      // ...and if it's false
    } else {
      announceDiv.textContent ="Player X's turn";
      playerMark = "O";
      markToggle = true;
    }
  }

  // function to handle a player's move
  const _updateGameBoard = (playerMove) => {

    // checks each grid square for clicked class, and if so break out of function
    // prevents a player from clicking the same square more than once
    if (_gridSquares.item(playerMove).classList.contains("clicked")) {
      return;
    }

    // checks to see if the game has already ended
    // and if so
    if (gameOver === true) {
      // break out of function...no more moves handled
      return;
    }

    // run player toggle to switch whose turn it next round
    _playerToggle();

    // place the player's mark in the clicked position of the gameboard array
    _gameBoardArray[Number(playerMove)] = playerMark;
    // change the grid square on the page to show the mark
    _gridSquares.item(playerMove).textContent = playerMark;
    // add the clicked class so clicking it again will have no effect
    _gridSquares.item(playerMove).classList.add("clicked");
    // check the array to see if there is a winner or draw
    _checkForWin(_gameBoardArray);
  }

  // booloean to track whether game has a winner or draw
  let gameOver = false;
  // stores the div where the play again message will appear if there is a winner or draw
  // this div starts out hidden until gameOver is set to true (someone has won or draw)
  let playAgainDiv = document.getElementById("play-again");
  // add a listener to detect a click
  playAgainDiv.addEventListener("click", () => {
    // and if so, refresh the page
    location.reload();
  })

  // announces a winner or draw
  const _declareWinner = (winner) => {

    if (winner === "X") {
      announceDiv.textContent = "Player X wins the game!";
    }
    if (winner === "O") {
      announceDiv.textContent = "Player O wins the game!"
    }
    if (winner === "tie") {
      announceDiv.textContent = "It's a tie!"
    }
    // when a winner/draw has been delcared, un-hide the play again div
    playAgainDiv.classList.remove("hidden");
    // set gameOver to true
    gameOver = true;
  }

  // used each round to check the gameboard array to see if a win/draw condition has been met
  const _checkForWin = (_gameBoardArray) => {

    // if there are no positions still empty, declare game a tie
    if (!_gameBoardArray.includes("")) {
      _declareWinner("tie");
    }

    // horizontal wins

    if (
      _gameBoardArray[0] === "X" &&
      _gameBoardArray[1] === "X" &&
      _gameBoardArray[2] === "X"
    ) { _declareWinner("X"); return; };

    if (
      _gameBoardArray[3] === "X" &&
      _gameBoardArray[4] === "X" &&
      _gameBoardArray[5] === "X"
    ) { _declareWinner("X"); return; };

    if (
      _gameBoardArray[6] === "X" &&
      _gameBoardArray[7] === "X" &&
      _gameBoardArray[8] === "X"
    ) { _declareWinner("X"); return; };

    if (
      _gameBoardArray[0] === "O" &&
      _gameBoardArray[1] === "O" &&
      _gameBoardArray[2] === "O"
    ) { _declareWinner("O"); return; };

    if (
      _gameBoardArray[3] === "O" &&
      _gameBoardArray[4] === "O" &&
      _gameBoardArray[5] === "O"
    ) { _declareWinner("O"); return; };

    if (
      _gameBoardArray[6] === "O" &&
      _gameBoardArray[7] === "O" &&
      _gameBoardArray[8] === "O"
    ) { _declareWinner("O"); return; };

    // vertical wins

    if (
      _gameBoardArray[0] === "X" &&
      _gameBoardArray[3] === "X" &&
      _gameBoardArray[6] === "X"
    ) { _declareWinner("X"); return; };

    if (
      _gameBoardArray[1] === "X" &&
      _gameBoardArray[4] === "X" &&
      _gameBoardArray[7] === "X"
    ) { _declareWinner("X"); return; };

    if (
      _gameBoardArray[2] === "X" &&
      _gameBoardArray[5] === "X" &&
      _gameBoardArray[8] === "X"
    ) { _declareWinner("X"); return; };

    if (
      _gameBoardArray[0] === "O" &&
      _gameBoardArray[3] === "O" &&
      _gameBoardArray[6] === "O"
    ) { _declareWinner("O"); return; };

    if (
      _gameBoardArray[1] === "O" &&
      _gameBoardArray[4] === "O" &&
      _gameBoardArray[7] === "O"
    ) { _declareWinner("O"); return; };

    if (
      _gameBoardArray[2] === "O" &&
      _gameBoardArray[5] === "O" &&
      _gameBoardArray[8] === "O"
    ) { _declareWinner("O"); return; };

    // horiztonal wins

    if (
      _gameBoardArray[0] === "X" &&
      _gameBoardArray[4] === "X" &&
      _gameBoardArray[8] === "X"
    ) { _declareWinner("X"); return; };

    if (
      _gameBoardArray[2] === "X" &&
      _gameBoardArray[4] === "X" &&
      _gameBoardArray[6] === "X"
    ) { _declareWinner("X"); return; };

    if (
      _gameBoardArray[0] === "O" &&
      _gameBoardArray[4] === "O" &&
      _gameBoardArray[8] === "O"
    ) { _declareWinner("O"); return; };

    if (
      _gameBoardArray[2] === "O" &&
      _gameBoardArray[4] === "O" &&
      _gameBoardArray[6] === "O"
    ) { _declareWinner("O"); return; };
  }
}

// instantiate main game object (gameBoard) to access its public variables and functions
let game = gameBoard();