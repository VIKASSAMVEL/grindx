const display = document.getElementById('display');
let currentInput = '';
let operator = null;
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        display.value = currentInput;
    }
}

function setOperator(op) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (operator) {
        firstOperand = operate(firstOperand, parseFloat(currentInput), operator);
    }
    operator = op;
    currentInput = '';
    display.value = firstOperand;
}

function calculate() {
    if (firstOperand === null || operator === null || currentInput === '') return;
    const secondOperand = parseFloat(currentInput);
    const result = operate(firstOperand, secondOperand, operator);
    display.value = result;
    currentInput = result.toString();
    firstOperand = null;
    operator = null;
}

function clearDisplay() {
    currentInput = '';
    operator = null;
    firstOperand = null;
    display.value = '';
}

function operate(a, b, op) {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                alert("Cannot divide by zero!");
                return '';
            }
            return a / b;
        default:
            return b;
    }
}

document.querySelectorAll('.calculator button').forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (button.classList.contains('clear')) {
            clearDisplay();
        } else if (button.classList.contains('operator')) {
            setOperator(buttonText);
        } else if (button.classList.contains('equals')) {
            calculate();
        } else if (buttonText === '.') {
            appendDecimal();
        } else {
            appendNumber(buttonText);
        }
    });
});