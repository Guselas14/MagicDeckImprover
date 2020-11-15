const scryfallClient = require("./scryfallClient");
const { cardMapper, cardFilterById } = require("../utils/cardUtils");

const cardsController = {};

// GET CARDS BY COLOR
cardsController.getCardsByColor = async (req, res) => {
  const color = req.params.color;
  try {
    const cards = await scryfallClient.getCardsByColor(color);
    if (cards && cards.data) {
      const filteredCards = cardMapper(cards);
      res.status(200).send({ msg: `color serach (${color}) :`, filteredCards });
    } else {
      res.status(206).send({msg:"No cards found"});
    }
  } catch (error) {
    res.status(500).send({ msg: "Server Error", error});
  }
};

cardsController.getPossibleCardsByName = async (req, res) => {
  const cardSearchName = req.params.name;
  const cards = await scryfallClient.getPossibleCardsByName(cardSearchName);
  if (cards && cards.data.length > 0) {
    res.status(200).send({
        msg: "Posible cards",
        total: cards.total_values,
        cards: cards.data,
      });
  } else {
    res.status(206).send({msg:"No cards found"});
  }
};

cardsController.getCardByExactName = async (req, res) => {
  const cardSearchName = req.query.q;
  const card = await scryfallClient.getCardByExactName(cardSearchName);
  if (card) {
    res.status(200).send({ msg: "card by exact name", card: card });
  } else {
    res.status(206).send({msg:"No cards found"});
  }
};

module.exports = cardsController;
