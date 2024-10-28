function play() {
    hideElementById('play-start')
    hideElementById('total-score-field')
    showElementById('play-field')
    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)
    continuePlay()
}

function continuePlay() {
    const randomAlphabet = getRandomAlphabet()
    const currentAlphabet = document.getElementById('current-alphabet')
    currentAlphabet.innerText = randomAlphabet
    setBackgroundColorById(randomAlphabet)
}

document.addEventListener('keyup', handleKeyboard)
function handleKeyboard(e) {
    const playerPressed = e.key
    if(playerPressed==='Escape'){
        gameOver()
    }
    const currentAlphabet = document.getElementById('current-alphabet').innerText
    const expectedAlphabet = currentAlphabet.toLowerCase()
    if (playerPressed === expectedAlphabet) {
        const currentScore = getTextElementValueById('current-score')
        const newScore = currentScore + 1
        setTextElementValueById('current-score', newScore)
        removeBackgroundColorById(expectedAlphabet)
        continuePlay()
    } else {
        const currentLife = getTextElementValueById('current-life')
        const newLife = currentLife - 1
        setTextElementValueById('current-life', newLife)
        if (currentLife === 0) {
            gameOver()
        }
    }

}
function gameOver(params) {
    hideElementById('play-field')
    showElementById('total-score-field')
    const currentScore = getTextElementValueById('current-score')
    setTextElementValueById('final-score', currentScore)
    const currentAlphabet = getElementTextById('current-alphabet')
    removeBackgroundColorById(currentAlphabet)
}