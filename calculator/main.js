// Calculator project from The Odin Project

// Must be able to take two numbers and an operator and return the answer

// separate function for each type of operation: add, subtract, multiply, divide
// must be able to detect any click of a number button
  // needs a variable to store the numbers the user clicks and display them on the calculator screen
  // needs a function that will use the user click on a given number and store it in the variable above
  // "first number" must be any number buttons clicked before an operator is clicked, all stored in variable
// needs a variable to store the operator the user clicks and display it on the screen
// must be able to detect any click of an operator button
  // needs a function that will detect which operator the user clicks and display it on the screen
  // "second number" must be any number buttons clicked after operator is clicked and before equals button is clicked, all stored in variable
// when user hits equals key, needs a function that will take the two numbers and the operator and return the answer and display it
// needs a function that will clear the screen when necessary or when user clicks button
// needs a function that will delete one item from the screen at a time
// user must be able to use floating point numbers in the operations


// stores first user number
let firstNumber = "";
// stores second user number
let secondNumber = "";
// stores selected operator
let userOperator = "";

// stores boolean of whether display needs to be reset within some functions below
let needsReset = false;

// stores calculator display element
let display = document.getElementById("display");

// stores equal button element and adds click event to run operate function
let equal = document.getElementById("equal").addEventListener("click", function () {
  operate(userOperator, firstNumber, secondNumber);
});

// stores decimal button element and adds click event to run addDecimal function
let decimal = document.getElementById("decimal").addEventListener("click", function () {
  addDecimal();
})

// array of each number button
let numberButtons = document.querySelectorAll("#number");
// array of each operator button
let operatorButtons = document.querySelectorAll("#operator")
// stores clear button, which clears the calculator display when clicked (resets back to 0)
let clear = document.getElementById("clear").addEventListener("click", function() {
  resetDisplay();
});
// stores delete button element
let deleteButton = document.getElementById("delete").addEventListener("click", displayDelete);

// loops through each number button and
numberButtons.forEach( function (number) {
  // will detect a user click and
  number.addEventListener("click", function () {
    // if clicked, runs addUserNumber function with the text of the clicked button
    addUserNumber(number.textContent)
  });
});

// does the same as above but for operator buttons
operatorButtons.forEach( function (operator) {
  operator.addEventListener("click", function () {
    addUserOperator(operator.textContent)
  });
});

// add window event listener to capture keyboard key presses and call getKeyboardPress function
window.addEventListener("keydown", getKeyboardPress);

// determines action based on a keyboard key press
function getKeyboardPress (press) {
  if (press.key >= 0 && press.key <= 9) { addUserNumber(press.key); }
  if (press.key === "/") { addUserOperator(press.key); }
  if (press.key === "*") { addUserOperator(press.key); }
  if (press.key === "-") { addUserOperator(press.key); }
  if (press.key === "+") { addUserOperator(press.key); }
  if (press.key === ".") { addDecimal(); }
  if (press.key === "Enter" || press.key === "=") { operate(userOperator, firstNumber, secondNumber); }
  if (press.key === "Backspace") { displayDelete(); }
  if (press.key === "Escape") { resetDisplay(); }
  }

// function to add two numbers
let add = function add (x, y) {
  return x + y;
}

// to subtract two numbers
let subtract = function subtract (x, y) {
  return x - y;
}

// to multiple to numbers
let multiply = function multiply (x, y) {
  return x * y;
}

// to divide two numbers
let divide = function divide (x, y) {
  return x / y;
}

// does the math using the user selected operator and two numbersw
function operate (operator, firstNumber, secondNumber) {

  console.log(firstNumber);

  // if operator is +, run add function
  if (operator === "+") {
    // display the rounded answer on the calculator display
    display.textContent = roundAnswer(add(Number(firstNumber), Number(secondNumber)));
  }
  // same for subtract
  if (operator === "-") {
    display.textContent = roundAnswer(subtract(Number(firstNumber), Number(secondNumber)));
  }
  // and for multiply
  if (operator === "*") {
    display.textContent = roundAnswer(multiply(Number(firstNumber), Number(secondNumber)));
  }
  // and divide
  if (operator === "/") {
    // checks whether user is trying to divide by zero
    if (secondNumber === "0") {
      // if so, display below message on calculator display
      display.textContent = "Can't do that!";
      // reset the screen back to default ("0")
      needsReset = true;
      resetValues();
      // break out of function
      return;
    }
    // if not dividing by zero, do the operation and display rounded result on calculator display
    display.textContent = roundAnswer(divide(Number(firstNumber), Number(secondNumber)));
  }
  // after given operation is complete, reset the screen
  resetValues();
  needsReset = true;
}

// rounds any answer so it will fit on the calculator display
function roundAnswer(answer) {
  return Math.round(answer * 10000000000) / 10000000000;
}

// resets all below variables
function resetValues() {
  firstNumber = "";
  secondNumber = "";
  userOperator = "";
}

// resets the display back to default of "0"
function resetDisplay() {
  display.textContent = "0";
  resetValues();
}

// deletes a single character at a time from the display text
function displayDelete() {
  // converts the display text to a string and removes last (most recently entered) character
  display.textContent = display.textContent.toString().slice(0, -1);
  // if after deleting a character there is nothing on the screen
  if (display.textContent === "") {
    // then reset the display back to default which is just a "0"
    resetDisplay();
  }
}

// adds the user number to the variables used in operate function and shows on caculator display
function addUserNumber(number) {
  // if needsReset is true, for example, after a previous completed operate function
  if (needsReset === true && !firstNumber.includes(".")) {
    // reset the display
    resetDisplay();
  }
  // if the only number on the screen is 0 (default state)
  if (display.textContent === "0" && !firstNumber.includes(".")) {
    // delete that 0 so the user number replaces it instead of just adds to it (e.g. 5 instead of 05)
    displayDelete();
  }
  // if no operator has been selected
  if (userOperator === "") {
    // then add the number to the firstNumber variable, used later in operate function
    firstNumber += number;
  } else {
    // otherwise (user has selected an operator), the clicked number should be added to the second number
    // for example, if display text = "555 + 444" then each of the three clicks of the "4" button would be added...
    // to the secondNumber variable since they came after the user already selected an operator
    secondNumber += number;
  }
  // once all conditions above are checked, add the cicked number to the calculator display
  display.textContent += number;
  // change to false in case it was previously set to true from a previous use of operate function
  needsReset = false;
  // delete any leading zero once first number is entered
  checkForLeadingZero();
}

// does the same as addUserNumber function but for a clicked operator
function addUserOperator(operator) {
  // checks whether user has selected an operator, or if there's no firstNumber set, or if it's still "0"
  if (userOperator !== "" || firstNumber === "" || firstNumber === "0") {
    // in those cases, break out of function
    return;
  }
  // if the user has not set a second number, for example, they haven't selected an operator yet
  if (secondNumber !== "") {
    // then break out of function so they can't input multiple operators back-to-back
    return;
  }
  // once all checked above, set userOperator to clicked operator
  userOperator = operator;
  // and show it on the calculator display
  display.textContent += ` ${operator} `;
}

// makes sure that no leading zeroes remain on calculator display
function checkForLeadingZero() {
  if (firstNumber.includes(".")) {
    return;
  }
  // stores the calculator display text to a string
  displayTextToString = display.textContent.toString();
  // if the first character of that string is "0"
  if (displayTextToString.charAt(0) === "0") {
    // then delete it
    display.textContent = display.textContent.toString().slice(1);
  }
}

// adds a decimal to the firstNumber or secondNumber
function addDecimal() {
  // if needsReset is true, for example, after a previous completed operate function
  if (needsReset === true) {
    // reset the display
    resetDisplay();
  }
  // check to make sure the firstNumber doesn't already have a decimal and that userOperator hasn't been selected by user yet
  if (firstNumber.includes(".") && userOperator === "") {
    // if either is true then clicking the decimal button shouldn't add a decimal (it would be more than one)
    // break out of function
    return;
  }
  // if secondNumber already has a decimal...
  if (secondNumber.includes(".")) {
    // then break out of function, don't add another one
    return;
  }
  // if secondNumber doesn't already have a decimal and if the userOperator has been set by user
  if (!secondNumber.includes(".") && userOperator !== "") {
    // but first, if firstNumer has been set and secondNumber hasn't yet
    if (firstNumber !== "" && secondNumber === "") {
      // then set it to a decimal
      secondNumber += "."
      // and show "0." on the calculator display to match with when a user starts the first number with a decimal
      // (always adds a leading zero whenever user picks a decimal as first part of either number)
      display.textContent += "0.";
      // break out of function
      return;
    }
    // then add the decimal to secondNumber...
    secondNumber += ".";
    // and display it on the calculator screen
    display.textContent += ".";
    // and break out of the function so it doesn't add a decimal to firstNumber by executing key below
    return;
  }
  // if function is still executing it means firstNumber can take a decimal
  firstNumber += ".";
  // and show it on the calculator display
  display.textContent += ".";
}