function $(selector){
    return document.querySelector(selector)
}
const counter = $('#counter') 
const plus = $('#plus') 
const minus = $('#minus') 
const zero =$('#zero')

let count = 0
plus.onclick = () => {
    count = count + 1
    counter.textContent = count.toString()
}
minus.onclick = () => {
    count = count - 1
    counter.textContent = count.toString()
}
zero.onclick = () => {
    count = 0
    counter.textContent = count.toString()
}