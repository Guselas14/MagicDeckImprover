const axios = require("axios");
const uri = "http://localhost:3000";

const apiCaller = {};


apiCaller.getUserDecks = async (userId)=>{
  const aux = await axios({
    method: "get",
    url: `${uri}/api/users/${userId}/decks`,
    headers: {},
  });
  return aux;
};

apiCaller.getCardsByColor = async (color) => {
  let cards;
  let urlNextPage;
  const apiGetCardsByColor = await axios.get(
    `${uri}/api/cardsbycolor/${color}`
  );
  if (
    apiGetCardsByColor &&
    apiGetCardsByColor.data.filteredCards.cards.length > 0
  ) {
    urlNextPage = apiGetCardsByColor.data.filteredCards.urlNextPage;
    cards = apiGetCardsByColor.data.filteredCards.cards;
    return { cards, urlNextPage };
  } else {
    console.log("No cards to show!");
  }
  return apiGetCardsByColor;
};

apiCaller.newDeck = async (userId, deckTitle) => {
  const aux = await axios({
    method: "post",
    url: `${uri}/api/users/${userId}/decks`,
    headers: {},
    data: {
      title: deckTitle,
    },
  });
  return aux;
};

apiCaller.getCardsByName = async (name) => {
  const aux = await axios({
    method: "get",
    url: `${uri}/api/cardsbyname/${name}`,
    headers: {},
  });
  return aux;
};

apiCaller.getCardsByExactName = async (name) => {
  const aux = await axios({
    method: "get",
    url: `${uri}/api/cardsbyexactname?q=${name}`,
    headers: {},
  });
  return aux;
};

apiCaller.addCardToDeck = async (card) => {
  const userDeckFromLS = JSON.parse(localStorage.getItem("selectedDeck"));
  const deckId = userDeckFromLS._id;
  const aux = await axios({
    method: "put",
    url: `${uri}/api/decks/${deckId}/card`,
    headers: {},
    data: {
      cardId: card.cardId,
      name: card.name,
      lang: card.lang,
      image_uris: card.image_uris,
      prices: card.prices,
    },
  });
  return aux;
};

module.exports = apiCaller;
