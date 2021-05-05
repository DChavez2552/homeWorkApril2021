// create a new unordered list (ul) element

let newUl = document.createElement('ul')

// remove the paragraph element in the nav-bar 

document.querySelector('.nav-bar > p').remove()

// add your new ul element to the nav-bar
// create two new list item (li) elements, and add some text to them

let listItem = document.createElement('li')
let listItem2 = document.createElement('li')

// add the li elements to the ul in the nav-bar

document.querySelector(".nav-bar > ul").appendChild(listItem);