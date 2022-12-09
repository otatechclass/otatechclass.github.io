function coinCounter (coins){ 
    for (let i=1; i<= coins; i++)
    { console.log("Coin #"+i);
}
if(coins >= 50 && coins <= 100){ 
    console.log("You won!")
} else if(coins > 100){ 
    console.log("You really, 𝘳𝘦𝘢𝘭𝘭𝘺 won!")
} else{
console.log("You lost...")
}
}

coinCounter (200);