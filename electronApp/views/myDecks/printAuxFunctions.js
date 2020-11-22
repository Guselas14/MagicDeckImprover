const createHTMLContainers = () => {
  const cardDeckHeader = document.createElement("div");
  const cardDeckTitle = document.createElement("h4");
  const cardDeckBody = document.createElement("div");
  const cardDeckLink = document.createElement("a");
  const cardDeckImage = document.createElement("img");
  const cardDeckPrice = document.createElement("h3");
  const deckDeleteBtn = document.createElement("button");

  return {
    cardDeckHeader,
    cardDeckTitle,
    cardDeckBody,
    cardDeckLink,
    cardDeckImage,
    cardDeckPrice,
    deckDeleteBtn,
  };
};

const setAttributesToContainers = (cnts, deck, cardDeck) => {
  const totalDeckPrice = calculateTotalDeckPrice(deck);
  cardDeck.setAttribute("class", "card text-dark border-dark mb-3 mtgaCard");
  cnts.cardDeckHeader.setAttribute("class", "card-header");
  cnts.cardDeckBody.setAttribute("class", "card-body");
  cnts.cardDeckLink.setAttribute("href", "../editDeck/index.html");
  cnts.cardDeckImage.setAttribute("onclick", "saveDeckLS(event)");
  setDeckImg(cnts.cardDeckImage, deck);
  cnts.cardDeckTitle.innerText = deck.title;
  cnts.cardDeckImage.setAttribute("id", deck._id);
  cnts.cardDeckPrice.textContent = `${totalDeckPrice} €`;
  cnts.deckDeleteBtn.setAttribute("type", "button");
  cnts.deckDeleteBtn.setAttribute("class", "btn btn-danger");
  cnts.deckDeleteBtn.setAttribute("id", deck._id);
  cnts.deckDeleteBtn.setAttribute("onclick", `deleteDeck(event)`);
  cnts.deckDeleteBtn.innerText = 'DELETE';
};

const insertDataIntoContainers = (cnts, cardDeck) => {
    cardDeck.appendChild(cnts.cardDeckHeader);
    cnts.cardDeckHeader.appendChild(cnts.cardDeckTitle);
    cardDeck.appendChild(cnts.cardDeckBody);
    cnts.cardDeckBody.appendChild(cnts.cardDeckLink);
    cnts.cardDeckLink.appendChild(cnts.cardDeckImage);
    cnts.cardDeckBody.appendChild(cnts.cardDeckPrice);
    cnts.cardDeckBody.appendChild(cnts.deckDeleteBtn);
}

const setDeckImg = (nodeImg, deck) => {
    if (deck.cards.length > 0) {
      nodeImg.setAttribute("src", deck.cards[0].image_uris.art_crop);
    } else {
      nodeImg.setAttribute("src", defaultDeckImg);
    }
    nodeImg.setAttribute("alt", "default");
    nodeImg.setAttribute("class", "deck_img");
  
  };

module.exports = {
    createHTMLContainers,
    setAttributesToContainers,
    insertDataIntoContainers
}
