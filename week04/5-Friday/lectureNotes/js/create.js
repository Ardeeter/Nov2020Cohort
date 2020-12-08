// 1. create an element

var div = document.createElement('div');
div.textContent = 'Hello World'

var anchor = document.createElement('a');

anchor1.textContent = "Google"; //node

anchor1.setAttribute('href', 'http://google.com')

div.appendChild(anchor1);


// 2. append new element to existing element in dom

var body = document.querySelector('body');

body.appendChild(div);

body.appendChild(anchor1);

var p =document.querySelector('p');
document.body.removeChild(p)

