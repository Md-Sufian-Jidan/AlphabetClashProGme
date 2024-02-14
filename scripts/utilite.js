// console.log('connected');
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementId(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#FFA500]');
}


function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet
}

// function getARandomAlphabet(){
//     //get or create an alphabet array
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('')
//     // console.log(alphabets);

//     // get a random index between 0 - 25
//     const randomNumber = Math.random()*25;
//     const index = Math.round(randomNumber);
    
//     const alphabet = alphabets[index];
//     console.log(alphabet, index);
//     return alphabet;
// }