const {
  createHTMLContainers,
  createUserDeckContainers,
  createContainersInfo,
  insertDataIntoContainers,
  setCardInfo,
} = require("./printAuxFunctions");
// const { apiCaller } = require('./apiCaller');
const userDeckContent = document.querySelector("#userDeckContent");
const getCardByNameInDrop = (name) => {
  return apiCaller
    .getCardsByExactName(name)
    .then((response) => {
      console.log('FIJATEEE', response.data.card);
      apiCaller.addCardToDeck(response.data.card);
      const cnts = createHTMLContainers();
      createUserDeckContainers(cnts);
      createContainersInfo(cnts);
      insertDataIntoContainers(cnts);
      setCardInfo(cnts, response.data.card);
    })
    .catch((error) => {
      console.log(error);
    });
};

function allowDrop(event) {
  event.preventDefault();
  console.log("AllowDrop");
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
  getCardByNameInDrop(event.target.id);
  console.log("DRAG", event.target.id);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  console.log("DROP", data);
  // event.target.appendChild(document.getElementById(data));
}
