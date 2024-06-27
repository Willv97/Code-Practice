// Calculator

const display = document.getElementById("display");

//Create a function to add values to the display variable
function appendToDisplay(input) {
    display.value += input;
}

//Create a function to clear the value of display
function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    }

    catch {
        display.value = "Error";
    }
}