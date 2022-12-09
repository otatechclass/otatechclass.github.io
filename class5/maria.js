function coinCounter(coins){
    for(let i=1; i<= coins; i++){
        console.log("Coin #"+i);
    }
    if(coins >= 50 && coins <= 100){
      console.log("You won!")
    } else if(coins > 100){
      console.log("You really really won!")
    } else{
      console.log("You lost.")
    }
}

coinCounter(101);
