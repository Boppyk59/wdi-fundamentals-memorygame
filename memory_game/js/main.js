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
  if(cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You've found a match!");
  }
  else{
    console.log("Sorry, Charlie, try again");
  }
};

var flipCard = function() {
this.getAttribute("cardId","data-id");
cardsInPlay.push(cards[cardId].rank);
console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
checkForMatch();
};

var createBoard = function(){
  for (var i =0; i < cards.length; i++)
  var cardElement = document.createElement('img');
  cardElement.setAttribute('src','images/back.png');
  cardElement.setAttribute('data-id',i);
  document.getElementsByTagName('cardsInPlay').addEventListener('click',flipcard);
  document.getElementsById('game-board').appendChild(cardElement);
}

createboard();
