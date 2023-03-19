let userChoice = prompt('Choose rock, paper, or scissors').toLowerCase()
let computerChoice = Math.random() * 100

function compChoice (params) {
    if (computerChoice > 1 && computerChoice < 50) {
        computerChoice = 'rock'
    } else if (computerChoice > 50 && computerChoice < 70) {
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissors'
    }
}


function winners (params) {
    compChoice()
    if (userChoice == 'rock') {
        if (computerChoice == 'scissors') {
            alert(`Rock destroys scissors. You win!`)
        } else if (computerChoice == 'paper') {
            alert(`Paper covers rock. You lose!`)
        } else {
            alert(`It's a tie!`)
        }
    } 
    else if ( userChoice == 'paper') {
        if (computerChoice == 'scissors') {
            alert(`Scissors cut paper. You lose!`)
        } else if (computerChoice == 'rock') {
            alert(`Paper covers rock. You win!`)
        } else {
            alert(`It's a tie!`)
        }
    } 
    else if (userChoice == 'scissors') {
        if (computerChoice == 'rock') {
            alert(`Rock destroys scissors. You lose!`)
        } else if (computerChoice == 'paper') {
            alert(`Scissors cut paper. You win!`)
        } else {
            alert(`It's a tie!`)
        }
    } 
    else {
        alert(`Please enter a valid choice.`)
    } 
}
winners()


