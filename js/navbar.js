initnav();

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

let nav = document.getElementById("nav");
console.log("navbar success 1");
let navBar = createAndAppend({ itemType: "div", className: "nav-container", parent: nav, text: undefined});

console.log("navbar success 2");

navlinks.forEach(navlink => {
  let navSpan = createAndAppend({ itemType: "span", className: "nav-title", parent: navBar, text: undefined});
  let navLink = createAndAppend({ itemType: "a", className: "a-nav", parent: navSpan, text: navlink.name});
  navLink.setAttribute("href", navlink.href);
  console.log("navbar success 3");
})
