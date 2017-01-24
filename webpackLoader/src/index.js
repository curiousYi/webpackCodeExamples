import greeting from './greeting';
import sum from './sum';

console.log('index.js loaded');

document.body.appendChild(greeting());

console.log(sum(4,5));
