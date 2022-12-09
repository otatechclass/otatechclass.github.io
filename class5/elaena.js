function coinCounter(con){
for (let coinCounter= 0; coinCounter<con;coinCounter++) {
console.log("Coin #" + coinCounter)  //@Elaena - the variable being displayed here should be the value of "coinCounter" not "con".  The value of con does not change in the loop whereas coinCounter does.  -- you can check it out here: https://jsbin.com/navocasoca/edit?js,console
} 
if (con >= 50 &&con < 100){
  console.log ("You Won!!")
}
else if (con>=100){
  console.log ("You Won Big!!!")
}
else{
  counsole.log ("You lost. Better luck next time...")
}
}
coinCounter(101);
  
