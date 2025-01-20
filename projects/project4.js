let randomNumber = (parseInt(Math.random()*100 + 1))

const submit = document.querySelector("#submit")
const userInput = document.querySelector("#guessField")
const guesses = document.querySelector(".guesses")
const LastResult = document.querySelector(".lastResult")
const lowOrHigh = document.querySelector(".lowOrHigh")
const Result = document.querySelector(".result")

const p = document.createElement('p')


let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validatedGuess(guess)
    })
}

function validatedGuess(guess){

 if(isNaN(guess)){
    alert('please enter a valid number')
}
else if(guess<1){
alert('please enter a number more than 1')
}
else if(guess>100){
    alert('please enter a number less than 100')
    }
else{
    prevGuess.push(guess)
    if(numGuess>10){
displayGuess(guess)
displayResult(`Game Over. Random number was ${randomNumber}`)
endGame()
    }

    else {
       displayGuess(guess) 
       checkGuess(guess)
    }

}

}


function checkGuess(guess){
if(guess===randomNumber){
    displayResult(`You guessed it right`)
    endGame()
}
else if(guess<randomNumber){
    displayResult(`Number is too low`)
}
else if(guess>randomNumber){
    displayResult(`Number is too high`)
}
}

function displayGuess(guess){
userInput.value = ""
guesses.innerHTML += `  ${guess},    `
numGuess++

LastResult.innerHTML = `${12- numGuess}`
}

function displayResult(message){
lowOrHigh.innerHTML = `<h2>${message}</h2>`

}
function endGame(){
userInput.value = ""
userInput.setAttribute("disabled", "")
 const button = p.classList.add('button')
p.innerHTML = `<h2 id="newGame">Start new Game</h2>`

Result.appendChild(p)
playGame= false
newGame();
}

function newGame(){
const newGame = document.querySelector("#newGame")
newGame.addEventListener("click", function(e){
   randomNumber = (parseInt(Math.random()*100 + 1))
prevGuess=[]
numGuess=1
guesses.innerHTML=""
LastResult.innerHTML=`${12-numGuess}  `
userInput.removeAttribute("disabled")
Result.removeChild(p)

playGame=true;
})

}
