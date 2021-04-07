'use strict';
const box = document.getElementById('box');
const buttons = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const heart1 = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');
// box.style.backgroundColor = 'blue'
// box.style.width = '200px'
box.style.cssText = 'background-color: green; width: 500px';
buttons[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';
for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}
hearts.forEach(current => current.style.backgroundColor = 'yellow');
const div = document.createElement('div');
const text = document.createTextNode('Нода');
div.classList.add('black');
// document.body.append(div)
wrapper.prepend(div);
// старый wrapper.insertBefore(div, hearts[0])
// hearts[1].before(div)
// hearts[1].after(div)
// circles[0].remove()
// hearts[0].replaceWith(circles[0])
// div.innerHTML = '<h1>xaxa</h1>'
// div.textContent = '<h1>xaxa</h1>'
div.insertAdjacentHTML('beforebegin', '<h1>xaxa</h1>');
