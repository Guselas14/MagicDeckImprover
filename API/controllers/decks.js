const Deck = require("../models/Decks");
const User = require("../models/Users");
const { checkRepeatedCards } = require('../utils/cardMapper');
const decksController = {};

// Create Deck
decksController.create = async (req, res) => {
  let { title } = req.body;
  const user = await User.findById(req.params.userid);

  try {
    if (user) {
      const deck = await Deck.findOne({ title });
      if (deck) {
        res
          .status(409)
          .send(`You already got a deck with this title: ${title}`);
      } else {
        const newDeck = new Deck({
          title,
          userId: user._id,
          cards: [],
        });
        await newDeck.save();
        res.status(201).send(`deck ${title} created`);
      }
    } else {
      res.status(404).send("user not found");
    }
  } catch (error) {
    res.status(500).send("Server error", error);
  }
};

decksController.addCardToDeck = async (req, res) => {
  // try {
    const card = req.body;
    const deckId = req.params.deckid;
    const deck = await Deck.findById(deckId);
console.log(deck);
    if (deck) {
      if(deck.cards.length > 0 && checkRepeatedCards(card.name, deck)){
        const x = checkRepeatedCards(card.name, deck);
        x.quantity ++ ;
        await deck.save(x.quantity++);
      }
      else{
        card.quantity = 1;
        deck.cards.push(card);
        await deck.save();
      }

      // await deck.save();
      res.status(200).send({ msg: "deck updated", data: deck });
    } else {
      res.status(400).send("Couldn't update your deck");
    }
  // } catch (error) {
  //   res.status(500).send("Server error", error);
  // }
};

module.exports = decksController;
