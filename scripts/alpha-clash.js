// function play(){
//     // step-1: hide the home screen, to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);

//     // step-2: show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList);
// }


// function handleKeyboardButtonPress(){
//     console.log('button presed');
// }
// // Captured keyboard key press
// document.addEventListener('keyup', handleKeyboardButtonPress);

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player Pressed', playerPressed);

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    // cheak matched or not,  right or wrong key press
    if(playerPressed === expectedAlphabet){
        console.log('to get a point');
        // update score
        // 1. get the current score
        const currentScoreElement = document.getElementById('current-score');

        // 2. increase the score by 1
        // 3. show the updated score

        // start a new round
        console.log('you have preesed correctly', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed. you lost a life');
    }
}


document.addEventListener('keyup', handleKeyboardKeyUpEvent);




function continueGame(){
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet);
    
    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);

}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}