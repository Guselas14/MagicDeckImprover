//#region  PAGINATION
let totalCardsVailable = []; //174
const cardsToShow = 8;
let indexOfCardsShown = 0;
let pageNumber = 0;

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

const printCard = (card) => {
  const cardImg = document.createElement("img");
  cardImg.setAttribute("src", card.image_uris.border_crop);
  cardImg.setAttribute("class", "editDeck_card_found mtgaCard");
  cardImg.setAttribute('id', card.name);
  cardImg.setAttribute('draggable', 'true');
  cardImg.setAttribute('ondragstart',"drag(event)");
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

module.exports = {
    goToNextPage,
    goToPreviousPage,
    emptyResults
}