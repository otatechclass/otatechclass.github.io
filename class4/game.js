// Our master array of Halloween words
const allWords = ["Costumes", "Monster", "Disguise", "Ghost", "Witch", "Pumpkin", "Candle", "Zombie", "Frankenstein", "October", "Scarecrow", "Pirate", "Crow", "Cat", "Broomstick", "Vampire", "Prince", "Princess", "Candy", "Werewolf", "Mask", "Spell", "Goblin", "Ghoul", "Alien", "Mummy", "Spooky", "Creepy", "Slimy", "Fangs", "Blood", "Skeleton", "Graveyard", "Party", "Screaming", "Bats", "Skull", "Wicked", "Scary"];
let selectedWord = "";
let gameOver = false;
let unscrambledCounter = 0;



function nextWord() {
  //Select a random word from the "words" array and assign it to a variable called "selectedWord";
  selectedWord = allWords[Math.floor(Math.random() * (allWords.length - 1))].toLowerCase();

  //Scramble the selectedWord and display it inside of a div
  document.getElementById("scrambledWord").innerHTML = selectedWord
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
}

//A function that gets called when the user clicks on the Check button. 
function check() {
  if (gameOver) { alert("Sorry the game is over. Refresh to play again."); return false; }

  if (selectedWord === document.getElementById("myWord").value.toLowerCase().trim()) {
    alert("YES!");
    document.getElementById("unscrambled").innerHTML += `<div>${selectedWord}</div>`;
    document.getElementById("myWord").value = "";
    unscrambledCounter++;
    nextWord();
  } else {
    alert("WRONG!");
    giveUp();
  }
}

//A function that gets called when the user clicks on the Give Up button.
function giveUp() {
  document.getElementById("myWord").value = selectedWord;
  gameOver = true;
  alert("Game Over! You unscrambled " + unscrambledCounter + " words");
}

nextWord()