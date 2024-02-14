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

function handleKeyboardButton(event){
    const playerPressed = event.key;
    console.log('player pressed = ',playerPressed);

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabet);

    // check matched or not 
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
    }
    else{
        console.log('you missed, you lost a life');l
    }
}
document.addEventListener('keyup',handleKeyboardButton);
// capture keyboard key press
function continueGame(){
    //step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet : ', alphabet);

    //set randomly generated alphabet to the screen
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    //set background color
    setBackgroundById(alphabet);
}



function play (){
    hideElementById('home');
    showElementId('play-ground');
    continueGame()
}