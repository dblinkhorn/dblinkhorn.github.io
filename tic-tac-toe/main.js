// main game function
const gameBoard = () => {

  // array to store the gameboard
  var _gameBoardArray = Array(9).fill("");

  // stores all game board grid squares
  let _gridSquares = document.querySelectorAll(".square");

  // adds an event listener to each square div to run _updateGameBoard function
  _gridSquares.forEach( function (square) {
    square.addEventListener("click", function() {
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
    if (markToggle) {
      announceDiv.textContent ="Player O's turn";
      playerMark = "X";
      markToggle = false;
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
    if (gameOver === true) {
      // if so, break out of function
      return;
    }

    // run player toggle to switch whose turn it next round
    _playerToggle();

    // place the player's mark in the gameboard array which corresponds to array position
    _gameBoardArray[Number(playerMove)] = playerMark;
    // change the grid square on the index page to show the mark
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
  playAgainDiv.addEventListener("click", () => {
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
    gameOver = true;
  }

  // used each round to check the gameboard array to see if a win/draw condition has been met
  const _checkForWin = (_gameBoardArray) => {

    // if there are no positions still empty, declare game a tie
    if (!_gameBoardArray.includes("")) {
      _declareWinner("tie");
    }

    let gridSize = 3;
    let spanMaxRow = gridSize;
    let spanMaxColumn = (gridSize * gridSize);
    let indexIncrementColumn = 1
    let loopIncrementRow = 1;

    // checks for horizontal win
    const _checkSpan = (_gameBoardArray, spanMax, indexIncrement, loopIncrement) => {
      let currentTestSpan = [];
      let currentSpanFirstIndex = 0;
      let nextSpanFirstIndex = 0;
      
        for (let span = 1; span <= gridSize; span++) {
          currentSpanFirstIndex = nextSpanFirstIndex;
          // loop through each index of a row, and add it to the current test row array
          for (let index = currentSpanFirstIndex; index < currentSpanFirstIndex + spanMax; index += loopIncrement) {
            currentTestSpan.push(_gameBoardArray[index]);
          }
          // check if each value in the current test row array are all the same
          if (currentTestSpan.every(mark => mark === "X")) {
            _declareWinner("X");
            return;
          } else if (currentTestSpan.every(mark => mark === "O")) {
            _declareWinner("O");
            return;
          } else {
            // if they aren't all the same then clear the array for the next loop through the next row
            currentTestSpan = [];
            nextSpanFirstIndex = currentSpanFirstIndex + indexIncrement; // gridSize;
          }
        }
      }

    // checks for diagonal win
    const _checkDiagonals = (_gameBoardArray) => {
      let firstTestDiagonal = [];
      let secondTestDiagonal = [];
      let firstDiagonalFirstIndex = 0;
      let secondDiagonalFirstIndex = (gridSize * gridSize) - gridSize;
      
        // first diagonal loop
        for (let index = firstDiagonalFirstIndex; index < gridSize * gridSize; index += gridSize + 1) {
          firstTestDiagonal.push(_gameBoardArray[index]);
        }

        // second diagonal loop
        for (let index = secondDiagonalFirstIndex; index >= gridSize - 1; index -= gridSize - 1) {
          secondTestDiagonal.push(_gameBoardArray[index]);
        }

        const _checkTestDiagonal = (testDiagonal) => {
          if (testDiagonal.every(mark => mark === "X")) {
            _declareWinner("X");
          } else if (testDiagonal.every(mark => mark === "O")) {
            _declareWinner("O");
          } else {
            return;
          }
        }
        
        _checkTestDiagonal(firstTestDiagonal);
        _checkTestDiagonal(secondTestDiagonal);

      }

      _checkSpan(_gameBoardArray, spanMaxRow, gridSize, loopIncrementRow);
      _checkSpan(_gameBoardArray, spanMaxColumn, indexIncrementColumn, gridSize)
      // _checkColumns(_gameBoardArray);
      _checkDiagonals(_gameBoardArray);

  }
}

let game = gameBoard();