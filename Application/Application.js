let die = [];

for (let index = 1; index <= 5; index++) {
  const dice = {
    eyes: index,
    hold: false,
    roll: function () {
      if (!this.hold) {
        this.eyes = Math.trunc(Math.random() * 6) + 1;
      }
    },
  };
  die.push(dice);
}

for (const element of die) {
  element.roll();
  console.log(element.eyes);
}

function upperSectionScore(eyes) {
  sum = 0;
  for (const element of die) {
    if (element.eyes === eyes) {
      sum += eyes;
    }
  }
  return sum;
}
console.log("antal 1'er: ",upperSectionScore(1));
//FUnktion

function threeOfAKind(){
    let sum = 0
    for (let index = 0; index < die.length; index++) {
        let counter = 0
        for (let index2 = index+1; index2 < die.length; index2++) {
            if(die[index].eyes == die[index2].eyes){
                counter++
                if(counter == 2){
                    sum = die[index].eyes * 3
                }
            }
        }
    }
    return sum
}

console.log(threeOfAKind())
