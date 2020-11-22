const {
  createHTMLContainers,
  setAttributesToContainers,
  createContainersInfo,
  insertDataIntoContainers,
  setCardInfo,
  printUserDeckCards,
} = require("./printAuxFunctions");

const userDeckContent = document.querySelector("#userDeckContent");
const ls = JSON.parse(localStorage.getItem("selectedDeck"));


function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

async function drop(event) {

  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  const result = await getCard(data);
  const userDeckUpdated = await addCardToDeck(result.data.card);
  const cnts = createHTMLContainers();
  setAttributesToContainers(cnts);
  createContainersInfo(cnts);
  insertDataIntoContainers(cnts);
  setCardInfo(cnts, result.data.card);
  localStorage.clear();
  localStorage.setItem('selectedDeck', JSON.stringify(userDeckUpdated.data.data));
  // TODO: refactorizar esta vaina!
  location.reload();
  // event.target.appendChild(document.getElementById(data));
}

const updateLS = () => {};

const checkRepeatedCard = (cardId) => {
  let exists = false;
  const cardsInLS = ls.cards;
  for (let card of cardsInLS) {
    if (card.cardId === cardId) {
      exists = true;
    }
  }
  return exists;
};


const getCard = (id)=>{
  try {
    const card = apiCaller.getCardsByExactName(id);
    return card;
  } catch (error) {
    console.log(error);
  }
};

const addCardToDeck = (card)=>{
  try {
  
  const result = apiCaller.addCardToDeck(card);
  return result;
    
  } catch (error) {
    console.log(error);
  }
};
