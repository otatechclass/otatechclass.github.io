function coinCounter(coins){

  for (let x=0, x<=coins, x++){
  console.log ("Coin #" + x) 
  }

  coinCounter(56);  // Note Mr. Ken - You don't need to declare a coins variable because it is already created as a function parameter.   So now when you call coinCounter(56) or coinCounter(10), etc... coins is set to the value you pass in.  Great job btw! 

  if (50 < coins < 100) {
    console.log (I Won)
  } else if (100 < coins) {
    console.log (I Really, Really Won)
  } else {
    console.log (I Lost)
  }
}

/*
Rosemary - Almost there! Only a couple things left:
 - Look at line 7 above. You are calling the function from within itself. :) 
 - Your FOR loop is malformed. Check out https://www.w3schools.com/js/js_loop_for.asp and keep an eye on , vs ;
 - The values in your console.log statements are not strings.  String are encolsed in quotes. What you have above at line 10 for example are two undeclared variables I and Won :) 
*/