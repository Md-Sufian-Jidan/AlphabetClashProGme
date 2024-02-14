// function play(){
//     //step-1 : hide the home screen. to hide the screen add the class hidden to the home section.
//     const homeSection = document.getElementById('home');
//     // console.log(homeSection.classList);
//     homeSection.classList.add('hidden');
//     //show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection);
// }


function handleKeyboardButton(event) {
    const playerPressed = event.key;
    console.log('player pressed',playerPressed);
    // console.log('player pressed = ',playerPressed);

    // stop the game if pressed esc
    if(playerPressed === 'Escape'){
        gameOver()
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // check matched or not 
    if (playerPressed === expectedAlphabet) {
        // console.log('you get a point');
        const currentScore = getTextElementValueById('current-score');
        const updatedScore  = currentScore + 1;
        console.log(updatedScore);
        setTextElementValueById('current-score',updatedScore);
        // ---------------------
        //updated score:
        //step-1 get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore)
        // //step-2 increase the score by 1 
        // const newScore = currentScore + 1;

        // step-3 show the updated score
        // currentScoreElement.innerText = newScore;
        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('you missed, you lost a life');
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life',updatedLife);
        if(updatedLife === 0){
            gameOver();
        }
        // //step-1:get the current life number 
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // //step-2:reduce the life by 1
        // const newLife = currentLife - 1;

        // //step-3:show the updated life
        // currentLifeElement.innerText = newLife
    }
}
document.addEventListener('keyup', handleKeyboardButton);
// capture keyboard key press
function continueGame() {
    //step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet : ', alphabet);

    //set randomly generated alphabet to the screen
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    //set background color
    setBackgroundColorById(alphabet);
}

function play() {
    // hide every thing show only the playground
    hideElementById('home');
    hideElementById('final-score');
    showElementId('play-ground');

    //reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score',0);
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementId('final-score');

    //update final score
    // 1. get the final score 
    const lastScore = getTextElementValueById('current-score');
    console.log('your final score is = ',lastScore);
    setTextElementValueById('last-score',lastScore);

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementValueById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}