const User = require("../models/Users");
const fetch = require("node-fetch");

const scryfallClient = {};

// Create  scryfallClient
scryfallClient.getCardsByColor = async (color) => {
  const whiteCards = await fetch(
    `https://api.scryfall.com/cards/search?order=color&q=c%3A${color}`
  );
  const aux = await whiteCards.json();
  if (aux.object === "list") {
    return {
      totalCards: aux.total_cards,
      hasMoreCards: aux.has_more,
      urlNextPage: aux.next_page,
      data: aux.data,
    };
  } else {
    throw aux;
  }
};

scryfallClient.getPossibleCardsByName = async (name) => {
  const posibleCards = await fetch(
    `https://api.scryfall.com/cards/autocomplete?q=${name}`
  );
  const aux = await posibleCards.json();
  if (aux.object === "catalog") {
    return {
      total_values: aux.total_values,
      data: aux.data,
    };
  } else {
    throw aux;
  }
};

scryfallClient.getCardByExactName = async (exactName) => {
  const card = await fetch(
    `https://api.scryfall.com/cards/named?exact=${exactName}`
  );
  const aux = await card.json();
  if (aux.object === "card") {
    return {
      cardId: aux.id,
      name: aux.name,
      lang: aux.lang,
      image_uris: aux.image_uris,
      prices: aux.prices,
    };
  } else {
    throw aux;
  }
};

module.exports = scryfallClient;
