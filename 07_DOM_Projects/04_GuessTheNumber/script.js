let randomNumber = parseInt(Math.random()*100 + 1)

const submit = document.querySelector('.submit');
const userInput = document.querySelector('.GuessField');
const guessSlot = document.querySelector('.Guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.resultPara')
const p = document.createElement('p');

let preGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click',function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('provide a valid number')
    }else if (guess<1) {
        alert('provide a valid number')
    }else if (guess>100) {
        alert('provide a valid number')
    }else {
        preGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`game is over Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`you guess the right number`)
        endGame()
    }else if (guess < randomNumber){
        displayMessage(`you are too low`)
    }else if(guess > randomNumber){
        displayMessage(`you are too high`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess},`
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 +1)
        preGuess = []
        numGuess = 1
        guessSlot.innerHTML += ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disable')
        startOver.removeChild(p)
        playGame = true
    })
}

function endGame() {
    userInput.value ='';
    userInput.setAttribute('disable','')
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'>click to Start a new Game</h2>`
    startOver.appendChild(p)
    playGame= false
    newGame()
}