
//const newp=document.createElement('p')
const newdiv=document.createElement('div')
//newp.textContent='your name '
newdiv.textContent='i am new div'

//const parent=document.querySelector('body')
//parent.appendChild(newdiv)
const div=document.getElementById('d1')
const existp=document.getElementById('p1')
div.style.color='blue'
div.style.backgroundColor='grey'
div.textContent='exist div'
const parentElement=div.parentNode
parentElement.insertBefore(newdiv, p1)

