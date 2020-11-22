const scryfallClient = require("./scryfallClient");
const {
  mockFilteredWhiteCard,
  mockSFWhiteCard,
  mockPossibleCardsWithAba,
} = require("./test-hepers/cards");
const cardUtils = require("../utils/cardUtils");
const cardsController = require("./cards");

describe("CardsController", () => {

  beforeEach(() => {
    jest.resetAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should return an array of cards of the same  white color", async () => {
    scryfallClient.getCardsByColor = jest.fn(async () => mockSFWhiteCard); 
    /* NO LOGRAMOS MOCKEAR ESTO DE NINGUNA DE ESTAS 2 MANERAS
    cardUtils.cardMapper = jest.fn().mockReturnValue(mockFilteredWhiteCard);
    jest.spyOn(cardUtils, 'cardMapper').mockReturnValue(mockFilteredWhiteCard);
     */
    const req = {
      headers: {},
      params: {
        color: "white",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnValue(()=>mockFilteredWhiteCard)
  };
    await cardsController.getCardsByColor(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({
      msg: "color serach (white) :",
      filteredCards: mockFilteredWhiteCard,
    });
  });

  test("should return an error message when scryfallClient doens't find cards", async () => {});

  test("should return a list with card names, given an autocpmplete name", async () => {});

  test("should return a card, given an exact name", () => {});
});
