/*totalCoins = 4;
totalPoints = 7;
totalLives = 2;

//  First i thought you wanted me to do this...
function addValue(amount, type){
  if type = "coins"{
    totalCoins += coins;
    console.log("You have " + totalCoins + " coins!!!");
  } else if type = "points" {
    totalPoints += points;
    console.log("You have " + totalPoints + " coins!!!");
  } else if type = "lives" {
    totalLives = lives;
    console.log("You have " + totalLives + " coins!!!");
  }
}

function coinCounter(amountOfCoins){
  console.log("Counting coins...");
  for (let i = 0; i < amountOfCoins; i++) {
    console.log(i);
  }
  console.log("You have " + i + " coins!!!");
}

addValue(3, "coins");
addValue(25, "points");
addvalue(-1, "lives");

coinCounter(13);
*/

numberList = []

function roll(numberOf, numberHeight){
  for(let i = 0; i < numberOf; i++) {
    numberList.push(Math.ceil(Math.random() * (numberHeight - 1)))
  }
}