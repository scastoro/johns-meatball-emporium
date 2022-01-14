import Icon from './meatball.jpg';

console.log('More testing!');

const myIcon = new Image();

myIcon.src = Icon;

const element = document.createElement('div');

element.appendChild(myIcon);

document.body.appendChild(element); 