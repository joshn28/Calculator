
let equation = "";
let firstNumber;
let operator;

const numberButtons = document.querySelectorAll('.numbers');
const opButtons = document.querySelectorAll('.operator');
const screen = document.querySelector('#screen');
const equalButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');

clearButton.addEventListener('click', (button) => {
    firstNumber = undefined;
    operator = undefined;
    equation = "";
    screen.textContent = "0";
});

equalButton.addEventListener('click', (button) => {
    if (firstNumber && operator) {
        equation = operate(operator, firstNumber, parseFloat(equation));
        firstNumber = equation;
        operator = button.textContent;
        screen.textContent = equation.toFixed(12);
        equation = "";
    }
});

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        equation += button.textContent;
        screen.textContent = equation; 
    });
});

opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (typeof operator === 'undefined') {
            firstNumber = parseFloat(equation);
            operator = button.textContent;
        } else if (equation == "") {
            operator = button.textContent;
        } else {
            equation = operate(operator, firstNumber, parseFloat(equation));
            firstNumber = equation;
            operator = button.textContent;
            screen.textContent = equation.toFixed(12);
        }
        equation = "";
    });
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(op, a, b) {
    let result;
    switch (op) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
    }
    return result;
}