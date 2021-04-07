// the script needs to accept a user input of an integer up to 100
// using this input, it will create a grid which is comprised of a number of divs on each side equal to the user input
// once created, the user can hover their mouse over the grid area and any div hovered over will change colors, or have other effects
// the page will also have a reset button to clear the grid and the user will be able redefine the size of the grid

let screen = document.getElementById("etch-screen");

function addDivs (userNumber) {

    for (i=0; i < userNumber * userNumber; i++) {
        let newDiv = document.createElement("div");
        document.getElementById("etch-screen").appendChild(newDiv);
        newDiv.id = `newDiv${i}`
        newDiv.className = `newDiv${i}`;
        width = Math.floor(600/userNumber);
        newDiv.style.width = `${width}px`;
        let hoverDiv = document.getElementById(`newDiv${i}`);
        hoverDiv.addEventListener("mouseover", function(){hoverDiv.style.backgroundColor = "#000"});
    }
}

function gridSizeInput() {
    console.log("gridSizeInput called.");

    let input = document.getElementById('grid-size').value;
    console.log(input);

    if(!isNaN(parseInt(input)) && (input > 0) && (input <= 100)) {
        document.getElementById("etch-screen").innerHTML = "";
        addDivs(input);
    } else {
        alert("You must enter an integer from 1 to 100.");
    }
}

function clearScreen() {
    document.getElementById("etch-screen").innerHTML = "";
    alert("Screen cleared. Please enter a new resolution.");
}