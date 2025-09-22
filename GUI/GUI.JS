const rollbtn = document.querySelector('#rollButton');
let remainingRolls = 3;

rollbtn.onclick = () => {
    if (remainingRolls > 0) {
        remainingRolls--;
        rollAll()
        updateDiceImages()
        calculateUppersection()
        calculatePair()
        calculateTwoPairs()
        calculateThreeSame()
        calculateFourSame()
        calculateFullHouse()
        calculateSmallStraight()
        calculateLargeStraight()
        calculateChance()
        calculateYatzy()
    }
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

function calculateThreeSame(){
    const scoreField = document.querySelector('#scoreThreeSame')
    scoreField.value = threeOfAKind()
}

function calculateFourSame(){
    const scoreField = document.querySelector('#scoreFourSame')
    scoreField.value = fourOfAKind()
}

function calculateFullHouse(){
    const scoreField = document.querySelector('#scoreFullHouse')
    scoreField.value = fullHouseScore()
}

function calculateSmallStraight(){
    const scoreField = document.querySelector('#scoreSmallStraight')
    if(!scoreField.classList.contains('locked')){
        scoreField.value = smallStraightScore()
    }
}

function calculateLargeStraight(){
    const scoreField = document.querySelector('#scoreLargeStraight')
    scoreField.value = largeStraightScore()
}

function calculateChance(){
    const scoreField = document.querySelector('#scoreChance')
    scoreField.value = chanceScore()
}

function calculateYatzy(){
    const scoreField = document.querySelector('#scoreYatzy')
    scoreField.value = yatzyScore()
}

const scoreFields = document.querySelectorAll('.score-input')

for (const element of scoreFields) {
    element.onclick = () => {
        if(!element.classList.contains('locked')){
        element.classList.add('locked')
     }
    }
}

