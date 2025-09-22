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

function rollAll(){
    for (const element of die) {
        if(element.hold == false){
            element.roll()
            console.log(element.eyes)
        }
    }
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
      sum += element.eyes;
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

function fourOfAKind() {
  let sum = 0
  for (let index = 0; index < die.length; index++) {
    let counter = 0
    for (let index2 = index + 1; index2 < die.length; index2++) {
      if (die[index].eyes == die[index2].eyes) {
        counter++
        if (counter == 3) {
          sum = die[index].eyes * 4
        }
      }
    }
  }
  return sum
}
console.log("Four of a kind: ", fourOfAKind());


//Full house
function fullHouseScore() {
  let threeOfTheSame = threeOfAKind();

  if (threeOfTheSame == 0) {
    return 0;
  }

  for (let index = 0; index < die.length; index++) {
    dieOne = die[index].eyes;
    for (let index2 = index + 1; index2 < die.length; index2++) {
      if (dieOne === die[index2].eyes && dieOne != (threeOfTheSame / 3)) {
        return threeOfTheSame + (dieOne * 2);
      }
    }
  }
  return 0;
}
console.log("Fullhouse: ", fullHouseScore());

function smallStraightScore() {
  // Create array with 6 positions (index 0-5) representing dice values 1-6
  // Initialize all positions to 0 (meaning no dice with that value yet)
  let oneOfEach = [0, 0, 0, 0, 0, 0];
  // Loop through all dice in the hand
  for (let index = 0; index < die.length; index++) {
    // For each die, put its value in the correct position
    // If die shows 3, put 3 in position 2 (3-1=2)
    // If die shows 6, put 6 in position 5 (6-1=5)
    oneOfEach[die[index].eyes - 1] = die[index].eyes;
  }
  // Check for ONLY 1,2,3,4,5 (small straight)
  // Check if positions 0,1,2,3,4 all have values (dice values 1,2,3,4,5)
  if (oneOfEach[0] !== 0 && oneOfEach[1] !== 0 && oneOfEach[2] !== 0 &&
    oneOfEach[3] !== 0 && oneOfEach[4] !== 0) {
    // Found small straight 1,2,3,4,5! Return 15 points
    return 15;
  }
  // No small straight found, return 0 points
  return 0;
}
console.log("Small straight: ", smallStraightScore());

function largeStraightScore() {
  // Create array with 6 positions (index 0-5) representing dice values 1-6
  // Initialize all positions to 0 (meaning no dice with that value yet)
  let oneOfEach = [0, 0, 0, 0, 0, 0];

  // Loop through all dice in the hand
  for (let index = 0; index < die.length; index++) {
    // For each die, put its value in the correct position
    // If die shows 3, put 3 in position 2 (3-1=2)
    // If die shows 6, put 6 in position 5 (6-1=5)
    oneOfEach[die[index].eyes - 1] = die[index].eyes;
  }
  // Check for ONLY 2,3,4,5,6 (large straight)
  // Check if positions 1,2,3,4,5 all have values (dice values 2,3,4,5,6)
  if (oneOfEach[1] !== 0 && oneOfEach[2] !== 0 && oneOfEach[3] !== 0 &&
    oneOfEach[4] !== 0 && oneOfEach[5] !== 0) {
    // Found large straight 2,3,4,5,6! Return 20 points
    return 20;
  }
  // No large straight found, return 0 points
  return 0;
}
console.log("Large straight: ", largeStraightScore());

function chanceScore() {
  let sum = 0;
  for (let index = 0; index < die.length; index++) {
    sum += die[index].eyes;
  }
  return sum;
}
console.log("Chance: ", chanceScore());


function yatzyScore() {
  for (let index = 0; index < die.length; index++) {
    let counter = 0;

    for (let index2 = index; index2 < die.length; index2++) {
      if (die[index].eyes == die[index2].eyes) {
        counter++;
      }
      if (counter >= 5) {
        return 50;
      }

    }
    return 0;
  }

}
console.log("YAZTY!!!!: ", yatzyScore());
