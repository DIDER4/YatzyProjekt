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
        calculateSum()
        calculateBonus()
        calculateTotal()
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
        if(!scoreField.classList.contains('locked')){
            scoreField.value = upperSectionScore(i)
        }
    }
}

function calculatePair(){
    const scoreField = document.querySelector('#scoreOnePair')
    if(!scoreField.classList.contains('locked')){
        scoreField.value = onePairScore()
    }
}

function calculateTwoPairs(){
    const scoreField = document.querySelector('#scoreTwoPairs')
    if(!scoreField.classList.contains('locked')){
        scoreField.value = twoPairScore()
    }
}

function calculateThreeSame(){
    const scoreField = document.querySelector('#scoreThreeSame')
    if(!scoreField.classList.contains('locked')){
        scoreField.value = threeOfAKind()
    }
}

function calculateFourSame(){
    const scoreField = document.querySelector('#scoreFourSame')
    if(!scoreField.classList.contains('locked')){
        scoreField.value = fourOfAKind()
    }
}

function calculateFullHouse(){
    const scoreField = document.querySelector('#scoreFullHouse')
    if(!scoreField.classList.contains('locked')){
        scoreField.value = fullHouseScore()
    }
}

function calculateSmallStraight(){
    const scoreField = document.querySelector('#scoreSmallStraight')
    if(!scoreField.classList.contains('locked')){
        scoreField.value = smallStraightScore()
    }
}

function calculateLargeStraight(){
    const scoreField = document.querySelector('#scoreLargeStraight')
    if(!scoreField.classList.contains('locked')){
        scoreField.value = largeStraightScore()
    }
}

function calculateChance(){
    const scoreField = document.querySelector('#scoreChance')
    if(!scoreField.classList.contains('locked')){
        scoreField.value = chanceScore()
    }
}

function calculateYatzy(){
    const scoreField = document.querySelector('#scoreYatzy')
    if(!scoreField.classList.contains('locked')){
        scoreField.value = yatzyScore()
    }
}

const scoreFields = document.querySelectorAll('.score-input')

for (const element of scoreFields) {
    element.onclick = () => {
        if(!element.classList.contains('locked')){
        element.classList.add('locked')
        remainingRolls = 3
        calculateTotal()
     }
    }
}


function calculateSum(){
    const sumField = document.querySelector('#scoreSum')
    let sum = 0

    for (let i = 1; i <= 6; i++) {
        const scoreField = document.querySelector(`#score${i}s`)
        sum += Number(scoreField.value)
        console.log(scoreField.value)
    }
    sumField.value = sum
}


function calculateBonus(){
    const bonusField = document.querySelector('#scoreBonus')
    const sumField = document.querySelector('#scoreSum')

    if(sumField.value >= 63){
        bonusField.value = 50
    }else{
        bonusField.value = 0
    }
}

function calculateTotal(){
    const totalField = document.querySelector('#scoreTotal')
    const scoreFields = document.querySelectorAll('.score-input')

    let sum = 0
    for (const element of scoreFields) {
        if(element.classList.contains('locked')){
                sum += Number(element.value)
        }
    }
    totalField.value = sum
}