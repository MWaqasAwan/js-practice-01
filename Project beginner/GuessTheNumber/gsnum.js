let randomNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const previousNum = document.querySelector('.guesses');
const RemainingResult = document.querySelector('.lastResult');
const LowerORHigh = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let PrevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        let usernumber = parseInt(userinput.value);
        console.log(usernumber);
        validateGuess(usernumber);
    });
}

const validateGuess = (vg) => {
    if (vg < 1) {
        alert("Please Enter a Number 1 or more");
    } else if (isNaN(vg)) {
        alert("Please Enter Only Numbers");
    } else if (vg > 100) {
        alert("Please Enter a Number less than or equal to 100");
    } else {
        PrevGuess.push(vg);
        if (numGuess >= 10) {
            alert(`Game Over: Random Number was ${randomNum}`);
            displayGuess(vg);
            displayMessage(`Game Over: Random Number was ${randomNum}`);
            EndGame();
        } else {
            displayGuess(vg);
            checkGuess(vg);
        }
    }
}

const checkGuess = (cg) => {
    if (cg === randomNum) {
        displayMessage(`Your Guess is Rights ipt: ${randomNum}`);
        submit.setAttribute('disabled', '');
        EndGame();
    } else if (cg < randomNum) {
        displayMessage(`Your Number is Too Low`);
    } else if (cg > randomNum) {
        displayMessage(`Your Number is Too High`);
    }
}

const displayGuess = (dg) => {
    userinput.value = '';
    previousNum.innerHTML = `${dg} `;
    numGuess++;
    let remaining = 11 - numGuess;
    RemainingResult.innerHTML = `${remaining}`;
    
    // If remaining guesses are 0, disable the submit button
    if (remaining === 0) {
        alert(`Game Over: Random Number was ${randomNum}`);
        submit.setAttribute('disabled', '');
    }
}

const displayMessage = (dm) => {
    LowerORHigh.innerHTML = `<h2>${dm}</h2>`;
}

const EndGame = () => {
    userinput.value = '';
    userinput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    StartOver.appendChild(p);
    playGame = false;
    newGame();
}

const newGame = () => {
    const newgamebut = document.querySelector('#newGame');
    newgamebut.addEventListener('click', () => {
        randomNum = parseInt(Math.random() * 100 + 1);
        PrevGuess = [];
        numGuess = 1;
        RemainingResult.innerHTML = `${11 - numGuess}`;
        previousNum.innerHTML = '';
        userinput.removeAttribute('disabled');
        submit.removeAttribute('disabled'); // Re-enable the submit button
        StartOver.removeChild(p);
        playGame = true;
    });
}
