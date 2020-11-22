const {calculateTotalDeckPrice} = require('../editDeck/index');
const {
  createHTMLContainers,
  setAttributesToContainers,
  insertDataIntoContainers

} = require('./printAuxFunctions');
const apiCaller = require("./apiCaller");
let decks = [];

const defaultDeckImg = "../../../assets/images/defaultDeckCardImg.jpg";
const userDecks = apiCaller
  .getDecks("5f945616c3ca8d2a0001cebd")
  .then((response) => {
    decks = response;
    printDecks(decks);
    return decks;
  });

const printDeck = (deck) => {
  const cardDeck = document.createElement("div");
  const containers = createHTMLContainers();
  setAttributesToContainers(containers, deck, cardDeck);
  insertDataIntoContainers(containers, cardDeck);
  return cardDeck;
};

const printDecks = (decks) => {
  const myDecksList = document.querySelector(".myDecks_list");
  let cardDeck;
  decks.forEach((deck) => {
    cardDeck = printDeck(deck);
    myDecksList.appendChild(cardDeck);
  });
};



const deleteDeck = (event)=>{
  const deckId = event.target.id;
  apiCaller.deleteDeck(deckId);
  //TODO: refactor esta veahhh!
  location.reload();
};


const saveDeckLS = (event)=>{
const deckId = event.target.id;
const selectedDeck = decks.find((deck)=>deck._id === deckId);
localStorage.setItem('selectedDeck', JSON.stringify(selectedDeck));
};
