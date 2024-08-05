import wordList from "../src/wordList";
import hangman0 from '../src/img/hangman-0.svg';
import hangman1 from '../src/img/hangman-1.svg';
import hangman2 from '../src/img/hangman-2.svg';
import hangman3 from '../src/img/hangman-3.svg';
import hangman4 from '../src/img/hangman-4.svg';
import hangman5 from '../src/img/hangman-5.svg';
import hangman6 from '../src/img/hangman-6.svg';
import sadFace from '../src/img/lost.gif';
import happyFace from '../src/img/victory.gif';


const hangmanIndex = [hangman0, hangman1, hangman2, hangman3, hangman4, hangman5, hangman6];




const keyboard = document.querySelector('.keyboard')
const gameDisplay = document.querySelector('.game__display')
const gameHint = document.querySelector(".game__hint b")
const gameGuesses = document.querySelector('.game__guesses b')
const hangman = document.querySelector('.hangman__img')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const correctWord = document.querySelector('.modal__content p b')
const face = document.querySelector('.modal__face')




let currentWord, wrongGuesses = 0, correctGuess;
const maxGuesses = 6


// get random word from word list, and set style
const getRandomWord = () => {
    const random = Math.floor(Math.random() * wordList.length)
    let {word, hint} = wordList[random]
    word = word.toLowerCase()
    currentWord = word
    console.log(currentWord);
    gameHint.innerText = hint
    gameDisplay.innerHTML = word.split('').map(() => `<li class="game__letter"></li>`).join('')

     correctGuess = new Array([...currentWord].length).fill('');

}

// creating keyboard
for (let i = 97; i <= 122; i++) {
    const btn = document.createElement("button");
    btn.innerText = String.fromCharCode(i)
    keyboard.appendChild(btn)
}

// init game
const init = function (btn, clickedLetter) {
    const wordsArray = [...currentWord]
    if (currentWord.includes(clickedLetter)) {
        wordsArray.forEach((letter, index) => {
            if (letter === clickedLetter) {
                correctGuess[index] = clickedLetter
                gameDisplay.querySelectorAll('li')[index].innerText = letter
                gameDisplay.querySelectorAll('li')[index].classList.add('guessed')
                btn.disabled = true
                wordFound()
            }
        })

    } else {
        btn.classList.add('game__letter--wrong')
        btn.disabled = true
        wrongGuesses++
        hangman.src = hangmanIndex[wrongGuesses]
          hangman.classList.add('hangman--swing');
          hangman.addEventListener('animationend', () => {
              hangman.classList.remove('hangman--swing');
          }, { once: true });
        gameGuesses.innerText = `${wrongGuesses} / ${maxGuesses}`
        if (wrongGuesses === maxGuesses) return gameOver()
        
    }
}


// add events to all buttons on keyboard using event delegation
keyboard.addEventListener('click', function(event) {
    if (!event.target instanceof HTMLButtonElement || event.target.classList.contains('keyboard')) return
   init(event.target, event.target.textContent)
})

getRandomWord()

// game over conditions
const gameOver = function () {
    gameEndingScreen()
    face.src = sadFace
    modal.querySelector('h4').innerText = 'Game Over!'
}
 
// reset game
const reset = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    getRandomWord()
    const btns = keyboard.querySelectorAll('button')
    btns.forEach(btn => btn.classList.contains('game__letter--wrong') ? btn.classList.remove('game__letter--wrong') : true)
    btns.forEach(btn => btn.disabled ? btn.disabled = false : true)
    hangman.src = hangman0
    wrongGuesses = 0 
    gameGuesses.innerText = `${wrongGuesses} / ${maxGuesses}`
    face.src = ''
    
}

// game winnner
const gameWinner = function () {
    face.src = happyFace
    modal.querySelector('h4').innerText = 'Victory!'
}

// listen for play again
modal.addEventListener('click',  function(e) {
    if (!modal.classList.contains('hidden') && e.target instanceof HTMLButtonElement) reset()
})

// word found condition
const wordFound = function () {
    if (!correctGuess.includes(''))  {
        gameWinner()
        gameEndingScreen()
    }
}

// game ended screen condition
const gameEndingScreen = function () {
    correctWord.innerText = currentWord
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
