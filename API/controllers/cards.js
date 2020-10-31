const scryfallClient = require('./scryfallClient');
const {cardMapper, cardFilterById} = require('../utils/cardUtils');

const cardsController = {};

// GET CARDS BY COLOR
cardsController.getCardsByColor = async (req, res) => {
    const color = req.params.color;
    const cards = await scryfallClient.getCardsByColor(color);

    if (cards) {
      const filteredCards = cardMapper(cards);
      res.status(200).send({msg:`color serach (${color}) :`, filteredCards});
    } else {
      res.status(204).send("No cards found");
    }
};

cardsController.getPossibleCardsByName = async (req,res)=> {
  const cardSearchName = req.params.name;
  const cards = await scryfallClient.getPossibleCardsByName(cardSearchName);
  if (cards) {
    res.status(200).send({msg:'Posible cards',total:cards.total_values, cards: cards.data});
  } else {
    res.status(204).send("No cards found");
  }
};

cardsController.getCardByExactName = async (req,res)=> {
  const cardSearchName = req.params.name;
  const card = await scryfallClient.getCardByExactName(cardSearchName);
  if (card) {
    console.log('cardCONTROLLER:', card);
    res.status(200).send({msg:'card by exact name', card: card});
  } else {
    res.status(204).send("No cards found");
  }
};

module.exports = cardsController;