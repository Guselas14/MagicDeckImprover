const  {checkRepeatedCardsById} = require('../utils/cardUtils');

const addCardToDeck = (index, cardToAdd, deck)=>{
    let msg;
    let errCode;
    if (index !== -1) {
      let selectedCard = deck.cards[index];
      if (selectedCard.quantity <= 3) {
        selectedCard.quantity += 1;
        msg = 'deck updated';
        errCode = 200;
      }
      else{
        msg = 'Cannot have more than 4 same cards';
        errCode = 403;
      }
    }
    else{
      cardToAdd.quantity = 1;
      deck.cards.push(cardToAdd);
      msg = 'deck updated';
      errCode = 200;
    }
    return {msg, errCode};
  }
  
  const deleteCardFromDeck = (index, deck)=>{
    let msg;
    let errCode;
    if (deck.cards.length > 0) {
      if (index !== -1) {
        let selectedCard = deck.cards[index];
        if (selectedCard.quantity >= 2 && selectedCard.quantity <= 4) {
          selectedCard.quantity -= 1;
        } else {
          deck.cards.splice(index, 1);
        }
        msg = 'deck updated (card deleted)';
        errCode = 200;
      }else{
        msg= 'WTF ARE YOU DOING BRO, Imposible to remove that card';
        errCode = 404;
      }
    }
    else{
      msg = 'No cards to delete';
      errCode = 404;
    }
    return {msg, errCode};
  }
  

  module.exports = { 
    addCardToDeck,
    deleteCardFromDeck
  };
  