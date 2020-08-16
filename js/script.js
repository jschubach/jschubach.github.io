initData();

//populate container
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

  data.forEach(entry => {
    let colorclass = entry.datatype;
    let cardclass = colorclass.concat(" card-tile");

    let cardTile = createAndAppend({ itemType: "div", className: cardclass, parent: container, text: undefined });
    let cardName = createAndAppend({ itemType: "h2", className: undefined, parent: cardTile, text: entry.name });
    let cardAuthor = createAndAppend({ itemType: "h3", className: undefined, parent: cardTile, text: entry.author });
    let cardContextHeader = createAndAppend({ itemType: "h4", className: undefined, parent: cardTile, text: "Context" });
    let cardContext = createAndAppend({ itemType: "p", className: undefined, parent: cardTile, text: entry.context });
    let cardAnalysisHeader = createAndAppend({ itemType: "h4", className: undefined, parent: cardTile, text: "Analysis" });
    let cardAnalysis = createAndAppend({ itemType: "p", className: undefined, parent: cardTile, text: entry.analysis });
    if (entry.image) {
      let wrapper = createAndAppend({ itemType: "div", className: "img-wrapper", parent: cardTile, text: undefined });
      let image = addImage({ src: entry.image[0], wrapper: wrapper, parent: cardTile, class: "img-grid" });
      }

    //if first time loading page, assign unique card Incides
    if (populateCardsIndex == 1) {
      cardIndex++;
    }

    cardTile.setAttribute("data-index", cardIndex);

  })
  console.log(populateCardsIndex);
}

function renderModal(cardData) {
  let modalTile = createAndAppend({ itemType: "div", className: "modal", parent: page, text: undefined });
  let modalHeader = createAndAppend({ itemType: "div", className: "modal-header", parent: modalTile, text: undefined });
  let modalHeaderBox = createAndAppend({ itemType: "div", className: "modal-header-box", parent: modalHeader, text: undefined });

  let cardName = createAndAppend({ itemType: "h2", className: undefined, parent: modalHeaderBox, text: cardData.name });
  let cardAuthor = createAndAppend({ itemType: "h3", className: undefined, parent: modalHeaderBox, text: cardData.author });
  let modalHeaderBoxTwo = createAndAppend({ itemType: "div", className: "modal-header-box", parent: modalHeader, text: undefined });
  let closeButton = createAndAppend({ itemType: "button", className: "close-button", parent: modalHeaderBoxTwo, text: "x" });
  closeButton.setAttribute("data", "data-close-button");

  let modalContextHeader = createAndAppend({ itemType: "h4", className: undefined, parent: modalTile, text: "Context" });
  let modalContext = createAndAppend({ itemType: "p", className: undefined, parent: modalTile, text: cardData.context });

  let modalAnalysisHeader = createAndAppend({ itemType: "h4", className: undefined, parent: modalTile, text: "Analysis" });
  let modalAnalysis = createAndAppend({ itemType: "p", className: undefined, parent: modalTile, text: cardData.analysis });

  if (cardData.image) {
    let imageGrid = createAndAppend({ itemType: "div", className: "modal-img-grid", parent: modalTile, text: undefined });
    let image = addImage({src: cardData.image[0], wrapper: imageGrid, parent: modalTile, class: "modal-img"});
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

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active');
  console.log("modal activated");
  console.log(overlay);
  overlay.classList.add('active');
  console.log("overlay activated");
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
    let selected = [];
    // var selector = "spacetypes"
    database.forEach(entry => {
      let datatype = entry.datatype;
      if (datatype === selector) {
        selected.push(entry);
      }
    })
    populateCards(selected);
    console.log("sorted");
  })
}

//NEED THIS TO RUN AFTER CARDS HAVE BEEN POPULATED
//add event listeners on all cards for if they are clicked on
function addCardSensors() {
  var cards = document.querySelectorAll(".card-tile");
  cards.forEach(card => {
    card.addEventListener('click', function (event) {
      let indexstring = card.dataset.index;
      var index = (parseInt(indexstring, 10) - 1);
      let cardData = database[index];
      renderModal(cardData);
      // alert(cardData.datatype);
    });
  })
}

//if a card is clicked on, get its data-index, go back to database[] and grab item with that index,
//store its key/value pairs as variables, and send those variables to renderModal

function addModalButtonSensor(buttonID) {
  var button = document.querySelector(buttonID);
  let selector = button.id;
  console.log(selector);
  var confirmation = buttonID.concat(" sensor added");
  console.log(confirmation);

  button.addEventListener('click', function() {
      renderModal();
    })
    console.log("modaled");
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
addModalButtonSensor("#modal");

populateCards(database);

var resetButton = document.querySelector("#reset");
resetButton.addEventListener('click', function() {
  clearCardsContainer();
  populateCards(database);
})


const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal);
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    //return outer div of main modal
    const modal = button.closest('.modal');
    closeModal(modal);
  })
})

addCardSensors();
