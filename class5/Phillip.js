function coinCounter(coins){
 for (let coins=1; coins <= 11; coins++){
   console.log("coins " + coins);

  if (coins > 5 & coins < 10){
    console.log("you win")
   } else if (coins >= 10){
    console.log("you win, but more")
   } else{
    console.log ("you loose")
   }


   } 
 }

coinCounter ()