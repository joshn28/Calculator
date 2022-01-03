
let equation = "";
let firstNumber;
let operator;

const numberButtons = document.querySelectorAll('.numbers');
const opButtons = document.querySelectorAll('.operator');
const screen = document.querySelector('#screen');
const equalButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');
const decimalButton = document.querySelector('#decimal');

decimalButton.addEventListener('click', (button) => {
    if (screen.textContent.indexOf('.') === -1) {
        equation += button.target.textContent;
        screen.textContent += button.target.textContent;
    }
});

clearButton.addEventListener('click', () => {
    firstNumber = undefined;
    operator = undefined;
    equation = "";
    screen.textContent = "0";
});

equalButton.addEventListener('click', () => {
    if (firstNumber && operator && equation) {
        if (operator == "/" && parseFloat(equation) == 0) {
            alert("Can't divide by zero.")
            firstNumber = undefined;
            operator = undefined;
            screen.textContent = "0";
        } else {
            equation = operate(operator, firstNumber, parseFloat(equation));
            firstNumber = equation;
            if (parseFloat(equation) === parseInt(equation)) {
                screen.textContent = equation.toString().slice(0, 13);
            } else {
                screen.textContent = parseFloat(equation.toFixed(10).slice(0, 13));
            }
        }
    }
});

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        equation += button.textContent;
        if (equation[0] === '.') {
            equation = '0' + equation;
        }
        screen.textContent = equation.toString().slice(0, 13); 
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
            if (parseFloat(equation) === 0) {
                alert("Can't divide by zero.")
                firstNumber = undefined;
                operator = undefined;
                screen.textContent = "0";
            } else {
                equation = operate(operator, firstNumber, parseFloat(equation));
                firstNumber = equation;
                operator = button.textContent;
                if (parseFloat(equation) === parseInt(equation)) {
                    screen.textContent = equation.toString().slice(0, 13);
                } else {
                    screen.textContent = parseFloat(equation.toFixed(10).slice(0, 13));
                }
            }
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