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
    const cardToAdd = req.body;
    const deckId = req.params.deckid;
    const userDeck = await Deck.findById(deckId);
    if (userDeck) {
      if(userDeck.cards.length > 0 && checkRepeatedCards(cardToAdd.name, userDeck)){
        console.log('OSOSO:', cardToAdd.name);
        for(let cardName of userDeck.cards){
          console.log('ververv', cardName.name, userDeck.cards);
          if(cardName.name === userDeck.cards.name){
            console.log('CardNamemem',cardName.name);

          }
        }
        // userDeck.cards.forEach((card)=>{console.log(card.name});
        // userDeck.cards.forEach((card2)=>{ 
        //   let selectedCard = card2.name == userDeck.name;
        //   console.log('Bastian', selectedCard);

        // });
        
        // const repeatedCards = checkRepeatedCards(userDeck.name, userDeck);
        // const card = repeatedCards;
        // userDeck.cards[card].quantity ++ ;
        // await userDeck.save();
      }
      else{
        repeatedCards.quantity = 1;
        userDeck.cards.push(card);
        await userDeck.save();
      }

      // await deck.save();
      res.status(200).send({ msg: "deck updated", data: userDeck });
    } else {
      res.status(400).send("Couldn't update your deck");
    }
  // } catch (error) {
  //   res.status(500).send("Server error", error);
  // }
};

module.exports = decksController;
