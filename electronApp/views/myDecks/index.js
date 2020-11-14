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
  cardDeck.setAttribute("class", "card text-dark border-dark mb-3 mtgaCard");
  const cardDeckHeader = document.createElement("div");
  cardDeckHeader.setAttribute("class", "card-header");
  const cardDeckTitle = document.createElement("h4");
  cardDeckTitle.innerText = deck.title;
  const cardDeckBody = document.createElement("div");
  cardDeckBody.setAttribute("class", "card-body");
  const cardDeckLink = document.createElement("a");
  cardDeckLink.setAttribute("href", "../editDeck/index.html");
  const cardDeckImage = document.createElement("img");
  setDeckImg(cardDeckImage,deck);
  const cardDeckPrice = document.createElement("h3");
  cardDeckPrice.textContent = "600$";
  const deckDeleteBtn = document.createElement("button");
  deckDeleteBtn.setAttribute("type", "button");
  deckDeleteBtn.setAttribute("class", "btn btn-danger");
  deckDeleteBtn.innerText = "DELETE";
  cardDeck.appendChild(cardDeckHeader);
  cardDeckHeader.appendChild(cardDeckTitle);
  cardDeck.appendChild(cardDeckBody);
  cardDeckBody.appendChild(cardDeckLink);
  cardDeckLink.appendChild(cardDeckImage);
  cardDeckBody.appendChild(cardDeckPrice);
  cardDeckBody.appendChild(deckDeleteBtn);
  return cardDeck;
};

const printDecks = (decks) => {
  console.log("decks", decks);
  const myDecksList = document.querySelector(".myDecks_list");
  let cardDeck;
  decks.forEach((deck) => {
    cardDeck = printDeck(deck);
    myDecksList.appendChild(cardDeck);
  });
};

const setDeckImg = (nodeImg, deck) => {
  if (deck.cards.length > 0) {
    nodeImg.setAttribute("src", deck.cards[0].image_uris.art_crop);
  } else {
    nodeImg.setAttribute("src", defaultDeckImg);
  }
  nodeImg.setAttribute("alt", "default");
  nodeImg.setAttribute("class", "deck_img");

};
