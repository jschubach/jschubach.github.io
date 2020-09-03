initData();

//populate container
//CREATEANDAPPEND FUNCTION FORKED FROM RECITATION 7 OF MIT'S 6.082S DESIGN FOR WEB CLASS CLASS TAUGHT BY LEA VEROU & PROF. DAVID KARGER, TEACHING ASSISTANTS FARNAZ JAHANBAKHSH, LUKE MURRAY, JUMANA ALMAHMOUD
function createAndAppend({itemType: itemType, className: className, parent: parent, text: text}) {
  let el = document.createElement(itemType);
  el.setAttribute("class", className);
  parent.append(el);

  if (typeof text !== 'undefined') {
    let textNode = document.createTextNode(text);
    el.append(textNode);
  }
  return el;
}

function addImage({src: src, wrapper: wrapper, parent: parent, class: className}) {
  var image = document.createElement('img');
  image.setAttribute("src", src);
  image.setAttribute("class", className);
  wrapper.append(image);
  parent.append(wrapper);
}

function populateCards(data) {
  populateCardsIndex++;
  var cardIndex = 0;
  var sortedCardIndex = 0;

  data.forEach(entry => {
    let colorclass = entry.datatype;
    let cardclass = colorclass.concat(" card-tile");

    let cardTile = createAndAppend({ itemType: "div", className: cardclass, parent: container, text: undefined });
    let cardContent = createAndAppend({ itemType: "div", className: "content", parent: cardTile, text: undefined });
    let cardName = createAndAppend({ itemType: "h2", className: undefined, parent: cardContent, text: entry.name });
    let cardAuthor = createAndAppend({ itemType: "h3", className: undefined, parent: cardContent, text: entry.author });
    let cardContextHeader = createAndAppend({ itemType: "h4", className: undefined, parent: cardContent, text: "Context" });
    let cardContext = createAndAppend({ itemType: "p", className: undefined, parent: cardContent, text: entry.context });
    let cardAnalysisHeader = createAndAppend({ itemType: "h4", className: undefined, parent: cardContent, text: "Analysis" });
    let cardAnalysis = createAndAppend({ itemType: "p", className: undefined, parent: cardContent, text: entry.analysis });
    if (entry.thumbnail) {
      let wrapper = createAndAppend({ itemType: "div", className: "img-wrapper", parent: cardTile, text: undefined });
      let image = addImage({ src: entry.thumbnail[0], wrapper: wrapper, parent: cardTile, class: "img-grid" });
      }
    else {
      if (entry.image) {
        let wrapper = createAndAppend({ itemType: "div", className: "img-wrapper", parent: cardTile, text: undefined });
        let image = addImage({ src: entry.image[0], wrapper: wrapper, parent: cardTile, class: "img-grid" });
        }
    }

    //if first time loading page, assign unique card Incides
    if (populateCardsIndex == 1) {
      cardIndex++;
      cardTile.setAttribute("data-index", cardIndex);
    }

    if (populateCardsIndex != 1) {
      cardTile.setAttribute("data-index-sorted", sortedCardIndex);
      sortedCardIndex++;
      console.log("sorted index added");
    }
  })
}

function renderModal(cardData) {
  let colorclass = cardData.datatype;

  let modalTile = createAndAppend({ itemType: "div", className: "modal", parent: page, text: undefined });
  modalTile.classList.add(colorclass);
  let modalHeader = createAndAppend({ itemType: "div", className: "modal-header", parent: modalTile, text: undefined });
  let modalHeaderBox = createAndAppend({ itemType: "div", className: "modal-header-box", parent: modalHeader, text: undefined });

  let cardName = createAndAppend({ itemType: "h2", className: undefined, parent: modalHeaderBox, text: cardData.name });
  let cardAuthor = createAndAppend({ itemType: "h3", className: undefined, parent: modalHeaderBox, text: cardData.author });
  let modalHeaderBoxTwo = createAndAppend({ itemType: "div", className: "modal-header-box", parent: modalHeader, text: undefined });
  // let closeButton = createAndAppend({ itemType: "button", className: "close-button", parent: modalHeaderBoxTwo, text: "x" });
  // closeButton.setAttribute("data", "close-button");
  // closeButton.setAttribute('onclick', console.log("working"));

  let modalContextHeader = createAndAppend({ itemType: "h4", className: undefined, parent: modalTile, text: "Context" });
  let modalContext = createAndAppend({ itemType: "p", className: undefined, parent: modalTile, text: cardData.context });

  let modalAnalysisHeader = createAndAppend({ itemType: "h4", className: undefined, parent: modalTile, text: "Analysis" });
  let modalAnalysis = createAndAppend({ itemType: "p", className: undefined, parent: modalTile, text: cardData.analysis });

  if (cardData.image) {
    let imageGrid = createAndAppend({ itemType: "div", className: "modal-img-grid", parent: modalTile, text: undefined });
    let images = cardData.image;
    images.forEach(image => {
      addImage({src: image, wrapper: imageGrid, parent: modalTile, class: "modal-img"});
    })
  }

  if (cardData.sources) {
    let sources = cardData.sources;
    let sourcesWrapper = createAndAppend({ itemType: "div", className: "img-source-wrapper", parent: modalTile, text: undefined });
    let sourcesHeader = createAndAppend({ itemType: "span", className: "img-source-header", parent: sourcesWrapper, text: "Sources:  " });
    sources.forEach(source => {
      createAndAppend({ itemType: "span", className: "img-source", parent: sourcesWrapper, text: source });
    })
  }

  if (cardData.tags) {
    let tagsWrapper = createAndAppend({ itemType: "div", className: "tags-wrapper", parent: modalTile, text: undefined });
    let tags = cardData.tags;
    tags.forEach(tag => {
      createAndAppend({ itemType: "span", className: "modal-tag", parent: tagsWrapper, text: tag });
    })
  }
  openModal(modalTile);
}

//OPENMODAL AND CLOSEMODAL FUNCTIONS FORKED FROM A youtube TUTORIAL ACCESSED via the youtube channel "Web Dev Simplified"
function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active');
  console.log("modal activated");
  overlay.classList.add('active');
  console.log("overlay activated");

  const closeModalButtons = document.querySelectorAll('[close-button]');
  console.log("modal buttons are");
  console.log(closeModalButtons);
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

function clearCardsContainer() {
  let deleted = document.querySelectorAll(".card-tile");
  let container = document.querySelector("#cards-container");
  deleted.forEach(el => {
      container.removeChild(el);
    })
}

function addButtonSensor(buttonID) {
  var button = document.querySelector(buttonID);
  let selector = button.id;
  console.log(selector);
  var confirmation = buttonID.concat(" sensor added");
  console.log(confirmation);

  button.addEventListener('click', function() {
    //create new array for dta matching selector
    clearCardsContainer();
    populateCards(sort(selector));
    addCardSensorsPostSort();
  })
}

//returns an array called selected
function sort(selector) {
    let selected = [];
    database.forEach(entry => {
      let datatype = entry.datatype;
      if (datatype === selector) {
        selected.push(entry);
      }
    })
  return selected;
}


function addCardSensors() {
  var cards = document.querySelectorAll(".card-tile");
  cards.forEach(card => {
    card.addEventListener('click', function (event) {

//make index=overall data array index if its showing all cards
      if (card.dataset.index) {
        let indexString = card.dataset.index;
        var index = (parseInt(indexString, 10) - 1);
        console.log("index added");
      }

      loadModal(index, database);
    });
  });
}

function addCardSensorsPostSort() {
    var cards = document.querySelectorAll(".card-tile");
    cards.forEach(card => {
      var cardname = card.querySelector("h2").textContent;
      console.log(cardname);
      var sortedIndex = database.findIndex(x => x.name === cardname);
      console.log(sortedIndex);

      card.addEventListener('click', function (event) {
        loadModal(sortedIndex, database);
      });
    });
}

function loadModal(index, array) {
  let cardData = array[index];
  renderModal(cardData);
  console.log("inside loadModal function");
}

var populateCardsIndex = 0;
let container = document.querySelector("#cards-container");
let page = document.querySelector("#page-area");

//TODO MAKE MORE CONCISE BY MAKING INPUT of addButtonSensor an array of buttonIDS?
addButtonSensor("#spacetypes");
addButtonSensor("#projects");
addButtonSensor("#atmospheres");
addButtonSensor("#projects");
addButtonSensor("#details");
addButtonSensor("#words");
addButtonSensor("#sites");
addButtonSensor("#standards");

populateCards(database);

var resetButton = document.querySelector("#reset");
resetButton.addEventListener('click', function() {
  location.reload();
  // clearCardsContainer();
  // populateCards(database);
  // addCardSensors();
})

//OVERLAY CODE FORKED FROM A youtube TUTORIAL ACCESSED via the youtube channel "Web Dev Simplified"
const overlay = document.getElementById('overlay');

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal);
  })
})

// closeModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     console.log("close button event listener working");
//     const modals = document.querySelectorAll('.modal.active');
//     modals.forEach(modal => {
//       closeModal(modal);
//     })
//   })
// })

if (populateCardsIndex = 1) {
  addCardSensors();
}

if (populateCardsIndex > 1) {
  addCardSensorsPostSort();
}
