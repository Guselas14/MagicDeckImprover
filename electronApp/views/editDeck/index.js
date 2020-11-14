const apiCaller = require("./apiCaller");

const userDeck = JSON.parse(localStorage.getItem("selectedDeck"));
const backBtn = document.getElementById('editDeck_back_btn');
//#region  PAGINATION
let cards = [];
let totalCardsVailable = []; //174
const cardsToShow = 8;
let indexOfCardsShown = 0;
let pageNumber = 0;

const nextPageButton = document.getElementById("rightArrowContainer");
const previousPageButton = document.getElementById("leftArrowContainer");

const isLastPage = () =>
  pageNumber === Math.floor(cards[0].length / cardsToShow) + 1;

const cardsResultsContainer = document.querySelector(".editDeck_cards_results");

const emptyResults = () => {
  cardsResultsContainer.innerHTML = "";
};

const handleNextPageButtonVisiblity = () => {
  if (isLastPage()) {
    if (!nextPageButton.classList.contains("hide-arrow")) {
      nextPageButton.classList.add("hide-arrow");
    }
  } else {
    if (nextPageButton.classList.contains("hide-arrow")) {
      nextPageButton.classList.remove("hide-arrow");
    }
  }
};

const handlePreviousPageButtonVisiblity = () => {
  if (pageNumber === 1) {
    if (!previousPageButton.classList.contains("hide-arrow")) {
      previousPageButton.classList.add("hide-arrow");
    }
  } else {
    if (previousPageButton.classList.contains("hide-arrow")) {
      previousPageButton.classList.remove("hide-arrow");
    }
  }
};

const updateView = () => {
  emptyResults();
  handleNextPageButtonVisiblity();
  handlePreviousPageButtonVisiblity();
};

const getCards = () => {
  return apiCaller
    .getCardsByColor("white")
    .then((response) => {
      console.log("Response", response);
      cards.push(response.cards);
      //   printCardsFound(cards);
      return response.cards;
    })
    .catch((error) => {
      console.log(error);
    });
};

const printCard = (card) => {
  const cardImg = document.createElement("img");
  cardImg.setAttribute("src", card.image_uris.border_crop);
  cardImg.setAttribute("class", "editDeck_card_found mtgaCard");
  return cardImg;
};

const getCardAmount = () =>
  isLastPage() ? cards[0].length - 1 : cardsToShow * pageNumber;

const goToNextPage = () => {
  pageNumber += 1;
  updateView();
  const maximum = getCardAmount();
  for (let i = indexOfCardsShown; i < maximum; i += 1) {
    const cardsFound = printCard(cards[0][i]);
    cardsResultsContainer.appendChild(cardsFound);
  }

  indexOfCardsShown = maximum;
  return indexOfCardsShown;
};

const goToPreviousPage = () => {
  pageNumber -= 1;
  updateView();
  indexOfCardsShown = cardsToShow * pageNumber;
  for (let i = indexOfCardsShown - cardsToShow; i < indexOfCardsShown; i += 1) {
    const cardsFound = printCard(cards[0][i]);
    cardsResultsContainer.appendChild(cardsFound);
  }
  return indexOfCardsShown;
};
//#endregion
//#region USERDECK PRINT CARDS

const printUserDeckContent = (card) => {
  const userDeckContent = document.getElementById("userDeckContent");
  const row = document.createElement("div");
  row.setAttribute("class", "row user_card_content");
  const div1 = document.createElement("div");
  div1.setAttribute("class", "col-md-2");
  const div2 = document.createElement("div");
  div2.setAttribute("class", "col-md-5");
  const div3 = document.createElement("div");
  div3.setAttribute("class", "col-md-2");
  const div4 = document.createElement("div");
  div4.setAttribute("class", "col-md-3");

  const spanCardAmount = document.createElement("span");
  const spanCardName = document.createElement("span");
  const spanCardPrice = document.createElement("span");
  const plusIcon = document.createElement("i");
  const minusIcon = document.createElement("i");

  spanCardAmount.setAttribute("class", "cardAmount");
  spanCardName.setAttribute("class", "cardName");
  spanCardPrice.setAttribute("class", "cardPrice");
  plusIcon.setAttribute("class", "fas fa-plus-square amount-icon");
  minusIcon.setAttribute("class", "fas fa-minus-square amount-icon");

  userDeckContent.appendChild(row);
  row.appendChild(div1);
  div1.appendChild(spanCardAmount);
  row.appendChild(div2);
  div2.appendChild(spanCardName);
  row.appendChild(div3);
  div3.appendChild(spanCardPrice);
  row.appendChild(div4);
  div4.appendChild(plusIcon);
  div4.appendChild(minusIcon);

  spanCardAmount.innerText = `${card.quantity} X`;
  spanCardName.innerText = card.name;
  spanCardPrice.innerText = card.prices.eur;
};

const printUserDeckTitle = () => {
  const deckTitle = document.getElementById("deckTitle");
  deckTitle.value = userDeck.title;
};
const printUserDeckCardsNumber = () => {
  const deckNumberCards = document.getElementById("deckNumberCards");
  console.log({ "userDeck.cards": userDeck.cards });
  const totalNumberCardsDeck = userDeck.cards.length;
  deckNumberCards.innerText = `DECK (${totalNumberCardsDeck}/60)`;
};
const printUserDeckSideBoardNumber = () => {
  const deckSideBoardCards = document.getElementById("deckSideBoardCards");
  deckSideBoardCards.innerText = `SIDEBOARD (15/15)`;
};
const printUserDeckCards = () => {
  userDeck.cards.forEach((card) => {
    printUserDeckContent(card);
  });
};
const printUserDeckPrice = () => {
  const deckPrice = document.getElementById("deckPrice");
  const deckPriceCalculated = calculateTotalDeckPrice();
  console.log("deckPriceCalculated", deckPriceCalculated);
  deckPrice.innerText = `DECK PRICE: ${deckPriceCalculated}€`;
};

//#endregion

//#region Aux
const calculateTotalDeckPrice = () => {
  let deckPrice = 0;
  userDeck.cards.forEach((card) => {
    deckPrice += Number(card.prices.eur);
  });
  return deckPrice;
};

const clearLs = ()=>localStorage.clear();

//#endregion


const haveDeckInLS = () => localStorage.getItem("selectedDeck");
const printUserDeck = () => {
  printUserDeckTitle();
  printUserDeckCardsNumber();
  printUserDeckSideBoardNumber();
  printUserDeckCards();
  printUserDeckPrice();
};

(async () => {
  const haveWeDeck = haveDeckInLS();
  console.log(haveWeDeck);
  if (haveWeDeck) {
    printUserDeck();
  }
  await getCards();
  nextPageButton.addEventListener("click", goToNextPage);
  previousPageButton.addEventListener("click", goToPreviousPage);
  backBtn.addEventListener('click', clearLs);
  goToNextPage();
})();
// getCards();
