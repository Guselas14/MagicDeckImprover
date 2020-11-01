const scryfallClient = require('./scryfallClient');
const { 
    whiteCardsExtended,
    whiteCardsFiltered,
    scryfallCardSearchByColorErrorMessage,
     } = require('../test-helpers/cards');
const cardUtils  = require('../utils/cardUtils');
const CardsController = require('./cards');

// mocks and spies
const scryfallSpy = {
    getCardsByColor: jest.spyOn(scryfallClient, 'getCardsByColor'),
    getPossibleCardsByName: jest.spyOn(scryfallClient, 'getPossibleCardsByName'),
    getCardByExactName: jest.spyOn(scryfallClient, 'getCardByExactName'),
};

const cardMapperSpy = {
  cardMapper: jest.spyOn(cardUtils,'cardMapper')
}

// const cardMapperMock = jest.fn();
describe('CardsController',()=>{

    beforeEach(() => {
      jest.resetAllMocks();
    });
    
    test('should return an array of cards of the same  white color', async ()=>{
    CardsController.getCardsByColor('white');
    scryfallSpy.getCardsByColor.mockResolvedValue(whiteCardsExtended);
    scryfallSpy.cardMapper.mockResolvedValue(whiteCardsFiltered);
    expect(CardsController.getCardsByColor()).resolves.toEqual(whiteCardsFiltered);
    });

    test('should return an error message when scryfallClient doens\'t find cards', async ()=>{
        scryfallSpy.getCardsByColor.mockResolvedValue(scryfallCardSearchByColorErrorMessage);
        // expect(CardsController.getCardsByColor()).resolves.toEqual({
        //     msg: "No cards found"
        // });
        expect(CardsController.getCardsByColor()).resolves.toEqual('');

    });

    test('should return a list with card names, given an autocpmplete name',()=>{

    });

    test('should return a card, given an exact name',()=>{

    });
});
