/*

author:   Jason Spiller
email:    jason@jasonspiller.com
date:     3.13.18
purpose:  Logic for a Memory card matching game.

*/


var arrCards = [
  {
    rank:       "queen",
    suit:       "hearts",
    cardImage:  "assets/images/queen-of-hearts.png"
  },
  {
    rank:       "king",
    suit:       "hearts",
    cardImage:  "assets/images/king-of-hearts.png"
  },
  {
    rank:       "queen",
    suit:       "diamonds",
    cardImage:  "assets/images/queen-of-diamonds.png"
  },
  {
    rank:       "king",
    suit:       "diamonds",
    cardImage:  "assets/images/king-of-diamonds.png"
  }
],
  arrCardsInPlay = [],
  message = document.getElementById('gameMessage'),
  btnPlayAgain = document.querySelector('button')
;



var checkForMatch = function () {
  
  "use strict";
  
  if (arrCardsInPlay.length === 2) {
    
    if (arrCardsInPlay[0] === arrCardsInPlay[1]) {
      message.innerHTML = '<p>Congratulations, you found a match!</p>';
    } else {
      message.innerHTML = '<p>Sorry, try again.</p>';
    }
    
    btnPlayAgain.addEventListener('click', resetGame);
    btnPlayAgain.setAttribute('style', 'visibility:visible');
  }
};


var flipCard = function () {
  
  "use strict";

  var cardId = this.getAttribute('data-id');
  this.setAttribute('src', arrCards[cardId].cardImage);
  
  arrCardsInPlay.push(arrCards[cardId].rank);
  
  checkForMatch();
};


var createBoard = function () {
  
  "use strict";
  
  var board = document.getElementById('gameBoard');
  board.innerHTML = "";
  
  for (var i = 0; i < arrCards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'assets/images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    board.appendChild(cardElement);
  }
};


var resetGame = function () {
  arrCardsInPlay = [];
  message.innerHTML = "";
  btnPlayAgain.removeAttribute('style');
  createBoard();
};


createBoard();