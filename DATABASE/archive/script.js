// data for reading
let database = [{
    datatype: 'materials'
    name: 'CMU',
    author: 'Frida Escobedo',
    context: 'Insert Context here',
    summary: 'Insert Summary here'
    reading: 'A material is removed',
    photos: [images/cmu-01.jpg, images/cmu-02.jpg],
    compare: ["example 1", "example 2"]
    tags: ["Paradoxes", "Leveraged Flaws"]
  }, {
    datatype: 'spacetypes'
    name: 'Multi-Purpose Room',
    author: '-',
    context: 'Insert Context here',
    summary: 'Insert Summary here'
    reading: 'A material is removed',
    photos: [images/cmu-01.jpg, images/cmu-02.jpg],
    compare: ["example 1", "example 2"]
    tags: ["Paradoxes", "Leveraged laws"]
}
}];

// create an OBJECT that this function will accept
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

function createCard (card) {
  let cardTile = createAndAppend({itemType: "div", className: "block-container" TODO SPECIFY COLORCLASS, parent: container, text: undefined });
  let cardName = createAndAppend({itemType: "h2", className: TODO SPECIFY COLORCLASS, parent: cardTile, text: card.name });
  let cardWrapper = createAndAppend({ itemType: "div", className: "data-wrapper", parent: cardName, text: undefined });
  card.tags.forEach(tag => {
    createAndAppend({itemType: "span", className: "tag", praent: cardWrapper, text: tag });
  })
}

let container = document.querySelector("#cards-container");

database.forEach(card => {
  createCard(card);
})
