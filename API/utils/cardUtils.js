const cardsEx = {
  totalCards: 4097,
  hasMoreCards: true,
  urlNextPage:
    "https://api.scryfall.com/cards/search?format=json&include_extras=false&include_multilingual=false&order=color&page=2&q=c%3Ag&unique=cards",
  cards: [
    {
      cardId: "8c72ac67-e4fb-49a1-b1e5-cd2e414bec28",
      name: "CANCER",
      lang: "en",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/8/c/8c72ac67-e4fb-49a1-b1e5-cd2e414bec28.jpg?1562802060",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/8/c/8c72ac67-e4fb-49a1-b1e5-cd2e414bec28.jpg?1562802060",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/8/c/8c72ac67-e4fb-49a1-b1e5-cd2e414bec28.jpg?1562802060",
        png:
          "https://c1.scryfall.com/file/scryfall-cards/png/front/8/c/8c72ac67-e4fb-49a1-b1e5-cd2e414bec28.png?1562802060",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/c/8c72ac67-e4fb-49a1-b1e5-cd2e414bec28.jpg?1562802060",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/c/8c72ac67-e4fb-49a1-b1e5-cd2e414bec28.jpg?1562802060",
      },
      prices: {
        usd: "0.80",
        usd_foil: null,
        eur: "0.61",
        eur_foil: null,
        tix: "0.10",
      },
    },
    {
      cardId: "73a44759-1fa4-4a96-b668-316851e8a35a",
      name: "Aboroth",
      lang: "en",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/7/3/73a44759-1fa4-4a96-b668-316851e8a35a.jpg?1601079060",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/7/3/73a44759-1fa4-4a96-b668-316851e8a35a.jpg?1601079060",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/7/3/73a44759-1fa4-4a96-b668-316851e8a35a.jpg?1601079060",
        png:
          "https://c1.scryfall.com/file/scryfall-cards/png/front/7/3/73a44759-1fa4-4a96-b668-316851e8a35a.png?1601079060",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/7/3/73a44759-1fa4-4a96-b668-316851e8a35a.jpg?1601079060",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/7/3/73a44759-1fa4-4a96-b668-316851e8a35a.jpg?1601079060",
      },
      prices: {
        usd: "0.16",
        usd_foil: null,
        eur: "0.19",
        eur_foil: null,
        tix: null,
      },
    },
  ],
};
const cardMapper = (cardsExtended) => {
  const cardsSimple = [];
  for (let card of cardsExtended.data) {
    let newCard = {
      cardId: card.id,
      name: card.name,
      lang: card.lang,
      image_uris: card.image_uris,
      prices: card.prices,
    };
    cardsSimple.push(newCard);
  }
  return {
    totalCards: cardsExtended.totalCards,
    hasMoreCards: cardsExtended.hasMoreCards,
    urlNextPage: cardsExtended.urlNextPage,
    cards: cardsSimple,
  };
};

const checkRepeatedCardsByName = (name, data) => {
  const cards = data.cards;
  const index = cards.findIndex(card => card.name === name);
  return index;
};

const checkRepeatedCardsById = (id, data) => data.cards.findIndex(card => card.cardId === id);


// console.log(checkRepeatedCards('CANCER',cardsEx));
// console.log(checkRepeatedCards('Aboroth',cardsEx));
//#region UnExported Functions

const cardFilterById = (id, currentCards) => {
  const cards = currentCards.cards;
  const selectedCard = cards.filter((card) => {
    return card.cardId === id;
  });
  return selectedCard;
};

const cardFilter = (cardsExtended) => {
  let cardsSimple = [];
  cardsExtended.filter((card) => {
    let newCard = {
      cardId: card.id,
      name: card.name,
      lang: card.lang,
      image_uris: card.image_uris,
      prices: card.prices,
    };
    cardsSimple.push(newCard);
  });
  return cardsSimple;
};


//#endregion

module.exports = { 
  cardMapper, 
  checkRepeatedCardsByName, 
  checkRepeatedCardsById, 
};
