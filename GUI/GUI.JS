const rollbtn = document.querySelector('#rollButton');

rollbtn.onclick = () => {
    rollAll()
    updateDiceImages()
    calculateUppersection()
    calculatePair()
    calculateTwoPairs()
}


function updateDiceImages(){
    for (let i = 0; i < die.length; i++) {
        const dieImg = document.querySelector(`#dieImg${i + 1}`)
        dieImg.src = `Images/terning${die[i].eyes}.png`
    }
}

//hold funktionalitet
for (let i = 0; i < die.length; i++) {
    const dieDiv = document.querySelector(`#die${i + 1}`);
    dieDiv.onclick = () => {
        die[i].hold = !die[i].hold
        dieDiv.classList.toggle("held", die[i].hold)
    }
}

function calculateUppersection(){
for (let i = 1; i <= 6; i++) {
    const scoreField = document.querySelector(`#score${i}s`)
    scoreField.value = upperSectionScore(i)
}
}

function calculatePair(){
    const scoreField = document.querySelector('#scoreOnePair')
    scoreField.value = onePairScore()
}

function calculateTwoPairs(){
    const scoreField = document.querySelector('#scoreTwoPairs')
    scoreField.value = twoPairScore()
}
