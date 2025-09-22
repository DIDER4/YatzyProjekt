let rollButton = document.querySelector("#rollButton")

rollButton.onclick = () => {
    rollAll()
    updateDiceImages()
}


function updateDiceImages(){
    for (let i = 0; i < die; i++) {
        const dieImg = document.querySelector(`#dieImg${i + 1}`)
        dieImg.src = `Images/terning${die[i].eyes}.png`
    }
}