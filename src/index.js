import x from './main.js';
import jpg from './assets/1.jpg'

console.log(x);
console.log('hi,webpack');

// 引入图片
const img = document.querySelector('#app5')
img.innerHTML = `<img src ="${jpg}" width='300px'>`


// 懒加载
const button = document.createElement('button')
document.querySelector('#app5').appendChild(button)
button.innerHTML = '懒加载'
button.onclick = () => {
    const promise = import('./lazy.js')
    promise.then((module) => {
       module.default()
    }, () => {})
}