'use strict';

const button = document.querySelector('button');
const p = document.querySelector('p');

p.style.textAlign = 'center';
button.style.margin = '0 auto';
button.style.display = 'block';

function newColor () {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = '#' + randomColor;
  p.innerHTML = '#' + randomColor;
}

button.addEventListener('click', newColor);