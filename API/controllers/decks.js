const Deck = require("../models/Decks");
const User = require("../models/Users");

const decksController = {};

// Create User
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

decksController.addCardToDeck = async (req,res) => {
    
};

module.exports = decksController;
