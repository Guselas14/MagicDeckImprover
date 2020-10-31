//#region IMPORTS
const Deck = require("../models/Decks");
const User = require("../models/Users");
const {
  checkRepeatedCardsByName,
  checkRepeatedCardsById,
} = require("../utils/cardUtils");
const {
  addCardToDeck,
  deleteCardFromDeck,
} = require('../utils/deckUtils');
//#endregion
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

decksController.delete = async (req, res) => {
  const deckId = req.params.deckid;
  try {
    const deck = await Deck.findByIdAndDelete(deckId);
    if (deck) {
      res.status(202).send({ msg: "Deck deleted correctly" });
    } else {
      res.status(404).send({ msg: "Deck not found" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Server error", error });
  }
};

//#region BEFORE COFEE
// Add card to deck
// decksController.addCardToDeck = async (req, res) => {
//   try {
//     const cardToAdd = req.body;
//     const deckId = req.params.deckid;
//     const userDeck = await Deck.findById(deckId);
//     if (userDeck) {
//         const cardFound = checkRepeatedCardsByName(cardToAdd.name, userDeck);
//         if (cardFound !== -1) {
//           let selectedCard = userDeck.cards[cardFound];
//           if (selectedCard.quantity <= 3) {
//             selectedCard.quantity += 1;
//             await userDeck.save();
//             res.status(200).send({ msg: "deck updated", data: userDeck });
//           } else {
//             res.status(403).send({ msg: "Cannot have more than 4 same cards" });
//           }
//         } else {
//           cardToAdd.quantity = 1;
//           userDeck.cards.push(cardToAdd);
//           await userDeck.save();
//           res.status(200).send({ msg: "deck updated", data: userDeck });
//         }
//       res.status(200).send({ msg: "deck updated (card added)", data: userDeck });
//     } else {
//       res.status(400).send("Couldn't update your deck");
//     }
//   } catch (error) {
//     res.status(500).send({ msg: "Server error", error });
//   }
// };

//AFTER COFFEE
//#endregion
decksController.addCardToDeck = async (req, res) => {
  try {
    const cardToAdd = req.body;
    const deckId = req.params.deckid;
    const userDeck = await Deck.findById(deckId);
    if (userDeck) {
      const cardFound = checkRepeatedCardsByName(cardToAdd.name, userDeck);
      const aux = addCardToDeck(cardFound, cardToAdd, userDeck);
      await userDeck.save();
      res.status(aux.errCode).send({ msg: aux.msg, data: userDeck });
    } else {
      res.status(400).send("Couldn't update your deck");
    }
  } catch (error) {
    res.status(500).send({ msg: "Server error", error });
  }
};

// Delete card from deck
decksController.deleteCardFromDeck = async (req, res) => {
  try {
    const cardToRemove = req.params.cardid;
    const deckId = req.params.deckid;
    const userDeck = await Deck.findById(deckId);
    if (userDeck) {
      const cardFound = checkRepeatedCardsById(cardToRemove, userDeck);
      const aux = deleteCardFromDeck(cardFound, userDeck);
      await userDeck.save();
      res.status(aux.errCode).send({ msg: aux.msg , userDeck});
    } else {
      res.status(400).send("Couldn't update your deck");
    }
  } catch (error) {
    res.status(500).send({ msg: "Server error", error });
  }
};

module.exports = decksController;
