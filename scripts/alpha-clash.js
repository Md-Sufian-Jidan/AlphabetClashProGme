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

function continueGame(){
    //step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet : ', alphabet);

    //set randomly generated alphabet to the screen
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    //set background color
    addBackgroundById(alphabet);
}



function play (){
    hideElementById('home');
    showElementId('play-ground');
    continueGame()
}