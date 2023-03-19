// ADD A PRIVATE FUNCTION CALLED CALCULATE
function calculate() {
    add()
    subtract()
    multiply()
    divide()
}
calculate()

// ADD FOUR PUBLIC FUNCTIONS BELOW
//////////////////////////////////
// ADD FUNCTION
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
// EXPORT THE FOUR PUBLIC FUNCTIONS
export {add,subtract,multiply,divide}