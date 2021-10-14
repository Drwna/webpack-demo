export default function lazy(){
    console.log('i am lazy load');
    const div = document.createElement('div')
    div.innerText = '哈哈哈哈哈'
    document.querySelector('#app5').appendChild(div)
}