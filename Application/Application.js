
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

//Antallet af de forskellige øjne
function upperSectionScore(eyes) {
  sum = 0;
  for (const element of die) {
    if (element.eyes === eyes) {
      sum++;
    }
  }
  return sum;
}
console.log("Amount of 1's ", upperSectionScore(1));

//Et par
function onePairScore() {
  for (let index = 0; index < die.length; index++) {
    dieOne = die[index].eyes;
    for (let index2 = index + 1; index2 < die.length; index2++) {
      if (dieOne === die[index2].eyes) {
        return dieOne * 2;
      }
    }
  }
  return 0;
}
console.log("A pair: ", onePairScore());

//To par
function twoPairScore() {
  let firstPair = onePairScore();
  if (firstPair === 0) { //forskel mellem 2 og 3 lighedstegn??
    return 0;
  }
  let seconddPair;
  for (let index = 0; index < die.length; index++) {
    if (die[index].eyes != firstPair / 2) {
      for (let index2 = index + 1; index2 < die.length; index2++) {
        if (die[index].eyes == die[index2].eyes) {
          seconddPair = die[index2].eyes * 2
          return firstPair + seconddPair;
        }
      }
    }
  }
  return 0;
}
console.log("Two pairs: ", twoPairScore());

//Three of a kind
function threeOfAKind() {
  let sum = 0
  for (let index = 0; index < die.length; index++) {
    let counter = 0
    for (let index2 = index + 1; index2 < die.length; index2++) {
      if (die[index].eyes == die[index2].eyes) {
        counter++
        if (counter == 2) {
          sum = die[index].eyes * 3
        }
      }
    }
  }
  return sum
}
console.log("Three of a kind: ", threeOfAKind());


//Full house
function fullHouseScore() {
  let threeOfTheSame = threeOfAKind();

  if (threeOfTheSame == 0) {
    return 0;
  }

  for (let index = 0; index < die.length; index++) {
    dieOne = die[index].eyes;
    for (let index2 = index + 1; index2 < die.length; index2++) {
      if (dieOne === die[index2].eyes && dieOne != (threeOfTheSame/3)) {
        return threeOfTheSame + (dieOne * 2);
      }
    }
  }
  return 0;
}
console.log("Fullhouse: ", fullHouseScore());


