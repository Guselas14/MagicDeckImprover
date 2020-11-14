const scryfallClient = require('./scryfallClient');
const when = require('../node_modules/jest-when');
// import { when } from 'jest-when'

const { 
    whiteCardsExtended,
    whiteCardsFiltered,
    scryfallCardSearchByColorErrorMessage,
    mockRequest,
     } = require('../test-helpers/cards');
const cardUtils  = require('../utils/cardUtils');
const CardsController = require('./cards');

// mocks and spies
const scryfallSpy = {
    getCardsByColor: jest.spyOn(scryfallClient, 'getCardsByColor'),
    getPossibleCardsByName: jest.spyOn(scryfallClient, 'getPossibleCardsByName'),
    getCardByExactName: jest.spyOn(scryfallClient, 'getCardByExactName'),
};
// const scryfallMock = jest.mock('scryfallClient');
// const mocked = (fn) =>  jest.Mock(fn);

// const scryfallMocked = mocked(
//   scryfallClient.getPossibleCardsByName,
// );

// const cardMapperSpy = {
//   cardMapper: jest.spyOn(cardUtils,'cardMapper')
// }

const possibleCardsWithAba = {
  "object": "catalog",
  "total_values": 20,
  "data": [
      "Abandon Hope",
      "Abattoir Ghoul",
      "Abandon Reason",
      "Abandoned Outpost",
      "Abandoned Sarcophagus",
      "Amugaba",
      "Ali Baba",
      "Aura Barbs",
      "Anaba Shaman",
      "Anaba Ancestor",
      "Alabaster Wall",
      "Alabaster Mage",
      "Ana Battlemage",
      "Al-abara's Carpet",
      "Alabaster Kirin",
      "Alabaster Leech",
      "Anaba Bodyguard",
      "Araba Mothrider",
      "Alabaster Dragon",
      "Alabaster Potion"
  ]
}

// const cardMapperMock = jest.fn();
describe('CardsController',()=>{

    beforeEach(() => {
      jest.resetAllMocks();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });
    
    test('should return an array of cards of the same  white color', async ()=>{
      const mockResponse ={
        status: (code)=>{
            expect(code).toEqual(200);
            return this;
        },
        send: (obj)=>{
            expect(obj.msg).toEqual('color serach (white) :');
            expect(obj.filteredCards).toEqual(whiteCardsFiltered);
        }
   }
    // scryfallSpy.getCardsByColor.mockResolvedValue(whiteCardsExtended);
    // scryfallSpy.cardMapper.mockResolvedValue(whiteCardsFiltered);
    expect(CardsController.getCardsByColor(mockRequest, mockResponse)).resolves.toEqual(mockResponse);
    });

    test('should return an error message when scryfallClient doens\'t find cards', async ()=>{
        scryfallSpy.getCardsByColor.mockResolvedValue(scryfallCardSearchByColorErrorMessage);
        // expect(CardsController.getCardsByColor()).resolves.toEqual({
        //     msg: "No cards found"
        // });
        expect(CardsController.getCardsByColor()).resolves.toEqual('');

    });

    test('should return a list with card names, given an autocpmplete name',async()=>{
      // when(scryfallMocked.getPossibleCardsByName)
      // .whenCalledWith('aba')
      // .mockResolvedValue(possibleCardsWithAba);
      const mock = jest.fn().mockImplementation(() => possibleCardsWithAba);
      // console.log('PEPE', mock(await scryfallClient.getPossibleCardsByName('aba')));
      expect(mock(await scryfallClient.getPossibleCardsByName('aba'))).toEqual(possibleCardsWithAba);

      // const possibleCardsResponse = jest.fn().mockImplementation(() => scryfallClient.getPossibleCardsByName);
      // console.log(jest.isMockFunction(possibleCardsResponse));
      // console.log('PEPE:',await scryfallClient.getPossibleCardsByName('aba'));
      // expect(await scryfallSpy.getPossibleCardsByName('aba')).toEqual(possibleCardsResponse);
    });

    test('should return a card, given an exact name',()=>{

    });
});
