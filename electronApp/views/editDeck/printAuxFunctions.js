//#region USERDECK PRINT CARDS
const userDeckContent = document.querySelector("#userDeckContent");
const cardsResultsContainer = document.querySelector(".editDeck_cards_results");

const createHTMLContainers = () => {
  const row = document.createElement("div");
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  const div4 = document.createElement("div");
  const spanCardAmount = document.createElement("span");
  const spanCardName = document.createElement("span");
  const spanCardPrice = document.createElement("span");
  const plusIcon = document.createElement("i");
  const minusIcon = document.createElement("i");
  return {
    row,
    div1,
    div2,
    div3,
    div4,
    spanCardAmount,
    spanCardName,
    spanCardPrice,
    plusIcon,
    minusIcon,
  };
};

const setAttributesToContainers = (cnts) => {
  cnts.row.setAttribute("class", "row user_card_content");
  cnts.div1.setAttribute("class", "col-md-2");
  cnts.div2.setAttribute("class", "col-md-5");
  cnts.div3.setAttribute("class", "col-md-2");
  cnts.div4.setAttribute("class", "col-md-3");
};

const createContainersInfo = (cnts) => {
  cnts.spanCardAmount.setAttribute("class", "cardAmount");
  cnts.spanCardName.setAttribute("class", "cardName");
  cnts.spanCardPrice.setAttribute("class", "cardPrice");
  //TODO: hacerlos funcionar
  // cnts.plusIcon.setAttribute("class", "fas fa-plus-square amount-icon");
  // cnts.minusIcon.setAttribute("class", "fas fa-minus-square amount-icon");
};

const insertDataIntoContainers = (cnts) => {
  userDeckContent.appendChild(cnts.row);
  cnts.row.appendChild(cnts.div1);
  cnts.div1.appendChild(cnts.spanCardAmount);
  cnts.row.appendChild(cnts.div2);
  cnts.div2.appendChild(cnts.spanCardName);
  cnts.row.appendChild(cnts.div3);
  cnts.div3.appendChild(cnts.spanCardPrice);
  cnts.row.appendChild(cnts.div4);
  cnts.div4.appendChild(cnts.plusIcon);
  cnts.div4.appendChild(cnts.minusIcon);
};

const setCardInfo = (cnts,card) => {
  cnts.spanCardAmount.innerText = card.quantity ? `${card.quantity} X` : '1X';
  cnts.spanCardName.innerText = card.name;
  cnts.spanCardPrice.innerText = card.prices.eur;
};

const printUserDeckContent = (card) => {
   const cnts = createHTMLContainers();
   setAttributesToContainers(cnts);
  createContainersInfo(cnts);
  insertDataIntoContainers(cnts);
  setCardInfo(cnts,card);
};

const printUserDeckTitle = () => {
  const deckTitle = document.getElementById("deckTitle");
  deckTitle.value = userDeck.title;
};
const printUserDeckCardsNumber = () => {
  const deckNumberCards = document.getElementById("deckNumberCards");
  const totalNumberCardsDeck = userDeck ? calculateTotalCardsDeck() : 0; //TODO: aprende a contar!!!
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
  const deckPriceCalculated = calculateTotalDeckPrice(userDeck);
  deckPrice.innerText = `DECK PRICE: ${deckPriceCalculated}€`;
};

const printDefaultView = () => {
  const defaultContainer = document.querySelector("#userDeckContent");
  defaultContainer.innerText = "DROP CARDS TO START YOUR DECK! BUDDY";
};

const printCardFound = (card)=>{
  const cardImg = document.createElement("img");
  cardImg.setAttribute("src", card.image_uris.border_crop);
  cardImg.setAttribute("class", "editDeck_card_found mtgaCard");
  cardImg.setAttribute('id', card.name);
  cardImg.setAttribute('draggable', 'true');
  cardImg.setAttribute('ondragstart',"drag(event)");
  cardsResultsContainer.appendChild(cardImg);
};

const calculateTotalCardsDeck = ()=>{
  let deck = JSON.parse(localStorage.getItem('selectedDeck'));
  let total = 0;
  deck.cards.forEach((card) =>{
    total += card.quantity;
  });
  return total;
}

const printUserDeck = () => {
  printUserDeckTitle();
  printUserDeckCardsNumber();
  printUserDeckSideBoardNumber();
  printUserDeckCards();
  printUserDeckPrice();
};

//#endregion

module.exports = {
  createHTMLContainers,
  setAttributesToContainers,
  createContainersInfo,
  insertDataIntoContainers,
  setCardInfo,
  printUserDeck,
  printUserDeckCardsNumber,
  printDefaultView,
  printCardFound,
  printUserDeckCards
};
