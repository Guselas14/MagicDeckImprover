const scryfallClient = require('./scryfallClient');
const {cardMapper, cardFilterById} = require('../utils/cardMapper');
// GET CARDS BY COLOR

const cardsController = {};

cardsController.getCardsByColor = async (req, res) => {
    const color = req.params.color;
    const cards = await scryfallClient.getCardsByColor(color);

    if (cards) {
      const filteredCards = cardMapper(cards);
      res.status(200).send(filteredCards);
    } else {
      res.status(204).send("No hemos encontrado cartas");
    }
};


module.exports = cardsController;