function hideElementById(elementId) {
    const hideById = document.getElementById(elementId)
    hideById.classList.add('hidden')
    return hideById;
}
function showElementById(elementId) {
    const showById = document.getElementById(elementId)
    showById.classList.remove('hidden')
    return showById;
}
 function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400')
    return element;
 }

function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('')
    const random = Math.random()*25
    const index = Math.round(random)
    const alphabet = alphabets[index]
    return alphabet;
}