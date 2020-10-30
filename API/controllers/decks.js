const Deck = require("../models/Decks");
const User = require("../models/Users");
const { checkRepeatedCardsByName, checkRepeatedCardsById } = require("../utils/cardMapper");
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
// Delete Deck

decksController.delete = async (req, res) =>{
  const deckId = req.params.deckid;
  try {
    const deck =  await Deck.findByIdAndDelete(deckId);
    if(deck){
      res.status(202).send({msg: 'Deck deleted correctly'})
    }
    else{
      res.status(404).send({msg: 'Deck not found'})
    }
  } catch (error) {
    res.status(500).send({msg: "Server error", error});
  }
};
// Add card to deck
decksController.addCardToDeck = async (req, res) => {
  try {
    const cardToAdd = req.body;
    const deckId = req.params.deckid;
    const userDeck = await Deck.findById(deckId);
    if (userDeck) {
      if (userDeck.cards.length > 0) {
        const cardFound = checkRepeatedCardsByName(cardToAdd.name, userDeck);
        console.log("cardFound", cardFound);
        if (cardFound !== -1) {
          let selectedCard = userDeck.cards[cardFound];
          console.log("TENGO UNA CARTA REPETIDA");
          if (selectedCard.quantity <= 3) {
            selectedCard.quantity += 1;
            await userDeck.save();
            res.status(200).send({ msg: "deck updated", data: userDeck });
          } else {
            res.status(403).send({ msg: "Cannot have more than 4 same cards" });
          }
        } else {
          console.log("NO DEBO ENTRAR!");
          cardToAdd.quantity = 1;
          userDeck.cards.push(cardToAdd);
          await userDeck.save();
          res.status(200).send({ msg: "deck updated", data: userDeck });
        }
      } else {
        console.log("ENTOR SOLO 1 VEZ");
        cardToAdd.quantity = 1;
        userDeck.cards.push(cardToAdd);
        await userDeck.save();
      }
      res.status(200).send({ msg: "deck updated (card added)", data: userDeck });
    } else {
      res.status(400).send("Couldn't update your deck");
    }
  } catch (error) {
    res.status(500).send({msg: "Server error", error});
  }
};


// Delete card to deck
decksController.deleteCardFromDeck = async (req, res) => {
  try {
    const cardRemove = req.params.cardid;
    const deckId = req.params.deckid;
    const userDeck = await Deck.findById(deckId);
    if (userDeck) {
      if (userDeck.cards.length > 0) {
        const cardFound = checkRepeatedCardsById(cardRemove, userDeck);
        console.log("cardFound", cardFound);
        if (cardFound !== -1) {
          let selectedCard = userDeck.cards[cardFound];
          console.log("TENGO UNA CARTA REPETIDA");
            selectedCard.quantity -= 1;
            await userDeck.save();
            res.status(200).send({ msg: "deck updated (card deleted)", data: userDeck });
        } else {
          console.log("NO DEBO ENTRAR!");
          cardToAdd.quantity = 1;
          userDeck.cards.push(cardToAdd);
          await userDeck.save();
          res.status(200).send({ msg: "deck updated", data: userDeck });
        }
      } else {
        console.log("ENTOR SOLO 1 VEZ");
        cardToAdd.quantity = 1;
        userDeck.cards.push(cardToAdd);
        await userDeck.save();
      }
      res.status(200).send({ msg: "deck updated", data: userDeck });
    } else {
      res.status(400).send("Couldn't update your deck");
    }
  } catch (error) {
    res.status(500).send({msg: "Server error", error});
  }
};

module.exports = decksController;
