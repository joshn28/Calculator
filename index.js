
let equation = "";
let firstNumber;
let operator;

const numberButtons = document.querySelectorAll('.numbers');
const opButtons = document.querySelectorAll('.operator');
const screen = document.querySelector('#screen');
const equalButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');
const decimalButton = document.querySelector('#decimal');
const deleteButton = document.querySelector('#delete');

deleteButton.addEventListener('click', ()=> {
    if (screen.textContent.length == 1) {
        equation = "";
        screen.textContent = "";
    } else if (equation.length > 0) {
        equation = equation.slice(0, equation.length-1)
        screen.textContent = equation;
    }
});

decimalButton.addEventListener('click', (button) => {
    if (screen.textContent.indexOf('.') === -1 && screen.textContent.length > 0) {
        equation += button.target.textContent;
        screen.textContent += button.target.textContent;
    }
});

clearButton.addEventListener('click', () => {
    firstNumber = undefined;
    operator = undefined;
    equation = "";
    screen.textContent = "";
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
            operator = undefined;
            if (parseFloat(equation) === parseInt(equation)) {
                screen.textContent = equation.toString().slice(0, 13);
            } else {
                screen.textContent = parseFloat(equation.toFixed(10).slice(0, 13)).toString();
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
        screen.textContent = equation.slice(0, 13); 
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
                console.log(equation)
                equation = operate(operator, firstNumber, parseFloat(equation));
                console.log(firstNumber, operator, equation)
                firstNumber = equation;
                operator = button.textContent;
                if (parseFloat(equation) === parseInt(equation)) {
                    screen.textContent = equation.toString().slice(0, 13);
                } else {
                    screen.textContent = parseFloat(equation.toFixed(10)).toString().slice(0, 13);
                }
            }
        }
        equation = "";
    });
});

// document.addEventListener('keypress', (e) => {
//     switch (e.key) {
//         case "1":
//         case "2":
//         case "3":
//         case "4":
//         case "5":
//         case "6":
//         case "7":
//         case "8":
//         case "9":
//             equation += e.key;
//             if (equation[0] === '.') {
//                 equation = '0' + equation;
//             }
//             screen.textContent = equation.slice(0, 13);
//             break;
//         case ".":
//             if (screen.textContent.indexOf('.') === -1 && screen.textContent.length > 0) {
//                 equation += e.key;
//                 screen.textContent += e.key;
//             }
//             break;
//         case "Enter":
//             if (firstNumber && operator && equation) {
//                 if (operator == "/" && parseFloat(equation) == 0) {
//                     alert("Can't divide by zero.")
//                     firstNumber = undefined;
//                     operator = undefined;
//                     screen.textContent = "0";
//                 } else {
//                     equation = operate(operator, firstNumber, parseFloat(equation));
//                     firstNumber = equation;
//                     if (parseFloat(equation) === parseInt(equation)) {
//                         screen.textContent = equation.slice(0, 13);
//                     } else {
//                         screen.textContent = parseFloat(equation.toFixed(10).slice(0, 13));
//                     }
//                 }
//             }
//     };
// })

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