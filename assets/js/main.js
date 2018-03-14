/*

author:   Jason Spiller
email:    jason@jasonspiller.com
date:     3.13.18
purpose:  Logic for a Memory card matching game.

*/

var arrCards = ["queen", "king", "queen", "king"],
  arrCardsInPlay = [];

var strCardOne = arrCards[0],
  strCardTwo = arrCards[1];

arrCardsInPlay.push(strCardOne);
arrCardsInPlay.push(strCardTwo);

console.log("User flipped over a " + arrCardsInPlay[0] + " and a " + arrCardsInPlay[1] + ".");


if (arrCardsInPlay.length === 2) {

  if (arrCardsInPlay[0] === arrCardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
  
}
