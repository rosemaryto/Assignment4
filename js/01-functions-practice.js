//STEP 1
function halfNumber(num1) {
    let num2 = num1 / 2
    console.log(`Half of ${num1} is ${num2}`)
}
halfNumber(20)

//STEP 2
function squareNumber(num3) {
    let num4 = num3 * num3
    console.log(`The result of squaring ${num3} is ${num4}`)
}
squareNumber(6)

//STEP 3
function percentOf(num5, num6) {
    let percent = num5 / num6 * 100
    percent = Math.ceil(percent)
    console.log(`${num5} is ${percent}% of ${num6}`)
}
percentOf(2,6)

//STEP 4
function findModulus(num7, num8) {
    let mod = num7 % num8
    console.log(`${mod} is the modulus of ${num7} and ${num8}`)
}
findModulus(10,1)
//STEP 5