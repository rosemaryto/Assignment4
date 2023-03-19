// // IMPORT THE MODULE
// import {add} from './modules/calculator.js'
// import {subtract} from './modules/calculator.js'
// import {multiply} from './modules/calculator.js'
// import {divide} from './modules/calculator.js'

do {
// COLLECT FIRST NUMBER FROM USER
let num1 = Number(prompt('Enter 1st number.'))
// COLLECT SECOND NUMBER FROM USER
let num2 = Number(prompt('Enter 2nd number.'))
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let operationChoice = prompt('Enter operation you want to perform: add, subtract, multiply, or divide').toLowerCase()
let total = 0
//CHECK TO SEE WHAT OPERATION THEY'RE USING
switch (operationChoice) {
    case 'add':
        add()
        break;
    case 'subtract':
        subtract()
        break;
    case 'multiply':
        multiply()
        break;
    case 'divide':
        divide()
        break;  
    default:
        break;
}    
//CALL THE APPROPRIATE FUNCTION


function add() {
    total = num1 + num2
    alert(`${total}`)
}

// SUBTRACT FUNCTION
function subtract() {
    total = num1 - num2
    alert(`${total}`)
}
// MULTIPLY FUNCTION
function multiply() {
    total = num1 * num2
    alert(`${total}`)
}
// DIVIDE FUNCTION
function divide() {
    total = num1 / num2
    alert(`${total}`)
}
} while (operationChoice !== 'add' || operationChoice !== 'subtract' || operationChoice !== 'multiply' || operationChoice !== 'divide');
