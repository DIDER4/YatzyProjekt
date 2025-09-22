const rollbtn = document.querySelector('#rollButton');

rollbtn.onclick = () => {
    rollAll()
    updateDiceImages()
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


for (let i = 0; i < die.length; i++) {
    const scoreField = document.querySelector(`#score${i + 1}s`)
    scoreField.value = upperSectionScore(i + 1)
}