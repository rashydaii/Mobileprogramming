// Function to add two numbers
function addNumbers() {
    let x = 5;
    let y = 10;
    let result = x + y;
    return result;
}

// Function to subtract two numbers
function subtractNumbers() {
    let x = 20;
    let y = 8;
    let result = x - y;
    return result;
}

// Function to multiply two numbers
function multiplyNumbers() {
    let x = 4;
    let y = 6;
    let result = x * y;
    return result;
}

// Function to divide two numbers
function divideNumbers() {
    let x = 30;
    let y = 5;
    let result = x / y;
    return result;
}

// Display functions
function displaySum() {
    let result = addNumbers();
    document.getElementById("result").textContent = "The sum is: " + result;
}

function displaySubtraction() {
    let result = subtractNumbers();
    document.getElementById("result").textContent = "The subtraction is: " + result;
}

function displayMultiplication() {
    let result = multiplyNumbers();
    document.getElementById("result").textContent = "The multiplication is: " + result;
}

function displayDivision() {
    let result = divideNumbers();
    document.getElementById("result").textContent = "The division is: " + result;
}
// Function to change font size
function changeFontSize() {
    let text = document.getElementById("box1");
    text.style.fontSize = "24px";
    text.style.color = "red";
    text.textContent = "Font size changed!";
}

// Function to change style
function changeStyle() {
    let box = document.getElementById("box3");
    box.style.backgroundColor = "lightgreen";
    box.style.border = "3px solid black";
    box.style.fontStyle = "italic";
    box.textContent = "Style changed!";
}

// Function to change image
function changeImage() {
    let box = document.getElementById("box5");
    box.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Dog_dancing.jpg/220px-Dog_dancing.jpg' alt='Dancing Dog' width='120'>";
}

// Function to add or change text
function addText() {
    let box = document.getElementById("box7");
    box.textContent = "Text changed!";
    box.style.backgroundColor = "lightcoral";
}
