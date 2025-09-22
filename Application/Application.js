<<<<<<< HEAD
function rollDice() {
    return Math.trunc(Math.random() * 6) + 1;
=======
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
console.log("antal 1'er: ", upperSectionScore(1));

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
console.log("Et par: ", onePairScore());

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
console.log("To par: ", twoPairScore());

//Full house
function fullHouseScore(){
  //threeOfTheSame = threeOfAKind
  twoOfTheSame = twoPairScore;

  if(threeOfTheSame == 0 || twoOfTheSame == 0){
    return 0;
  }

  if(threeOfTheSame / 3 ==  twoOfTheSame / 2 ){
    return 0;
  }

  return threeOfTheSame + twoOfTheSame;
>>>>>>> ab7c905f6c16aa53eca9dcc5000eb4823faee62c
}