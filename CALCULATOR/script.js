let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperator(op) {
    if (currentInput !== '') {
        operator = op;
        previousInput = currentInput;
        currentInput = '';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    updateDisplay();
}

function calculateResult() {
    if (currentInput !== '' && previousInput !== '' && operator !== '') {
        let result = eval(previousInput + operator + currentInput);
        currentInput = result.toString();
        operator = '';
        previousInput = '';
        updateDisplay();
    }
}

function updateDisplay() {
    display.value = currentInput;
}