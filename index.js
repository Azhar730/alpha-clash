function continuePlay(){
    const randomAlphabet = getRandomAlphabet()
    const currentAlphabet = document.getElementById('current-alphabet')
    currentAlphabet.innerText = randomAlphabet
    setBackgroundColorById(randomAlphabet)
}

function play() {
    hideElementById('play-start')
    showElementById('play-field')
    continuePlay()
}