let computerNumber
let userNumbers = []
let attempts = 0
let maxGuesses = 10

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
    console.log(computerNumber)
}

function compareNumbers() {
    const userNumber = Number(document.querySelector('#inputBox').value)
    userNumbers.push(' '+ userNumber)

    if (attempts < maxGuesses) {
        if (computerNumber > userNumber) {
            document.querySelector('#textOutput').innerHTML = 'Your number is too low.'
            ++attempts
            document.querySelector('#attempts').innerHTML = attempts
            document.querySelector('#guesses').innerHTML = userNumbers
            document.querySelector('#inputBox').value = ''
        } else if (computerNumber < userNumber) {
            document.querySelector('#textOutput').innerHTML = 'Your number is too high.'
            ++attempts
            document.querySelector('#attempts').innerHTML = attempts
            document.querySelector('#guesses').innerHTML = userNumbers
            document.querySelector('#inputBox').value = ''
        } else {
            document.querySelector('#textOutput').innerHTML = 'Congratulations, you win!'
            ++attempts
            document.querySelector('#attempts').innerHTML = attempts
            document.querySelector('#guesses').innerHTML = userNumbers
            document.querySelector('#inputBox').value = ''
            document.querySelector('#inputBox').setAttribute('Readonly', 'Readonly')
        }
    } else {
        document.querySelector('#textOutput').innerHTML = `You Lose! The computer number was ${computerNumber}`
        document.querySelector('#inputBox').setAttribute('Readonly', 'Readonly')
        document.querySelector('#inputBox').value = ''
        document.querySelector('#guesses').innerHTML = userNumbers
    }

}