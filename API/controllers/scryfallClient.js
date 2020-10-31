const User = require("../models/Users");
const fetch = require("node-fetch");

const  scryfallClient = {};

// Create  scryfallClient
scryfallClient.getCardsByColor = async (color) =>{
    const whiteCards = await fetch(`https://api.scryfall.com/cards/search?order=color&q=c%3A${color}`)
    .then(response => response.json())
    .catch(error => console.log(error));
    return {
        totalCards: whiteCards.total_cards,
        hasMoreCards: whiteCards.has_more,
        urlNextPage: whiteCards.next_page,
        data: whiteCards.data
    };
};

scryfallClient.getPossibleCardsByName = async (name) =>{
    const posibleCards = await fetch(`https://api.scryfall.com/cards/autocomplete?q=${name}`)
    .then(response => response.json())
    .catch(error => console.log(error));
    return {
        total_values: posibleCards.total_values,
        data: posibleCards.data,
    };
};

scryfallClient.getCardByExactName = async (exactName) =>{
    const card = await fetch(`https://api.scryfall.com/cards/named?exact=${exactName}`)
    .then(response => response.json())
    .catch(error => console.log(error));
    console.log('cardFromScry:', card);
    return {
        cardId: card.id,
        name: card.name,
        lang: card.lang,
        image_uris: card.image_uris,
        prices: card.prices
    };
};

module.exports =  scryfallClient;
