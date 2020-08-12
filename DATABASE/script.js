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

function addImage({src: src, wrapper: wrapper, parent: parent}) {
  var image = document.createElement('img');
  image.setAttribute("src", src);
  image.setAttribute("class", "img-grid");
  wrapper.append(image);
  parent.append(wrapper);
}

function populateCards(data) {
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
      let image = addImage({ src: entry.image[0], wrapper: wrapper, parent: cardTile });
      }
  })
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

//callback function for eventHandler(event)


let container = document.querySelector("#cards-container");
//TODO MAKE CLEANER BY MAKING INPUT of addButtonSensor an array of buttonIDS
addButtonSensor("#spacetypes");
addButtonSensor("#projects");
addButtonSensor("#atmospheres");
addButtonSensor("#projects");
addButtonSensor("#details");
addButtonSensor("#words");
addButtonSensor("#sites");

populateCards(database);

var resetButton = document.querySelector("#reset");
resetButton.addEventListener('click', function() {
  clearCardsContainer();
  populateCards(database);
})

//TODO implement a modal window

//TODO: CHANGE HEIGHT OF CARD BASED ON TYPE/AMOUNT OF CONENT
  // if (colorclass === "projects" || colorclass === "details") {
  //   var sizeclass = "big";
  //   }
  //
  // if (sizeclass === undefined) {
  //   var cardclass = colorclass.concat(" card-tile");
  // } else {
  //   var cardclass = colorclass.concat(" card-tile ").concat(sizeclass);
  // }
