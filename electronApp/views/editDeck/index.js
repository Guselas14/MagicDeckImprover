const apiCaller = require("./apiCaller");

let cards = [];
let totalCardsVailable = []; //174
const cardsToShow = 8;
let indexOfCardsShown = 0;
let pageNumber = 0;

const getCards = () => {
  const cardsFound = apiCaller
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
  return cardsFound;
};
const printCard = (card) => {
  const cardImg = document.createElement("img");
  cardImg.setAttribute("src", card.image_uris.border_crop);
  cardImg.setAttribute("class", "editDeck_card_found mtgaCard");
  return cardImg;
};

const printCardsFound = () => {
  const cardsResultsContainer = document.querySelector(
    ".editDeck_cards_results"
  );
  const leftArrow = document.querySelector(".fa-arrow-left");
  leftArrow.classList.add("hide-arrow");
  let i;

  for (i = indexOfCardsShown; i < cardsToShow; i++) {
    let cardsFound = printCard(cards[0][i]);
    cardsResultsContainer.appendChild(cardsFound);
  }
  pageNumber = 1;
  indexOfCardsShown = i ;
  console.log({indexOfCardsShown});
  return indexOfCardsShown;
  //   cards.cards.forEach((card) => {
  //     cardsFound = printCard(card);
  //     cardsResultsContainer.appendChild(cardsFound);
  //   });
};

const nextCardPage = () => {
  const cardsResultsContainer = document.querySelector(
    ".editDeck_cards_results"
  );

  cardsResultsContainer.innerHTML = "";
  indexOfCardsShown += 1;
  let cardsToShow = indexOfCardsShown + 7;
  document
  .getElementById("leftArrowContainer")
  .classList.remove("hide-arrow");

  for (
    indexOfCardsShown;
    indexOfCardsShown <= cardsToShow;
    indexOfCardsShown++
  ) {
    cardsFound = printCard(cards[0][indexOfCardsShown]);
    cardsResultsContainer.appendChild(cardsFound);
  }
  pageNumber++;
  indexOfCardsShown -= 1;
  console.log({indexOfCardsShown});
};

const previousCardPage = (e) => {
  const cardsResultsContainer = document.querySelector(
    ".editDeck_cards_results"
  );
  const leftArrow = document.querySelector(".fa-arrow-left");
  indexOfCardsShown -= 14;

  cardsResultsContainer.innerHTML = "";
  // let cardsToShow = indexOfCardsShown + 8;
  for (
    indexOfCardsShown;
    indexOfCardsShown <= indexOfCardsShown + cardsToShow;
    indexOfCardsShown++
  ) {
    if (indexOfCardsShown >= 8) {
      document
        .getElementById("leftArrowContainer")
        .classList.remove("hide-arrow");
    }
    if(indexOfCardsShown === 8){
      document
      .getElementById("leftArrowContainer")
      .classList.add("hide-arrow");
    }
    cardsFound = printCard(cards[0][indexOfCardsShown]);
    cardsResultsContainer.appendChild(cardsFound);
  }
  indexOfCardsShown -= 1;
  pageNumber--;
};

(async () => {
  await getCards();
  printCardsFound();
})();
// getCards();
