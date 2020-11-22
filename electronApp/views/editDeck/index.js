const {
  printUserDeck,
  printUserDeckCardsNumber,
  printDefaultView,
  printCardFound
} = require("./printAuxFunctions");
const {
  goToNextPage,
  goToPreviousPage,
  emptyResults
} = require("./pagination");

const apiCaller = require("./apiCaller");

const userDeck = JSON.parse(localStorage.getItem("selectedDeck"));
const backBtn = document.getElementById("editDeck_back_btn");
const deckTitleInput = document.querySelector("#deckTitle");
const nextPageButton = document.querySelector("#rightArrowContainer");
const previousPageButton = document.querySelector("#leftArrowContainer");
const cardSearcherInput = document.querySelector("#cardSearcher");
const whiteFilterBtn = document.querySelector("#whiteFilterBtn");
const blueFilterBtn = document.querySelector("#blueFilterBtn");
const blackFilterBtn = document.querySelector("#blackFilterBtn");
const redFilterBtn = document.querySelector("#redFilterBtn");
const greenFilterBtn = document.querySelector("#greenFilterBtn");

let cards = [];

//#region DECKS
const createNewDeck = async () => {
  const deckTitle = deckTitleInput.value;
  const userId = "5f945616c3ca8d2a0001cebd";
  const deck = await apiCaller.newDeck(userId, deckTitle);
  localStorage.setItem("selectedDeck", JSON.stringify(deck.data.data));
};
//#endregion
//#region CARDS
const getCards = () => {
  return apiCaller
    .getCardsByColor("white")
    .then((response) => {
      cards.push(response.cards);
      return response.cards;
    })
    .catch((error) => {
      console.log(error);
    });
};

const getFilteredCardsByColor = (color) => {
  emptyResults();
  return apiCaller
    .getCardsByColor(color)
    .then((response) => {
      cards = [];
      cards.push(response.cards);
      goToNextPage();
      return response.cards;
    })
    .catch((error) => {
      console.log(error);
    });
};

const getPossibleCardsByName = () => {
  const name = cardSearcherInput.value;
  return apiCaller
    .getCardsByName(name)
    .then((response) => {
      setAutocompletePosibleCardsList(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const setAutocompletePosibleCardsList = (dataList) => {
  const autoCompleteOptions = document.querySelector("#autocomplete");
  dataList.data.cards.forEach((data) => {
    const option = document.createElement("option");
    option.value = data;
    autoCompleteOptions.appendChild(option);
  });
};

const getCardByName = () => {
  const name = cardSearcherInput.value;
  return apiCaller
    .getCardsByExactName(name)
    .then((response) => {
      console.log('response', response.data.card);
      emptyResults();
      cards = [];
      cards.push(response.data.card);
      printCardFound(cards[0]);
    })
    .catch((error) => {
      console.log(error);
    });
};
//#endregion
//#region Aux Functions
 const calculateTotalDeckPrice = (userDeck) => {
  let deckPrice = 0;
  userDeck.cards.forEach((card) => {
    deckPrice += Number(card.prices.eur * card.quantity);
  });
  return deckPrice.toFixed(2);
};

function debouncer(delay, fn) {
  let temporizador;
  return function (...args) {
    if (temporizador) {
      clearTimeout(temporizador);
    }
    temporizador = setTimeout(() => {
      fn(...args);
      temporizador = null;
    }, delay);
  };
}

const clearLs = () => localStorage.clear();
const haveDeckInLS = () => localStorage.getItem("selectedDeck");

//#endregion


(async () => {
  const haveWeDeck = haveDeckInLS();
  if (haveWeDeck) {
    printUserDeck();
  }
  await getCards();
  nextPageButton.addEventListener("click", goToNextPage);
  previousPageButton.addEventListener("click", goToPreviousPage);
  backBtn.addEventListener("click", clearLs);
  cardSearcherInput.addEventListener(
    "keyup",
    debouncer(300, getPossibleCardsByName)
  );
  cardSearcherInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      getCardByName();
      e.preventDefault();
    }
  });

  whiteFilterBtn.addEventListener("click", () =>
    getFilteredCardsByColor("white")
  );
  blueFilterBtn.addEventListener("click", () =>
    getFilteredCardsByColor("blue")
  );
  blackFilterBtn.addEventListener("click", () =>
    getFilteredCardsByColor("black")
  );
  redFilterBtn.addEventListener("click", () => getFilteredCardsByColor("red"));
  greenFilterBtn.addEventListener("click", () =>
    getFilteredCardsByColor("green")
  );
  deckTitleInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      createNewDeck();
      printUserDeckCardsNumber();
      printDefaultView();
    }
  });

  goToNextPage();
})();


module.exports = {
  calculateTotalDeckPrice,
}