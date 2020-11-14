const axios = require("axios");
const uri = "http://localhost:3000";

const apiCaller = {};

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
apiCaller.getCardsByColor("white");

module.exports = apiCaller;
