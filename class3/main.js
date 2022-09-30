/*
// ---- Data type 1: NUMBERS -------
  1 //Int
  1.5 //decimal


// STRINGS: Single
"Happy Birthday"
'Happy Birthday'
`Happy Birthday`


// STRINGS
"Happy"
"Birthday"
"Happy 16th Birthday"

//BOOL
true
false
!true


//ARRAY

["H", "a", "p", "p", "y"]

["H", 16, true, false, "Y"]

//OBJECT
{
  "firstName":"Ken",
  "age":45,
  "favColors":["red","yellow","grey"],
  "isCool":false
}



let name = "Ken";
let age = 45;
let favColors = ["red", "grey"];

let me = {
  "firstName": "Ken",
  "age": 45
};
*/


let username = "britt";
let login = false;

if (username == "ken" || username == "lillian" || username == "britt" || username == "elaena") {
  login = true;
}

if (username == "britt" && login) {
  console.log("Hey!")
}

