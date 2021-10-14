import x from './main.js';
import jpg from './assets/1.jpg'
console.log(jpg);

console.log(x);
console.log('hi,webpack');

const img = document.querySelector('#app5')
console.log(img);
img.innerHTML = `<img src ="${jpg}" width='300px'>`