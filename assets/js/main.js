/*

author:   Jason Spiller
email:    jason@jasonspiller.com
date:     3.13.18
purpose:  Logic for a Memory card matching game.

*/

var arrCards = ["queen", "king", "queen", "king"],
  arrCardsInPlay = [];

var checkForMatch = function () {
  
  if (arrCardsInPlay.length === 2) {

    if (arrCardsInPlay[0] === arrCardsInPlay[1]) {
      alert("You found a match!");
    } else {
      alert("Sorry, try again.");
    }
  }
};

var flipCard = function (cardId) {
  
  "use strict";

  console.log("User flipped over a " + arrCards[cardId] + ".");
  
  arrCardsInPlay.push(arrCards[cardId]); 
  
  checkForMatch();
};

flipCard(0);
flipCard(2);
