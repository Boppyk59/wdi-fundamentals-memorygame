console.log ("Up and Running!");
var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

var cardsInPlay = [];

var checkForMatch = function() {
  if(cardsInPlay.length === 2){
    if (cardsInPlay[0].rank === cardsInPlay[1].rank){
       //console.log("You've found a match!");
       alert("You are a match!");
       cardsInPlay = [];
    }
    else{
      //console.log("Sorry, Charlie, try again - no match or not 2 cards!");
      alert("Wrong!  You blew it");
    }
  }
 }

 var flipCard = function() {

           var cardId = this.getAttribute('data-id', cardsInPlay);
           cardsInPlay.push(cards[cardId]);
           console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
           checkForMatch();
           this.setAttribute('src',cards[cardId].cardImage);
           console.log(cards[cardId].cardImage);

    }

var createBoard = function() {
    for (var i = 0; i < cards.length; i++) {
      var cardElement = document.createElement('img');
      cardElement.setAttribute('src','images/back.png');
      cardElement.setAttribute('data-id', i);
      cardElement.addEventListener("click", flipCard);
      document.getElementById('game-board').appendChild(cardElement);
   }
}

createBoard();
