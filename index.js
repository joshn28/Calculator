
let display = "";
let firstNumber;
let operator;

const numberButtons = document.querySelectorAll('.numbers');
const opButtons = document.querySelectorAll('.operator');
const screen = document.querySelector('#screen');
const equalButton = document.querySelector('#equals');

equalButton.addEventListener('click', (button) => {
    display = operate(operator, firstNumber, parseFloat(display));
    firstNumber = display;
    operator = button.textContent;
    screen.textContent = display;
    display = "";
});

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        display += button.textContent;
        screen.textContent = display; 
    });
});

opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (typeof operator === 'undefined') {
            firstNumber = parseFloat(display);
            operator = button.textContent;
        } else if (display == "") {
            operator = button.textContent;
        } else {
            display = operate(operator, firstNumber, parseFloat(display));
            firstNumber = display;
            operator = button.textContent;
            screen.textContent = display;
        }
        display = "";
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