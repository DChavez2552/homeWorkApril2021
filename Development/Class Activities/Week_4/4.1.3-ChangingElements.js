// print the outer HTML of the navigation bar

document.querySelector('.nav-bar').outerHTML

// print the inner HTML of the navigation bar

document.querySelector('nav').innerHTML

// print the text content of the #class-schedule-list element

document.querySelector('#class-schedule-list').textContent

// select the classList for the first class-week, then add the class "week-1"

document.querySelector('.class-week').classList
document.querySelector('.class-week').classList.add('Week-1')

// select the img element and add a src attribute

document.querySelector('img').src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=768:*"

// change the font color of the h1 element

document.querySelector('h1').style.color = "aqua";