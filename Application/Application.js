let die = []

for(let index = 1; index <= 5; index++){
    const dice = {eyes: index,
        roll: function(){
            this.eyes = Math.trunc(Math.random() * 6) + 1
        }
    }
    die.push(dice)
}

for (const element of die) {
    element.roll()
    console.log(element.eyes);
}